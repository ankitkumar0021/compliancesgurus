"use client"
import { FaMoneyBillWave } from "react-icons/fa"

interface ServiceMainHeroProps {
  title: string
  description: string
}

export default function ServiceMainHero({
  title,
  description,
}: ServiceMainHeroProps) {
  return (
    <section className="bg-[#354b63] py-20">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        
        <div className="flex justify-center mb-6">
          <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center">
            <FaMoneyBillWave className="text-xl" />
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {title}
        </h2>

        <p className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>

      </div>
    </section>
  )
}
