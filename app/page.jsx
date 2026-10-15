import Link from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { Counter } from "../components/counter";
import { Catalog } from "../components/catalog";
import { SortBar } from "../components/sort-bar";
import { CATALOG } from "../lib/shared";

const ItemFilter = dynamic(() => import("../components/item-filter").then((m) => m.ItemFilter));

export default function Home() {
  return (
    <main>
      <h1>Repro home ({CATALOG.length} items)</h1>
      <Counter />
      <Suspense>
        <SortBar />
      </Suspense>
      <ItemFilter />
      <Catalog />
      <Link href="/faq">FAQ</Link>
    </main>
  );
}
