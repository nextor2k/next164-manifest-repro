"use client";

export function FaqList({ questions }) {
  return (
    <dl>
      {questions.map((q) => (
        <div key={q.toLowerCase().replace(/[^a-z0-9]+/g, "-")}>
          <dt>{q}</dt>
          <dd>Answer for {q}.</dd>
        </div>
      ))}
    </dl>
  );
}
