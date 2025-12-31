'use client'

export default function MapSectionHome() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[#243B53] mb-3">
            Our Location
          </h2>
          <p className="text-gray-600 text-sm">
            Find us easily on the map
          </p>
        </div>

        <div className="w-full h-112.5 rounded-2xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3504.0140437346304!2d77.32501200000002!3d28.569341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5bc275104e1%3A0xf296de5be453bf26!2sCompliance%20Gurus%20-%20ISP%20VNO%20DOT%20%2FAGR(License%20Fee)%2F%20TRAI%2F%20TTP%20Compliances!5e0!3m2!1sen!2sin!4v1767177906808!5m2!1sen!2sin"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  )
}
