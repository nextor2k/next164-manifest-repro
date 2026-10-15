"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useQueryState, parseAsString } from "nuqs";

export function SortBar() {
  const router = useRouter();
  const params = useSearchParams();
  const [sort, setSort] = useQueryState("sort", parseAsString.withDefault("price"));
  return (
    <nav>
      <button type="button" onClick={() => setSort(sort === "price" ? "name" : "price")}>
        sort: {sort} (params: {params.size}, router: {router ? "ok" : "none"})
      </button>
    </nav>
  );
}
