import ImageComponent from '@/app/ui/ImageComponent'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { MdCopyright } from 'react-icons/md'

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaLinkedin />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: 'AGR Calculations', href: '/services#agr' },
    { name: 'Compliance Reporting', href: '/services#reporting' },
    { name: 'TRAI & TTP Reporting', href: '/services#trai' },
    { name: 'ISP Licensing', href: '/services#licensing' },
  ]

  return (
    <footer className="bg-[#1c2d40] text-white">
      <div className="container mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="relative block w-32 h-16 overflow-hidden" aria-label="Compliances Gurus">
            <ImageComponent url="/images/cglogo.png" img_title="logo" object_cover={true} />
          </Link>
            <p className="text-gray-300 mb-4">
              Your trusted partner for navigating DoT & telecom compliance complexities. 
              Empowering ISPs to thrive without regulatory worries.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="bg-white/10 hover:bg-blue-600 p-2 rounded-full transition-colors"
                  aria-label="Social media"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-300" />
                <p className="text-gray-300">
                  3rd Floor, JOP Plaza, 305, Sector 18, Noida, Uttar Pradesh – 201301
                </p>
              </div>
              <div className="flex items-center">
                <FaPhone className="mr-3 text-blue-300" />
                <p className="text-gray-300">+91 81788 61057</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-300" />
                <p className="text-gray-300">contact@compliancesgurus.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-gray-300 mb-4 md:mb-0">
            <MdCopyright className="mr-2" />
            <span>2024 Compliance Gurus. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-800/30 px-4 py-2 rounded-lg">
              <span className="text-sm">Visited 353 times, 1 visit today</span>
            </div>
            <div className="text-sm text-gray-300">
              <span className="text-green-300 font-bold">ISO 27001</span> Certified
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer