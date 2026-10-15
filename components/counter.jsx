"use client";

import { useState } from "react";
import { formatPrice } from "../lib/shared";

export function Counter({ initial = 0 }) {
  const [count, setCount] = useState(initial);
  return (
    <button type="button" onClick={() => setCount((c) => c + 1)}>
      count: {count} ({formatPrice(count * 100)})
    </button>
  );
}
