'use client'

export default function IdprHome() {
  return (
    <section
      className="relative h-[50vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          IDPR Records for ISPs
        </h1>
      </div>
    </section>
  )
}
