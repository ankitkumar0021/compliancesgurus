'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChartLine } from 'react-icons/fa'
import { MdPhone, MdEmail } from 'react-icons/md'
import ImageComponent from '@/app/ui/ImageComponent'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                <MdPhone className="mr-2" />
                <span>+91 81788 61057 | +91 9654272754</span>
              </div>
              <div className="flex items-center">
                <MdEmail className="mr-2" />
                <span>contact@compliancesgurus.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaChartLine className="text-green-300 animate-pulse" />
              <span className="text-green-300 font-medium">DoT Compliance Experts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* LOGO */}
          <Link href="/" className="relative w-24 h-16 overflow-hidden" aria-label="Compliances Gurus">
            <ImageComponent url="/images/cglogo.png" img_title="logo" object_cover={true} />
          </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-gray-900 font-semibold hover:text-[#0a95b4] transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#0a95b4] transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                href="/contact"
                className="btn-primary"
              >
                Get Support
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-blue-900 text-2xl"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="text-blue-900 font-semibold hover:text-blue-600 transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  className="btn-primary text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Support
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}

export default Header