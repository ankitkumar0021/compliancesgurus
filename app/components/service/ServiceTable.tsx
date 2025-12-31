type Row = {
  title: string
  description: string
}

type TableSection = {
  title: string
  rows: Row[]
}

export default function ServiceTable({
  sections,
}: {
  sections: TableSection[]
}) {
  return (
    <>
      {sections.map((section, i) => (
        <section key={i} className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              {section.title}
            </h2>

            <div className="border-t">
              {section.rows.map((row, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-3 gap-10 py-10 border-b"
                >
                  <div className="font-semibold text-lg">
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
  )
}
