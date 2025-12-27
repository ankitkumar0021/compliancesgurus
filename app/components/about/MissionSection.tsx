import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa'
import { MdVerified } from 'react-icons/md'

const MissionSection = () => {
  const pillars = [
    {
      icon: <FaBullseye className="text-4xl" />,
      title: 'Our Mission',
      description: 'To empower telecom businesses with seamless compliance solutions that drive growth and eliminate regulatory risks.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: <FaEye className="text-4xl" />,
      title: 'Our Vision',
      description: 'To be India\'s most trusted telecom compliance partner, setting industry standards for regulatory excellence.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: 'Our Promise',
      description: '100% accuracy in compliance reporting, timely submissions, and proactive regulatory advisory.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Welcome to <span className="text-blue-600">Compliance Gurus</span>
            </h2>
            <div className="prose prose-lg text-gray-600">
              <p className="text-lg mb-6">
                Welcome to <strong className="text-blue-700">COMPLIANCE GURUS</strong>, your trusted partner in 
                navigating the complexities of Department of Telecommunications (DoT) compliance for Internet 
                Service Providers (ISPs) and telecom businesses across India.
              </p>
              <p className="text-lg mb-6">
                Founded in 2012, we have established ourselves as industry leaders in telecom regulatory 
                compliance, serving over 50 satisfied clients with 100% compliance success rate.
              </p>
              <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-xl">
                <MdVerified className="text-3xl text-blue-600" />
                <p className="font-semibold text-blue-800">
                  We empower ISPs to thrive without the burden of regulatory worries by handling all 
                  telecom compliance requirements professionally, accurately, and timely.
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 mb-6">
                  <span className="text-3xl font-bold text-blue-600">12+</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-900">Years of Excellence</h3>
                <p className="text-gray-600 mt-2">In telecom compliance services</p>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'Expert Team Members', value: '25+' },
                  { label: 'Successful Audits', value: '500+' },
                  { label: 'Regulatory Updates', value: 'Monthly' },
                  { label: 'Support Coverage', value: 'Pan India' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100">
                    <span className="font-medium text-gray-700">{item.label}</span>
                    <span className="font-bold text-blue-600">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Promise */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`${pillar.bgColor} rounded-2xl p-8 card-hover text-center`}
            >
              <div className="inline-flex p-4 rounded-xl bg-white mb-6">
                <div className={pillar.color}>
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{pillar.title}</h3>
              <p className="text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionSection