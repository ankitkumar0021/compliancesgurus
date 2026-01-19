'use client'

import { useState } from 'react'
import { 
  FaCalculator, 
  FaFileAlt, 
  FaChartBar,
  FaCheckCircle,
  FaClipboardCheck,
  FaSearch
} from 'react-icons/fa'
import { RiGovernmentLine } from 'react-icons/ri'
import { MdTimeline, MdSecurity } from 'react-icons/md'

const ApproachSection = () => {
  const [activeTab, setActiveTab] = useState('agr')

  const approaches = [
    {
      id: 'agr',
      title: 'AGR Calculations',
      icon: <FaCalculator className="text-3xl" />,
      description: 'Accurate financial calculations for telecom compliance with detailed audit trails.',
      details: [
        'Monthly AGR calculations as per DoT guidelines',
        'Revenue reconciliation and validation',
        'Audit support and documentation',
        'Penalty assessment and mitigation'
      ],
      benefits: [
        '100% accuracy in calculations',
        'Detailed audit trails',
        'Timely submissions',
        'Expert advisory support'
      ],
      color: 'bg-blue-500',
    },
    {
      id: 'reporting',
      title: 'Periodic Compliance Reporting',
      icon: <FaFileAlt className="text-3xl" />,
      description: 'Comprehensive monthly, quarterly & annual regulatory reports.',
      details: [
        'Monthly compliance reports',
        'Quarterly regulatory submissions',
        'Annual filings and renewals',
        'Ad-hoc regulatory reporting'
      ],
      benefits: [
        'Never miss deadlines',
        'Comprehensive documentation',
        'Digital submissions',
        'Real-time tracking'
      ],
      color: 'bg-green-500',
    },
    {
      id: 'trai',
      title: 'TRAI & TTP Compliance',
      icon: <RiGovernmentLine className="text-3xl" />,
      description: 'A Broad Spectrum of Additional Compliance Services including TRAI and Telecom Trusted Portal (TTP) reporting.',
      details: [
        'TRAI quality of service reporting',
        'TTP (Telecom Trusted Portal) submissions',
        'KYC and verification management',
        'Regulatory audit support'
      ],
      benefits: [
        'Regulatory compliance',
        'Secure submissions',
        'Audit readiness',
        'Continuous monitoring'
      ],
      color: 'bg-purple-500',
    },
  ]

  const selectedApproach = approaches.find(a => a.id === activeTab) || approaches[0]

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Comprehensive Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Systematic methodology ensuring complete telecom regulatory compliance
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {approaches.map((approach) => (
            <button
              key={approach.id}
              onClick={() => setActiveTab(approach.id)}
              className={`flex items-center px-6 py-3 rounded-full font-semibold transition-all ${
                activeTab === approach.id
                  ? `${approach.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <span className="mr-3">{approach.icon}</span>
              {approach.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className={`h-2 ${selectedApproach.color} rounded-full mb-6`}></div>
            <h3 className="text-3xl font-bold text-blue-900 mb-4">
              {selectedApproach.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              {selectedApproach.description}
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaSearch className="mr-2" />
                Key Components
              </h4>
              <ul className="space-y-3">
                {selectedApproach.details.map((detail, index) => (
                  <li key={index} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-3" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <FaChartBar className="mr-2" />
                Key Benefits
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {selectedApproach.benefits.map((benefit, index) => (
                  <div key={index} className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                      <span className="font-medium">{benefit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-full ${selectedApproach.color} text-white mb-4`}>
                  {selectedApproach.icon}
                </div>
                <h4 className="text-2xl font-bold text-blue-900">Our Process</h4>
              </div>

              <div className="space-y-6">
                {[
                  {
                    step: '01',
                    title: 'Assessment',
                    description: 'Regulatory gap analysis',
                    icon: <FaSearch />,
                  },
                  {
                    step: '02',
                    title: 'Planning',
                    description: 'Custom compliance strategy',
                    icon: <FaClipboardCheck />,
                  },
                  {
                    step: '03',
                    title: 'Execution',
                    description: 'Implementation & documentation',
                    icon: <MdTimeline />,
                  },
                  {
                    step: '04',
                    title: 'Monitoring',
                    description: 'Continuous compliance tracking',
                    icon: <MdSecurity />,
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="font-bold text-blue-600">{step.step}</span>
                    </div>
                    <div className="grow">
                      <div className="flex items-center">
                        <div className="text-blue-600 mr-2">{step.icon}</div>
                        <h5 className="font-bold text-gray-800">{step.title}</h5>
                      </div>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ApproachSection