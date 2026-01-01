'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChartLine, FaChevronDown } from 'react-icons/fa'
import { MdPhone, MdEmail } from 'react-icons/md'
import ImageComponent from '@/app/ui/ImageComponent'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [mobileMenu, setMobileMenu] = useState<string | null>(null)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      children: [
        { name: 'What is AGR', path: '/services/what-is-agr' },
        { name: 'What is SARAL', path: '/services/what-is-saral' },
        { name: 'TRAI Reporting', path: '/services/trai-reporting' },
        { name: 'Trusted Telecom Portal', path: '/services/trusted-telecom-portal' },
      ],
    },
    {
      name: 'Blog',
      children: [
        { name: 'IDPR Records', path: '/blog/idpr-records' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between">
          <div className="flex gap-6">
            <span className="flex items-center"><MdPhone className="mr-2" />+91 8178861057</span>
            <span className="flex items-center"><MdPhone className="mr-2" />+91 9654272754</span>
            <span className="flex items-center"><MdEmail className="mr-2" />contact@compliancesgurus.com</span>
          </div>
          <div className="flex items-center gap-2 text-green-300">
            <FaChartLine className="animate-pulse" />
            <span>DoT Compliance Experts</span>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="w-24 h-16 relative">
            <ImageComponent url="/images/cglogo.png" img_title="Compliance Gurus" object_cover />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <span className="flex items-center gap-1 font-semibold cursor-pointer hover:text-[#0a95b4]">
                    {item.name}
                    <FaChevronDown className="text-xs" />
                  </span>

                  <div
                    className={`absolute left-0 top-full mt-3 w-64 rounded-lg bg-white shadow-lg transition-all duration-200
                    ${activeMenu === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}
                  >
                    {item.children.map(sub => (
                      <Link key={sub.name} href={sub.path} className="block px-4 py-3 text-sm hover:bg-gray-100">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={item.name} href={item.path} className="font-semibold hover:text-[#0a95b4]">
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300
          ${open ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="bg-white px-4 pb-6 space-y-2">
            {navItems.map(item =>
              item.children ? (
                <div key={item.name}>
                  <button
                    onClick={() =>
                      setMobileMenu(mobileMenu === item.name ? null : item.name)
                    }
                    className="w-full flex justify-between items-center py-3 font-semibold"
                  >
                    {item.name}
                    <FaChevronDown
                      className={`transition-transform duration-300
                      ${mobileMenu === item.name ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300
                    ${mobileMenu === item.name ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {item.children.map(sub => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className="block pl-4 py-2 text-sm text-gray-700"
                        onClick={() => setOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.path}
                  className="block py-3 font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
        </div>
      </header>
    </>
  )
}
