type Item = {
  icon: string
  title: string
  description: string
}

export default function ServiceInfoBlocks({ items }: { items: Item[] }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {items.map((item, i) => (
          <div key={i} className="p-6 border rounded-lg">
            <div className="text-3xl">{item.icon}</div>
            <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
