"use client"
import Image from "next/image"

interface ServiceHeadProps {
  title: string
  description: string
  image: string
}

export default function ServiceHead({
  title,
  description,
  image,
}: ServiceHeadProps) {
  return (
    <section className="relative min-h-[55vh] flex items-center overflow-hidden">
      
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 lg:px-8 py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-6 max-w-4xl text-lg text-gray-200 leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
