export function calculateZakat({ assets, liabilities, nisab, hawl }) {
  const values = [...assets, liabilities, nisab].map(value => value === '' ? 0 : Number(value));
  if (values.some(value => !Number.isFinite(value) || value < 0)) return { status: 'invalid' };
  const total = values.slice(0, assets.length).reduce((sum, value) => sum + value, 0);
  if (!Number.isFinite(total)) return { status: 'invalid' };
  const debt = values[assets.length];
  const threshold = values[assets.length + 1];
  const net = Math.max(0, total - debt);
  const eligible = threshold > 0 && net >= threshold;
  const estimate = eligible ? Math.round(net * 0.025 * 100) / 100 : 0;
  return { total, debt, net, threshold, estimate, status: !threshold ? 'missing-nisab' : !eligible ? 'below-nisab' : !hawl ? 'hawl-unconfirmed' : 'due' };
}
