import ImageComponent from '@/app/ui/ImageComponent'
import Link from 'next/link'
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { MdCopyright } from 'react-icons/md'

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaLinkedin />, href: '#' },
    { icon: <FaInstagram />, href: '#' },
  ]

  return (
    <footer
      className="relative text-black"
      style={{
        backgroundImage: "url('/images/footer.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* COMPANY INFO */}
          <div>
            <Link href="/" className="relative block w-32 h-16 mb-4">
              <ImageComponent
                url="/images/cglogo.png"
                img_title="Compliance Gurus"
                object_cover={true}
              />
            </Link>

            <p className="text-gray-800 mb-4">
              Trusted partner for DoT & Telecom Compliance.
              Helping ISPs stay compliant without stress.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="p-2 rounded-full bg-black/10 hover:bg-[#0a95b4] hover:text-white transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-800">
              <li><Link href="/" className="hover:text-[#0a95b4]">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#0a95b4]">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#0a95b4]">Services</Link></li>
              <li><Link href="/blog" className="hover:text-[#0a95b4]">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-[#0a95b4]">Contact</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">
              Our Services
            </h4>
            <ul className="space-y-2 text-gray-800">
              <li>AGR Filing & Calculations</li>
              <li>SARAL Reporting</li>
              <li>TRAI Reporting</li>
              <li>Trusted Telecom Portal</li>
            </ul>
          </div>

          {/* CONTACT DETAILS */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-gray-900">
              Contact Us
            </h4>

            <div className="space-y-4 text-gray-800">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#0a95b4]" />
                <p>
                  3rd Floor, JOP Plaza, 305,<br />
                  Sector 18, Noida,<br />
                  Uttar Pradesh – 201301
                </p>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 text-[#0a95b4]" />
                <div>
                  <p className="font-semibold">Rakesh Kaundal</p>
                  <p>+91 81788 61057</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FaPhone className="mt-1 text-[#0a95b4]" />
                <div>
                  <p className="font-semibold">Shivam Prajapati</p>
                  <p>+91 9654272754</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#0a95b4]" />
                <p>contact@compliancesgurus.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-black/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-700 text-sm">
          <div className="flex items-center gap-2">
            <MdCopyright />
            <span>2025 Compliance Gurus. All rights reserved.</span>
          </div>

          <div className="mt-4 md:mt-0">
            Secured 50+ satisfied customers & 100+ business clients
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
