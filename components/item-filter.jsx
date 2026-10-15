"use client";

import { format } from "date-fns";
import { CalendarDays, Search } from "lucide-react";
import { useState } from "react";
import { formatPrice } from "../lib/shared";

export function ItemFilter() {
  const [since, setSince] = useState(new Date());
  return (
    <section>
      <Search size={16} />
      <input value={format(since, "yyyy-MM-dd")} onChange={(e) => setSince(new Date(e.target.value))} />
      <CalendarDays size={16} />
      <output>{formatPrice(since.getTime() % 100000)}</output>
    </section>
  );
}
