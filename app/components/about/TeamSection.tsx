'use client'

import { FaPhone, FaEnvelope, FaLinkedin, FaAward } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'

export default function TeamSectionV2() {
  const teamMembers = [
    {
      name: 'Rakesh Kaundal',
      role: 'Director & Compliance Head',
      phone: '+91 81788 61057',
      email: 'rakesh@compliancesgurus.com',
      experience: '15+ Years Experience',
      expertise: ['DoT Regulations', 'AGR Calculations', 'TRAI Compliance'],
      location: 'Noida, India',
      linkedin: '#',
    },
    {
      name: 'Shivam Prajapati',
      role: 'Director & Operations Head',
      phone: '+91 9654272754',
      email: 'shivam@compliancesgurus.com',
      experience: '12+ Years Experience',
      expertise: ['ISP Licensing', 'TTP Compliance', 'Regulatory Reporting'],
      location: 'Noida, India',
      linkedin: '#',
    },
  ]

  return (
    <section className="py-24 bg-[#f8fafc]">
      <div className="container mx-auto px-4 max-w-6xl">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#243B53] mb-4">
            Leadership Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Senior professionals driving telecom compliance, policy, and regulatory excellence
          </p>
        </div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition">

              {/* Top */}
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 rounded-full bg-[#0a95b4]/10 flex items-center justify-center text-3xl font-bold text-[#0a95b4]">
                  {member.name.charAt(0)}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#243B53]">
                    {member.name}
                  </h3>
                  <p className="text-[#0a95b4] font-semibold">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div className="flex items-center gap-3 mb-6">
                <FaAward className="text-yellow-500" />
                <span className="font-medium text-gray-700">
                  {member.experience}
                </span>
              </div>

              {/* Expertise */}
              <div className="mb-6">
                <p className="font-semibold text-gray-800 mb-2">Expertise</p>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 text-sm bg-gray-100 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="space-y-3 border-t pt-5">
                <div className="flex items-center gap-3 text-gray-700">
                  <FaPhone className="text-[#0a95b4]" />
                  {member.phone}
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <FaEnvelope className="text-[#0a95b4]" />
                  {member.email}
                </div>
                <div className="flex items-center justify-between pt-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MdLocationOn />
                    {member.location}
                  </div>
                  <a href={member.linkedin} className="text-[#0a95b4] hover:opacity-80">
                    <FaLinkedin className="text-xl" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-[#243B53] mb-4">
            Backed by 25+ Certified Compliance Professionals
          </h3>
          <p className="text-gray-600 mb-8">
            Delivering accurate, timely, and penalty-free telecom compliance
          </p>
        </div>

      </div>
    </section>
  )
}
