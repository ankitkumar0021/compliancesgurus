import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaBuilding,
  FaUsers
} from 'react-icons/fa'
import { MdEmail, MdPhone, MdAccessTime } from 'react-icons/md'

const ContactDetails = () => {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl text-blue-600" />,
      title: 'Head Office',
      details: (
        <address className="not-italic">
          <strong>Compliance Gurus</strong><br />
          3rd Floor, JOP Plaza, 305<br />
          Sector 18, Noida<br />
          Uttar Pradesh – 201301<br />
          India
        </address>
      ),
      type: 'address',
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-blue-600" />,
      title: 'Phone Numbers',
      details: (
        <div className="space-y-2">
          <div>
            <div className="font-semibold">Rakesh Kaundal</div>
            <a href="tel:+918178861057" className="text-blue-700 hover:text-blue-900">
              +91 81788 61057
            </a>
          </div>
          <div>
            <div className="font-semibold">Shivam Prajapati</div>
            <a href="tel:+919654272754" className="text-blue-700 hover:text-blue-900">
              +91 9654272754
            </a>
          </div>
        </div>
      ),
      type: 'phone',
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-600" />,
      title: 'Email Address',
      details: (
        <div>
          <a 
            href="mailto:contact@compliancesgurus.com" 
            className="text-blue-700 hover:text-blue-900 font-semibold"
          >
            contact@compliancesgurus.com
          </a>
          <div className="text-sm text-gray-500 mt-1">
            General Inquiries & Support
          </div>
        </div>
      ),
      type: 'email',
    },
    {
      icon: <FaClock className="text-2xl text-blue-600" />,
      title: 'Business Hours',
      details: (
        <div className="space-y-1">
          <div className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="font-semibold">9:00 AM - 6:00 PM</span>
          </div>
          <div className="flex justify-between">
            <span>Saturday</span>
            <span className="font-semibold">10:00 AM - 2:00 PM</span>
          </div>
          <div className="flex justify-between text-red-600">
            <span>Sunday</span>
            <span className="font-semibold">Emergency Only</span>
          </div>
        </div>
      ),
      type: 'hours',
    },
  ]

  const departments = [
    {
      name: 'Compliance Support',
      email: 'support@compliancesgurus.com',
      phone: '+91 81788 61057',
    },
    {
      name: 'Sales & Business',
      email: 'sales@compliancesgurus.com',
      phone: '+91 9654272754',
    },
    {
      name: 'Technical Support',
      email: 'tech@compliancesgurus.com',
      phone: '+91 81788 61057',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Main Contact Info */}
      <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
          <FaBuilding className="mr-3" />
          Contact Information
        </h2>
        
        <div className="space-y-6">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-start space-x-4 p-3 hover:bg-white rounded-lg transition-colors">
              <div className="flex-shrink-0 mt-1">{item.icon}</div>
              <div className="flex-grow">
                <h3 className="font-bold text-gray-800 mb-1">{item.title}</h3>
                <div className="text-gray-600">{item.details}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContactDetails