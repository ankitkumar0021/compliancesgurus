'use client'

import Image from 'next/image'

export default function BlogIntroWithImage() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center ">

        {/* Left Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Introduction</h2>

          <p className="text-gray-700 mb-4 leading-relaxed">
            As Internet Service Providers (ISPs) continue to handle massive amounts of data traffic across
            different networks, the demand for policy-based routing solutions has grown significantly.
            One such technology is IDPR (Inter-Domain Policy Routing), which enables ISPs to manage routing
            policies beyond traditional shortest-path approaches.
          </p>

          <p className="text-gray-700 leading-relaxed">
            In this blog, we’ll explore what IDPR records are, why they are important for ISPs,
            and how they benefit both service providers and customers.
          </p>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-80">
          <Image
            src="/images/blog.jpg"
            alt="IDPR Routing"
            fill
            className="object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  )
}
