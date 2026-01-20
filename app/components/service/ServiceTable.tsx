// app/components/service/ServiceTable.tsx
import React from "react";

export type Row = {
  readonly title: string;
  readonly description: string;
};

export type TableSection = {
  readonly title: string;
  readonly rows: readonly Row[];
};

type Props = {
  sections: readonly TableSection[];
};

export default function ServiceTable({ sections }: Props) {
  if (!sections || sections.length === 0) return null;

  return (
    <>
      {sections.map((section, i) => (
        <section key={i} className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              {section.title}
            </h2>

            <div className="border-t divide-y">
              {section.rows.map((row, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-3 gap-10 py-10"
                  aria-labelledby={`row-${i}-${index}`}
                >
                  <div
                    id={`row-${i}-${index}`}
                    className="font-semibold text-lg"
                  >
                    {row.title}
                  </div>
                  <div className="text-gray-600 leading-relaxed md:col-span-2">
                    {row.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
