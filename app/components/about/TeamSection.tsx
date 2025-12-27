import { 
  FaPhone, 
  FaEnvelope, 
  FaLinkedin, 
  FaTwitter,
  FaAward,
  FaGraduationCap
} from 'react-icons/fa'
import { MdWork, MdLocationOn } from 'react-icons/md'

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rakesh Kaundal',
      position: 'Director & Compliance Head',
      phone: '+91 81788 61057',
      email: 'rakesh@compliancesgurus.com',
      experience: '15+ years',
      expertise: ['DoT Regulations', 'AGR Calculations', 'TRAI Compliance'],
      education: 'MBA in Telecom Management',
      location: 'Noida, India',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Shivam Prajapati',
      position: 'Director & Operations Head',
      phone: '+91 9654272754',
      email: 'shivam@compliancesgurus.com',
      experience: '12+ years',
      expertise: ['ISP Licensing', 'TTP Compliance', 'Regulatory Reporting'],
      education: 'Engineering in Telecom',
      location: 'Noida, India',
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
  ]

  const expertiseAreas = [
    { name: 'DoT Compliance', count: 15, color: 'bg-blue-500' },
    { name: 'TRAI Regulations', count: 12, color: 'bg-green-500' },
    { name: 'AGR Calculations', count: 10, color: 'bg-purple-500' },
    { name: 'ISP Licensing', count: 8, color: 'bg-orange-500' },
  ]

  return (
    <section className="section-padding gradient-bg text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our Leadership Team
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Experienced professionals dedicated to ensuring your telecom compliance success
          </p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 card-hover"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                {/* Avatar */}
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="w-32 h-32 rounded-full bg-blue-300/30 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-300">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-300 font-semibold mb-4">{member.position}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <FaPhone className="mr-3 text-blue-300" />
                      <a href={`tel:${member.phone}`} className="hover:text-blue-200">
                        {member.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="mr-3 text-blue-300" />
                      <a href={`mailto:${member.email}`} className="hover:text-blue-200">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <FaAward className="mr-3 text-yellow-400" />
                    <div>
                      <div className="text-sm text-blue-200">Experience</div>
                      <div className="font-semibold">{member.experience}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FaGraduationCap className="mr-3 text-green-400" />
                    <div>
                      <div className="text-sm text-blue-200">Education</div>
                      <div className="font-semibold">{member.education}</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-3">
                    <MdWork className="mr-2" />
                    <span className="font-semibold">Areas of Expertise</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-white/20">
                  <div className="flex items-center">
                    <MdLocationOn className="mr-2" />
                    <span>{member.location}</span>
                  </div>
                  <div className="flex space-x-3">
                    <a href={member.social.linkedin} className="hover:text-blue-300">
                      <FaLinkedin className="text-xl" />
                    </a>
                    <a href={member.social.twitter} className="hover:text-blue-300">
                      <FaTwitter className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Expertise */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-8 text-center">Our Collective Expertise</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${area.color} mb-4`}>
                  <span className="text-2xl font-bold">{area.count}+</span>
                </div>
                <h4 className="font-bold text-lg">{area.name}</h4>
                <p className="text-sm text-blue-200">Years Experience</p>
              </div>
            ))}
          </div>

          {/* Supporting Team */}
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full">
              <FaAward className="mr-3 text-yellow-400" />
              <span>Supported by team of 25+ certified compliance professionals</span>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-xl text-blue-200 mb-8">
            Ready to work with our expert team on your telecom compliance needs?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-bold rounded-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default TeamSection