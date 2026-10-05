import { toCanvas } from 'html-to-image';

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

// Capture the existing card, then add branding outside its content.
export async function openShareSnapshot(source, data) {
  if (document.querySelector('.share-snapshot-dialog')) return;
  const dialog = document.createElement('dialog');
  dialog.className = 'share-snapshot-dialog';
  dialog.setAttribute('aria-label', 'Share a KuduPray snapshot');
  dialog.innerHTML = `<div class="snapshot-heading"><h2>Share snapshot</h2><div class="snapshot-header-actions"><button type="button" class="snapshot-message-action" data-action="message" aria-label="Share message" title="Share message"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5 8 8 0 0 1-3.5-.8L4 20l1.8-4.2a8 8 0 0 1-.8-3.8 7.5 7.5 0 0 1 15-.5Z"/><path d="M8 11h8m-8 3h5"/></svg></button><button type="button" data-action="share" aria-label="Share image" title="Share image" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 16V4m-5 5 5-5 5 5M5 14v5h14v-5"/></svg></button><button type="button" data-action="download" aria-label="Download image" title="Download image" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v12m-5-5 5 5 5-5M5 19h14"/></svg></button><button type="button" class="snapshot-close" aria-label="Close snapshot"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div></div>
    <div class="snapshot-preview"><p role="status">Preparing your card…</p><img alt="KuduPray card snapshot" hidden></div>
    <p class="snapshot-status" role="status" aria-live="polite"></p>`;
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
  dialog.querySelector('[data-action="message"]').onclick = async () => {
    const result = await window.shareKuduPrayMessage(data);
    status.textContent = ({ shared: 'Message shared.', copied: 'Message copied.', cancelled: 'Sharing cancelled.', failed: 'Unable to share or copy. Please try again.', busy: 'A share is already open.' })[result] || '';
  };
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
      status.textContent = '';
    } catch (error) {
      status.textContent = error?.name === 'AbortError' ? 'Sharing cancelled.' : 'Image sharing is unavailable. Use Download image instead.';
    } finally { shareButton.disabled = false; }
  };
  document.body.append(dialog);
  document.body.style.overflow = 'hidden';
  dialog.showModal();
  try {
    // Start branding downloads while the card is being rasterized.
    const brandingPromise = Promise.all([
      loadImage('/brand/kudupray-emblem.png'),
      loadImage('/brand/kudupray-wordmark.png')
    ]);
    let captured;
    if (!source) {
      // The Support share has no source card to capture: make its preview the
      // complete official emblem-and-wordmark lockup instead of a blank panel.
      const lockup = await loadImage('/brand/kudupray-lockup.png');
      captured = document.createElement('canvas');
      captured.width = 900;
      captured.height = 700;
      const previewContext = captured.getContext('2d');
      previewContext.fillStyle = '#f2f9f5';
      previewContext.fillRect(0, 0, captured.width, captured.height);
      previewContext.fillStyle = 'rgba(255,255,255,.72)';
      previewContext.beginPath();
      previewContext.roundRect(24, 24, 852, 652, 30);
      previewContext.fill();
      previewContext.strokeStyle = 'rgba(6,120,87,.14)';
      previewContext.lineWidth = 2;
      previewContext.stroke();
      previewContext.drawImage(lockup, 170, 140, 560, 420);
    } else {
      const bounds = source.getBoundingClientRect();
      // Include badges and shadows that extend beyond the card's border.
      const captureInset = 16;
      captured = await toCanvas(source, {
        width: Math.ceil(bounds.width + captureInset * 2),
        height: Math.ceil(bounds.height + captureInset * 2),
        pixelRatio: 1.5,
        // html-to-image walks document stylesheets to inline web fonts. That
        // walk throws on cross-origin Google Fonts/Font Awesome sheets and
        // may attempt to insert malformed imported rules. The live page has
        // already loaded its fonts, so keep the rendered computed styles and
        // skip the unsafe stylesheet scan for this snapshot.
        skipFonts: true,
        backgroundColor: document.body.classList.contains('dark-mode') ? '#14251d' : '#f2f9f5',
        filter: node => !node.classList?.contains('dua-card-options')
          && !(node.tagName === 'I' && node.parentElement?.classList.contains('dua-options-trigger')),
        style: { width: `${bounds.width}px`, height: `${bounds.height}px`, boxSizing: 'border-box',
          margin: '0', transform: `translate(${captureInset}px, ${captureInset}px)`, animation: 'none' }
      });
    }
    if (closed) return;
    const [emblem, wordmark] = await brandingPromise;
    if (closed) return;
    const canvas = document.createElement('canvas');
    const padding = 32;
    const footer = 108;
    canvas.width = captured.width + padding * 2;
    canvas.height = captured.height + padding * 2 + footer;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#edf7f2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(captured, padding, padding);
    const y = captured.height + padding * 2;
    ctx.fillStyle = '#064e3b';
    ctx.fillRect(0, y, canvas.width, footer);
    // Keep the existing footer lockup for dua and other in-app card shares.
    const logoX = padding;
    const logoY = y + 20;
    ctx.fillStyle = '#f2f9f5';
    ctx.beginPath();
    ctx.roundRect(logoX, logoY, 326, 68, 14);
    ctx.fill();
    ctx.fillStyle = '#064e3b';
    ctx.beginPath();
    ctx.roundRect(logoX + 8, logoY + 6, 56, 56, 12);
    ctx.fill();
    ctx.drawImage(emblem, logoX + 12, logoY + 10, 48, 48);
    ctx.drawImage(wordmark, logoX + 74, logoY + 16, 238, 36);
    const copyX = logoX + 346;
    const copyWidth = Math.max(80, canvas.width - padding - copyX);
    ctx.fillStyle = '#e6f5ee';
    ctx.font = '600 26px sans-serif';
    while (ctx.measureText('Your daily worship companion').width > copyWidth && parseFloat(ctx.font) > 20) {
      ctx.font = `600 ${parseFloat(ctx.font) - 1}px sans-serif`;
    }
    ctx.fillText('Your daily worship companion', copyX, y + 49, copyWidth);
    const hostname = new URL(data.url).hostname;
    ctx.font = '600 22px sans-serif';
    while (ctx.measureText(hostname).width > copyWidth && parseFloat(ctx.font) > 18) {
      ctx.font = `600 ${parseFloat(ctx.font) - 1}px sans-serif`;
    }
    ctx.fillText(hostname, copyX, y + 78, copyWidth);
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
    status.textContent = '';
  } catch {
    if (!closed) {
      dialog.querySelector('.snapshot-preview p').textContent = 'Unable to prepare the image. You can still share the message below.';
      status.textContent = '';
    }
  }
}
