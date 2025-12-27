import { FaCalculator, FaFileAlt, FaClipboardList, FaBalanceScale } from 'react-icons/fa'
import { RiGovernmentLine } from 'react-icons/ri'
import { MdSecurity } from 'react-icons/md'

const Highlights = () => {
  const highlights = [
    {
      icon: <FaCalculator className="text-4xl" />,
      title: 'AGR Calculations',
      description: 'Accurate Adjusted Gross Revenue calculations with detailed audit trails',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FaFileAlt className="text-4xl" />,
      title: 'Monthly/Quarterly/Annual Reporting',
      description: 'Comprehensive regulatory reports submitted on time, every time',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: <RiGovernmentLine className="text-4xl" />,
      title: 'TRAI Compliance',
      description: 'Full compliance with TRAI regulations and quality of service standards',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <MdSecurity className="text-4xl" />,
      title: 'Telecom Trusted Portal (TTP)',
      description: 'Secure and accurate TTP submissions and compliance management',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: <FaClipboardList className="text-4xl" />,
      title: 'License Management',
      description: 'End-to-end ISP license application and renewal support',
      color: 'from-teal-500 to-teal-700',
    },
    {
      icon: <FaBalanceScale className="text-4xl" />,
      title: 'Regulatory Advisory',
      description: 'Expert guidance on new regulations and compliance strategies',
      color: 'from-red-500 to-red-700',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-semibold">
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Comprehensive Telecom Compliance Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle all aspects of DoT compliance so you can focus on growing your telecom business
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 card-hover border border-gray-100"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${item.color} text-white mb-6`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <div className="flex items-center text-blue-600 font-semibold">
                <span className="mr-2">Learn more</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Trusted by Leading Telecom Companies</h3>
            <p className="text-gray-600">Compliant with all regulatory bodies</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['DoT', 'TRAI', 'TDSAT', 'TCCP', 'ISP', 'VSAT'].map((org) => (
              <div key={org} className="bg-white p-6 rounded-xl shadow-md flex items-center justify-center">
                <div className="text-center">
                  <div className="text-blue-900 font-bold text-xl mb-1">{org}</div>
                  <div className="text-xs text-gray-500">Compliant</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Highlights