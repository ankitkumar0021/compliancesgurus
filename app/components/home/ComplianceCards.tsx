'use client'
import Image from 'next/image'

export default function ComplianceCards() {
  const cards = [
    {
      title: 'AGR (Adjusted Gross Revenue) Calculations',
      desc: 'We handle Adjusted Gross Revenue (AGR) calculations to provide accurate financial insights.',
      bg: 'bg-[#354B63]',
      img: '/images/financial-advisor.png',
    },
    {
      title: 'Comprehensive Monthly, Quarterly, and Annual Reporting',
      desc: 'We offer detailed monthly, quarterly, and annual reporting to track progress effectively.',
      bg: 'bg-[#078AA3]',
      img: '/vision.png',
    },
    {
      title: 'A Broad Spectrum of Additional Compliance Services',
      desc: 'Including TRAI and Telecom Trusted Portal (TTP) reporting.',
      bg: 'bg-[#354B63]',
      img: null, 
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div key={i} className={`${c.bg} text-white p-10 flex flex-col`}>
            {c.img && (
              <div className="mb-8 w-18 h-18 rounded-full flex items-center justify-center">
                <Image src={c.img} alt={c.title} width={50} height={50} />
              </div>
            )}
            <h3 className="text-3xl font-bold mb-6">{c.title}</h3>
            <p className="text-sm opacity-90">{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
