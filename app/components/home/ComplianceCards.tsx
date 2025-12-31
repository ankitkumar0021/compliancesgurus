'use client'

import { FaMoneyBillWave, FaBullseye } from 'react-icons/fa'

export default function ComplianceCards() {
  const cards = [
    {
      title: 'AGR (Adjusted Gross Revenue) Calculations',
      description:
        'We handle Adjusted Gross Revenue (AGR) calculations to provide accurate financial insights. This helps in precise financial planning and reporting.',
      bg: 'bg-[#354B63]',
      text: 'text-white',
      icon: <FaMoneyBillWave className="text-3xl text-white" />,
    },
    {
      title: 'Comprehensive Monthly, Quarterly, and Annual Reporting',
      description:
        'We offer comprehensive reporting on a monthly, quarterly, and annual basis. This ensures you receive detailed insights regularly to track progress and make informed decisions.',
      bg: 'bg-[#078AA3]',
      text: 'text-white',
      icon: <FaBullseye className="text-3xl text-white" />,
    },
    {
      title: 'A Broad Spectrum of Additional Compliance Services',
      description:
        'Including TRAI and Telecom Trusted Portal (TTP) reporting.',
      bg: 'bg-[#354B63]',
      text: 'text-white',
      icon: null,
      border: 'border border-gray-200',
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`${card.bg} ${card.text} ${card.border || ''} rounded-none p-10 min-h-105 flex flex-col`}
            >
              {card.icon && <div className="mb-8">{card.icon}</div>}

              <h3 className="text-3xl font-bold leading-tight mb-8">
                {card.title}
              </h3>

              <p className="text-sm leading-relaxed opacity-90">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
