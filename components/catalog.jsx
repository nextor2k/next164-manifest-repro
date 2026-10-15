"use client";

import { CATALOG, formatPrice } from "../lib/shared";

export function Catalog() {
  return (
    <ul>
      {CATALOG.map((item) => (
        <li key={item.id}>
          {item.name} — {formatPrice(item.priceCents)}
        </li>
      ))}
    </ul>
  );
}
