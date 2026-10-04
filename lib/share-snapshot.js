import { toCanvas } from 'html-to-image';

// Capture the existing card, then add branding outside its content.
export async function openShareSnapshot(source, data) {
  if (document.querySelector('.share-snapshot-dialog')) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'share-snapshot-dialog';
  dialog.setAttribute('aria-label', 'Share a KuduPray snapshot');
  dialog.innerHTML = `<div class="snapshot-heading"><div><small>KUDUPRAY</small><h2>Share a snapshot</h2></div><button type="button" class="snapshot-close" aria-label="Close snapshot">×</button></div>
    <div class="snapshot-preview"><p role="status">Preparing your card…</p><img alt="KuduPray card snapshot" hidden></div>
    <p class="snapshot-status" role="status" aria-live="polite"></p>
    <div class="snapshot-actions"><button type="button" data-action="share" disabled>Share image</button><button type="button" data-action="download" disabled>Download image</button><button type="button" data-action="text">Share message</button></div>`;
  const opener = document.activeElement;
  const previousOverflow = document.body.style.overflow;
  const status = dialog.querySelector('.snapshot-status');
  let file, objectUrl, closed = false;
  const shareButton = dialog.querySelector('[data-action="share"]');
  const downloadButton = dialog.querySelector('[data-action="download"]');
  const download = () => {
    if (!file || !objectUrl) return;
    const link = document.createElement('a');
    link.href = objectUrl;
    link.download = file.name;
    link.click();
    status.textContent = 'Image downloaded — ready to attach to your message.';
  };
  dialog.querySelector('.snapshot-close').onclick = () => dialog.close();
  dialog.addEventListener('close', () => {
    closed = true;
    if (objectUrl) URL.revokeObjectURL(objectUrl);
    document.body.style.overflow = previousOverflow;
    dialog.remove();
    if (opener?.isConnected) opener.focus({ preventScroll: true });
  }, { once: true });
  downloadButton.onclick = download;
  shareButton.onclick = async () => {
    if (!file || shareButton.disabled) return;
    if (!navigator.canShare?.({ files: [file] }) || !navigator.share) return download();
    shareButton.disabled = true;
    try {
      await navigator.share({ files: [file], ...data });
      status.textContent = 'Your KuduPray snapshot was shared.';
    } catch (error) {
      status.textContent = error?.name === 'AbortError' ? 'Sharing cancelled.' : 'Image sharing is unavailable. Use Download image instead.';
    } finally { shareButton.disabled = false; }
  };
  dialog.querySelector('[data-action="text"]').onclick = async () => {
    const result = await window.shareKuduPrayMessage(data);
    status.textContent = ({ shared: 'Message shared.', copied: 'Message and KuduPray link copied.', cancelled: 'Sharing cancelled.', failed: 'Unable to share or copy. Please try again.' })[result] || '';
  };
  document.body.append(dialog);
  document.body.style.overflow = 'hidden';
  dialog.showModal();
  let temporary;
  try {
    await document.fonts.ready;
    if (!source) {
      temporary = document.createElement('section');
      temporary.className = 'snapshot-app-card';
      temporary.innerHTML = '<img src="/brand/kudupray-wordmark.png" alt="KuduPray"><h3>Your daily worship companion</h3><p></p>';
      temporary.querySelector('p').textContent = data.text;
      document.body.append(temporary);
      source = temporary;
    }
    const bounds = source.getBoundingClientRect();
    // Include badges and shadows that extend beyond the card's border.
    const captureInset = 16;
    const captured = await toCanvas(source, {
      width: Math.ceil(bounds.width + captureInset * 2),
      height: Math.ceil(bounds.height + captureInset * 2),
      pixelRatio: 2,
      backgroundColor: document.body.classList.contains('dark-mode') ? '#14251d' : '#f2f9f5',
      filter: node => !node.classList?.contains('dua-card-options')
        && !(node.tagName === 'I' && node.parentElement?.classList.contains('dua-options-trigger')),
      style: { width: `${bounds.width}px`, height: `${bounds.height}px`, boxSizing: 'border-box',
        margin: '0', transform: `translate(${captureInset}px, ${captureInset}px)`, animation: 'none' }
    });
    if (closed) return;
    const canvas = document.createElement('canvas');
    const padding = 32;
    const footer = 130;
    canvas.width = captured.width + padding * 2;
    canvas.height = captured.height + padding * 2 + footer;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#edf7f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(captured, padding, padding);
    const y = captured.height + padding * 2;
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, y, canvas.width, footer);
    ctx.fillStyle = '#fde68a';
    ctx.font = 'bold 30px sans-serif';
    ctx.fillText('KuduPray', padding, y + 43);
    ctx.fillStyle = '#e6f5ee';
    ctx.font = '20px sans-serif';
    ctx.fillText('Your daily worship companion', padding, y + 77);
    ctx.font = '18px sans-serif';
    ctx.fillText(new URL(data.url).hostname, padding, y + 108);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
    if (!blob) throw new Error('Empty snapshot');
    if (closed) return;
    const name = data.title.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase();
    file = new File([blob], `${name || 'kudupray'}-card.png`, { type: 'image/png' });
    objectUrl = URL.createObjectURL(file);
    const preview = dialog.querySelector('.snapshot-preview');
    preview.querySelector('p').remove();
    preview.querySelector('img').src = objectUrl;
    preview.querySelector('img').hidden = false;
    shareButton.disabled = false;
    downloadButton.disabled = false;
    if (!navigator.share || !navigator.canShare?.({ files: [file] })) shareButton.hidden = true;
    status.textContent = 'Your card includes KuduPray’s identity and website.';
  } catch {
    if (!closed) {
      dialog.querySelector('.snapshot-preview p').textContent = 'Unable to prepare the image. You can still share the message below.';
      status.textContent = '';
    }
  } finally { temporary?.remove(); }
}
