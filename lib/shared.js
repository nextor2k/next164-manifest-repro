export function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

export const CATALOG = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  priceCents: (i + 1) * 199,
}));
