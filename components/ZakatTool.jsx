"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { calculateZakat } from "../lib/zakat.mjs";

const fields = [
  ['cash', 'Cash & bank balances'], ['gold', 'Gold market value'],
  ['silver', 'Silver market value'], ['investments', 'Zakatable investments'],
  ['stock', 'Business stock for sale'], ['receivables', 'Recoverable money owed to you'],
];
const bases = { silver: 595, gold: 85, 'silver-alt': 612.36, 'gold-alt': 87.48 };
const messages = { invalid: 'Use valid, non-negative amounts.', 'missing-nisab': 'Enter a current metal price or your nisab threshold.', 'below-nisab': 'Your net wealth is below the selected nisab.', 'hawl-unconfirmed': 'Estimate only — confirm that a full Hijri year has passed.', due: 'Estimated Zakat al-Mal due at 2.5%.' };

function AmountField({ label, value, onChange, currency }) {
  return <label className="zakat-field"><span>{label}</span><div className="zakat-input"><small>{currency}</small><input type="number" min="0" step="0.01" inputMode="decimal" value={value} onChange={event => onChange(event.target.value)} placeholder="0.00" /></div></label>;
}

export default function ZakatTool() {
  const [root, setRoot] = useState(null);
  const [currency, setCurrency] = useState('KES');
  const [amounts, setAmounts] = useState({});
  const [basis, setBasis] = useState('silver');
  const [price, setPrice] = useState('');
  const [hawl, setHawl] = useState(false);
  useEffect(() => { setRoot(document.body); }, []);
  const reset = () => { setAmounts({}); setPrice(''); setHawl(false); };
  const result = calculateZakat({ assets: fields.map(([key]) => amounts[key] ?? ''), liabilities: amounts.debt ?? '', nisab: basis === 'custom' ? price : price === '' ? '' : Number(price) * bases[basis], hawl });
  const money = value => new Intl.NumberFormat('en', { style: 'currency', currency, maximumFractionDigits: 2 }).format(value);
  const close = () => window.closeGuide?.();
  return <>
    <button type="button" className="companion-menu-tile" data-companion="zakat" aria-haspopup="dialog" aria-controls="view-companion-zakat" onClick={() => window.openGuide?.('companion-zakat')}>
      <span className="companion-menu-icon" aria-hidden="true"><i className="fa-solid fa-hand-holding-heart" /></span>
      <span className="companion-menu-label"><strong>Zakat Calculator</strong><small>Calculate with clarity and care</small></span>
      <i className="fa-solid fa-arrow-right companion-menu-arrow" aria-hidden="true" />
    </button>
    {root && createPortal(<div id="view-companion-zakat" className="guide-modal companion-modal zakat-modal" role="dialog" aria-modal="true" aria-hidden="true" aria-labelledby="zakat-title" onClick={event => { if (event.target === event.currentTarget) close(); }}>
      <div className="modal-card card companion-card zakat-card">
        <div className="companion-header"><div className="companion-heading"><div className="companion-icon tile-icon icon-emerald" aria-hidden="true"><i className="fa-solid fa-hand-holding-heart" /></div><span><small>Give with understanding</small><strong id="zakat-title">Zakat Calculator</strong></span></div><button type="button" className="modal-close-btn" aria-label="Close Zakat calculator" onClick={close}><i className="fa-solid fa-xmark" aria-hidden="true" /></button></div>
        <p className="zakat-intro">A clear estimate for Zakat al-Mal. Enter eligible wealth in one currency; personal belongings and your main home are excluded.</p>
        <section className="zakat-section"><h3>Your nisab basis</h3><div className="zakat-grid">
          <label className="zakat-field"><span>Currency</span><select value={currency} onChange={event => { setCurrency(event.target.value); reset(); }}>{['KES', 'USD', 'SAR', 'GBP', 'EUR', 'AED'].map(code => <option key={code}>{code}</option>)}</select></label>
          <label className="zakat-field"><span>Nisab standard</span><select value={basis} onChange={event => { setBasis(event.target.value); setPrice(''); }}><option value="silver">Silver · 595 g</option><option value="gold">Gold · 85 g</option><option value="silver-alt">Silver · 612.36 g</option><option value="gold-alt">Gold · 87.48 g</option><option value="custom">My confirmed nisab</option></select></label>
          <AmountField label={basis === 'custom' ? 'Confirmed nisab amount' : 'Current price per gram'} value={price} onChange={setPrice} currency={currency} />
          <div className="zakat-threshold"><small>Nisab threshold</small><strong>{result.threshold > 0 ? money(result.threshold) : 'Enter a price above'}</strong></div>
        </div><p className="zakat-hint">Use today’s local metal price. Changing currency clears amounts; it does not convert them.</p></section>
        <section className="zakat-section"><h3>Eligible wealth</h3><div className="zakat-grid">{fields.map(([key, label]) => <AmountField key={key} label={label} currency={currency} value={amounts[key] ?? ''} onChange={value => setAmounts(previous => ({ ...previous, [key]: value }))} />)}<AmountField label="Eligible debts due" currency={currency} value={amounts.debt ?? ''} onChange={value => setAmounts(previous => ({ ...previous, debt: value }))} /></div><label className="zakat-hawl"><input type="checkbox" checked={hawl} onChange={event => setHawl(event.target.checked)} /><span>A full Hijri year has passed since my wealth reached nisab.</span></label></section>
        <section className="zakat-result" aria-live="polite" aria-atomic="true"><small>{result.status === 'due' ? 'Estimated Zakat due' : 'Your Zakat estimate'}</small><strong>{result.status === 'invalid' || result.status === 'missing-nisab' ? '—' : money(result.estimate)}</strong><p>{messages[result.status]}</p>{result.status !== 'invalid' && <dl><div><dt>Total assets</dt><dd>{money(result.total)}</dd></div><div><dt>Eligible debts</dt><dd>{money(result.debt)}</dd></div><div><dt>Net wealth</dt><dd>{money(result.net)}</dd></div></dl>}</section>
        <details className="zakat-guidance"><summary>What should I include?</summary><p>Include cash, eligible precious metals, trade stock and recoverable receivables. Include only the zakatable portion of investments. Personal jewellery, debt deductions and the lunar-year conditions differ by scholarly approach; follow guidance appropriate to your circumstances. Do not deduct an entire long-term mortgage automatically.</p><p>This estimate covers monetary wealth, not Zakat al-Fitr, crops or livestock. Zakat is calculated on all eligible net wealth, not only the amount above nisab.</p><a href="https://islamicrelief.org.au/our-work/islamic-giving/nisab/" target="_blank" rel="noopener noreferrer">Read Islamic Relief’s nisab guidance ↗</a></details>
        <div className="zakat-footer"><small>Your amounts stay in this session only.</small><button type="button" onClick={reset}>Reset amounts</button></div>
      </div>
    </div>, root)}
  </>;
}
