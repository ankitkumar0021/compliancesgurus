'use client'

import { FaUsers, FaBuilding, FaChartLine, FaCalendarCheck } from 'react-icons/fa'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const Stats = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const stats = [
    {
      icon: <FaUsers />,
      end: 50,
      suffix: '+',
      label: 'Satisfied Customers',
      description: 'ISPs & Telecom Companies',
    },
    {
      icon: <FaBuilding />,
      end: 100,
      suffix: '+',
      label: 'Business Clients',
      description: 'Across India',
    },
    {
      icon: <FaChartLine />,
      end: 1000,
      suffix: '+',
      label: 'Reports Filed',
      description: 'Regulatory Submissions',
    },
    {
      icon: <FaCalendarCheck />,
      end: 12,
      suffix: '+',
      label: 'Years Experience',
      description: 'In Telecom Compliance',
    },
  ]

  return (
    <section ref={ref} className="section-padding gradient-bg text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-[#0a95b4] max-w-3xl mx-auto">
            Delivering consistent compliance excellence across the telecom sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 card-hover"
            >
              <div className="inline-flex p-4 rounded-full bg-white/20 mb-6">
                <div className="text-3xl text-white">
                  {stat.icon}
                </div>
              </div>
              
              <div className="text-5xl md:text-6xl font-bold mb-2">
                {inView ? (
                  <CountUp
                    end={stat.end}
                    suffix={stat.suffix}
                    duration={2.5}
                    className="text-white"
                  />
                ) : (
                  `0${stat.suffix}`
                )}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-[#0a95b4]">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Progress Bars */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Compliance Success Rate</h3>
          <div className="space-y-6">
            {[
              { label: 'AGR Calculations Accuracy', percentage: 100 },
              { label: 'On-time Submission Rate', percentage: 99.8 },
              { label: 'Regulatory Audit Success', percentage: 100 },
              { label: 'Client Satisfaction', percentage: 98.5 },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">{item.label}</span>
                  <span className="font-bold">{item.percentage}%</span>
                </div>
                <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                  <div 
                      className="h-full bg-linear-to-r from-green-400 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: inView ? `${item.percentage}%` : '0%',
                        transitionDelay: `${index * 200}ms`
                      }}
                    ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats