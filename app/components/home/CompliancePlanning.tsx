'use client'

import { FaCalculator, FaChartBar, FaShieldAlt, FaCheckCircle } from 'react-icons/fa'
import { RiGovernmentLine } from 'react-icons/ri'

export default function CompliancePlanning() {
  const complianceServices = [
    {
      icon: <FaCalculator className="text-3xl" />,
      title: "DoT Compliance for UL & VNO Licenses",
      subtitle: "AGR & License Fee Management",
      items: [
        "AGR (Adjusted Gross Revenue) Calculations",
        "License Fee (LF) calculations for UL and VNO ISPs",
        "DoT compliance documentation",
        "License renewal and amendment support"
      ],
      reports: []
    },
    {
      icon: <FaChartBar className="text-3xl" />,
      title: "SARAL Reporting",
      subtitle: "Monthly · Quarterly · Half-Yearly",
      items: [
        "ISP Nodes / Point of Presence Details",
        "Channel Partners List (Franchisee / Distributors / Last Mile)",
        "Broadband Customers List",
        "Network Infrastructure Reporting"
      ],
      reports: ["Monthly", "Quarterly", "Half-Yearly"]
    },
    {
      icon: <RiGovernmentLine className="text-3xl" />,
      title: "TRAI Reporting",
      subtitle: "Comprehensive Regulatory Compliance",
      items: [
        "Internet Subscriber Report",
        "Public WiFi Hotspot Report",
        "Broadband Subscribers Report (Wireline, LSA, Statewise)",
        "Performance Monitoring Report (PMR)"
      ],
      reports: ["Monthly", "Quarterly", "Half-Yearly", "Annual"]
    },
    {
      icon: <FaShieldAlt className="text-3xl" />,
      title: "TTP (Telecom Trusted Portal)",
      subtitle: "National Security Compliance",
      items: [
        "TTP registration & ongoing compliance",
        "Trusted vendor & product compliance",
        "Network security as per DoT National Security Directive",
        "Vendor due diligence and verification"
      ],
      reports: []
    }
  ]

  return (
    <section className="relative py-20 md:py-10 overflow-hidden bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="relative container mx-auto px-4">

        {/* Stats Banner */}
        <div className="mb-16 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '100%', label: 'Compliance Accuracy' },
              { value: '24/7', label: 'Support Available' },
              { value: '50+', label: 'Satisfied ISPs' },
              { value: '0', label: 'Penalties Incurred' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-[#0a95b4] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {complianceServices.map((service, index) => (
            <div key={index} className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-[#0a95b4] p-6">
                <div className="flex items-center justify-between">
                  <div className="text-white">{service.icon}</div>
                  {service.reports.length > 0 && (
                    <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-semibold text-white">{service.reports.length} Reports</span>
                    </div>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{service.title}</h3>
                <p className="text-blue-100 text-sm mt-1">{service.subtitle}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features & Process Steps */}
        <div className="bg-linear-to-br from-blue-50 to-white rounded-3xl p-10 shadow-xl">

          {/* Additional Features */}
          <h3 className="text-3xl font-extrabold text-[#0a95b4] mb-10 text-center">Why Choose Our Compliance Management?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Real-time Monitoring", description: "Continuous tracking of compliance status with automated alerts", icon: "📊", color: "bg-blue-100" },
              { title: "Expert Team", description: "15+ years experience in telecom regulatory compliance", icon: "👨‍💼", color: "bg-emerald-100" },
              { title: "Deadline Management", description: "Never miss a regulatory submission deadline", icon: "⏰", color: "bg-purple-100" }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
                <div className={`flex items-center justify-center w-20 h-20 rounded-full ${feature.color} text-3xl mb-5`}>{feature.icon}</div>
                <h4 className="font-bold text-gray-900 mb-3 text-lg">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="mt-16">
            <h4 className="text-2xl font-bold text-[#0a95b4] mb-8 text-center">Our Compliance Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Assessment", desc: "Compliance gap analysis" },
                { step: "02", title: "Planning", desc: "Custom strategy development" },
                { step: "03", title: "Execution", desc: "Implementation & reporting" },
                { step: "04", title: "Monitoring", desc: "Continuous compliance tracking" },
              ].map((step, index) => (
                <div key={index} className="relative flex flex-col items-center">
                  <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md text-center hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                    <div className="text-3xl font-bold text-[#0a95b4] mb-3">{step.step}</div>
                    <div className="font-semibold text-gray-800 mb-2">{step.title}</div>
                    <div className="text-sm text-gray-600">{step.desc}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 right-[-12px] w-12 h-1 bg-blue-300 rounded-full"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
