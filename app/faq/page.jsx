import dynamic from "next/dynamic";
import { Counter } from "../../components/counter";
import { FaqList } from "../../components/faq-list";

const PriceForm = dynamic(() => import("../../components/price-form").then((m) => m.PriceForm));

const QUESTIONS = [
  "What is this?",
  "How does it work?",
  "Where do I start?",
  "Is it fast?",
  "Who maintains it?",
];

export default function Faq() {
  return (
    <main>
      <h1>FAQ</h1>
      <Counter initial={10} />
      <FaqList questions={QUESTIONS} />
      <PriceForm />
    </main>
  );
}
