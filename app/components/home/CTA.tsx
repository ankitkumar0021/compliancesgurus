import Link from 'next/link'
import { FaPhoneAlt, FaCalendarAlt, FaHeadset } from 'react-icons/fa'

const CTA = () => {
  return (
    <section className="section-padding bg-primary text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Simplify Your Telecom Compliance?
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Get expert guidance and ensure 100% regulatory compliance for your ISP or telecom business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
              <FaPhoneAlt className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Call Now</h3>
            <p className="text-blue-200 mb-6">Speak directly with our compliance experts</p>
            <a
              href="tel:+918178861057"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition-colors"
            >
              +91 81788 61057
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
              <FaCalendarAlt className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Schedule Consultation</h3>
            <p className="text-blue-200 mb-6">Free 30-minute compliance assessment</p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Book Now
            </Link>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
              <FaHeadset className="text-3xl" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Email Support</h3>
            <p className="text-blue-200 mb-6">Get detailed proposals and quotes</p>
            <a
              href="mailto:contact@compliancesgurus.com"
              className="inline-block bg-white text-blue-900 font-bold py-3 px-8 rounded-lg hover:bg-blue-100 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-white rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold text-blue-900 mb-4">
            Don&apos;t Risk Penalties - Ensure Compliance Today
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join hundreds of telecom businesses who trust us with their regulatory compliance needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center"
            >
              Get Free Compliance Audit
            </Link>
            <Link
              href="/services"
              className="btn-secondary text-[#0a95b4] inline-flex items-center justify-center"
            >
              View All Services
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-6">
            *Free compliance audit includes AGR calculation review and regulatory gap analysis
          </p>
        </div>
      </div>
    </section>
  )
}

export default CTA