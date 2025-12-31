import { 
  FaShieldAlt, 
  FaBalanceScale, 
  FaClock, 
  FaUsers,
  FaChartLine,
  FaLightbulb
} from 'react-icons/fa'

const ValuesSection = () => {
  const values = [
    {
      icon: <FaShieldAlt />,
      title: 'Integrity First',
      description: 'We maintain the highest standards of honesty and transparency in all our compliance activities.',
      color: 'from-blue-500 to-blue-700',
    },
    {
      icon: <FaBalanceScale />,
      title: 'Regulatory Excellence',
      description: 'Deep expertise in telecom regulations ensures accurate and complete compliance.',
      color: 'from-green-500 to-green-700',
    },
    {
      icon: <FaClock />,
      title: 'Timeliness',
      description: 'Never miss a regulatory deadline with our proactive submission management.',
      color: 'from-purple-500 to-purple-700',
    },
    {
      icon: <FaUsers />,
      title: 'Client Partnership',
      description: 'We work as an extension of your team, understanding your unique compliance needs.',
      color: 'from-orange-500 to-orange-700',
    },
    {
      icon: <FaChartLine />,
      title: 'Continuous Improvement',
      description: 'Regularly updating our processes to adapt to changing regulatory landscapes.',
      color: 'from-teal-500 to-teal-700',
    },
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Leveraging technology to streamline compliance processes and reduce errors.',
      color: 'from-red-500 to-red-700',
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0a95b4] mb-4">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The principles that guide our approach to telecom compliance and client service
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover"
            >
              <div className={`inline-flex p-4 rounded-xl bg-linear-to-r ${value.color} text-white mb-6`}>
                <div className="text-2xl">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-[#0a95b4] mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                  <span>Guides all our compliance activities</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Value Statement */}
        <div className="mt-16 bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Our Commitment to Excellence
              </h3>
              <p className="text-white">
                At Compliance Gurus, we don&apos;t just follow regulations—we master them. Our values drive 
                every aspect of our service delivery, ensuring that your telecom business remains 
                compliant, competitive, and confident in the face of regulatory challenges.
              </p>
            </div>
            <div className="lg:w-1/3 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 mb-4">
                <span className="text-2xl font-bold">✓</span>
              </div>
              <p className="font-bold">Value-Driven Compliance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ValuesSection