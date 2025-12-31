type Props = {
  title: string
  description: string
  image: string
}

export default function ServiceHero({ title, image }: Props) {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center text-center text-white"
      style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        {/* <p className="mt-4 text-lg text-gray-200">{description}</p> */}
      </div>
    </section>
  )
}
