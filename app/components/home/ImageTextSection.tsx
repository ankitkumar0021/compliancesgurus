import Image from 'next/image'

export default function ImageTextSection() {
  return (
    <section className="py-20 bg-[#34495e]">
      <div className="container mx-auto px-4 space-y-20">

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         <div className="w-full md:w-4/5 lg:w-3/4 mx-auto">
            <Image
                src="/images/chart.jpg"
                alt="Customized Solutions"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-contain"
            />
            </div>


          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6">
              Customized<br />Solutions
            </h2>
            <p className="text-lg leading-relaxed">
              We tailor our solutions to fit your company’s needs and goals.
              Our services are flexible, allowing you to adjust their scale
              as your needs evolve.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="w-full md:w-4/5 lg:w-3/4 mx-auto">
            <Image
                src="/images/expert.jpg"
                alt="Expertise and Experience"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg object-contain"
            />
            </div>


          <div className="text-white">
            <h2 className="text-5xl font-bold mb-6">
              Expertise and<br />Experience
            </h2>
            <p className="text-lg leading-relaxed">
              Our certified accountants have over 11 years of experience in
              financial management. We can handle the accounting needs of any
              organization, from small businesses to large corporations.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}
