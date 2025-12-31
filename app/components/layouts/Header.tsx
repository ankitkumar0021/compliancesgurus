'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaChartLine } from 'react-icons/fa'
import { MdPhone, MdEmail } from 'react-icons/md'
import ImageComponent from '@/app/ui/ImageComponent'

const Header = () => {
  const [open, setOpen] = useState(false)

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
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-sm hidden md:block">
        <div className="container mx-auto px-4 py-2 flex justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center"><MdPhone className="mr-2" />+91 81788 61057 | +91 9654272754</span>
            <span className="flex items-center"><MdEmail className="mr-2" />contact@compliancesgurus.com</span>
          </div>
          <div className="flex items-center gap-2 text-green-300">
            <FaChartLine className="animate-pulse" />
            <span className="font-medium">DoT Compliance Experts</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">

          {/* Logo */}
          <Link href="/" className="relative w-24 h-16">
            <ImageComponent url="/images/cglogo.png" img_title="Compliance Gurus" object_cover={true} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item =>
              item.children ? (
                <div key={item.name} className="relative group">
                  <span className="font-semibold cursor-pointer hover:text-[#0a95b4]">
                    {item.name}
                  </span>
                  <div className="absolute top-full left-0 mt-2 hidden group-hover:block bg-white shadow rounded w-64">
                    {item.children.map(sub => (
                      <Link key={sub.name} href={sub.path} className="block px-4 py-3 hover:bg-gray-100">
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

            <Link href="/contact" className="btn-primary">
              Get Support
            </Link>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white px-4 pb-6">
            {navItems.map(item =>
              item.children ? (
                <div key={item.name} className="mt-4">
                  <p className="font-semibold mb-2">{item.name}</p>
                  {item.children.map(sub => (
                    <Link
                      key={sub.name}
                      href={sub.path}
                      className="block py-2 text-sm text-gray-700"
                      onClick={() => setOpen(false)}
                    >
                      {sub.name}
                    </Link>
                  ))}
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

            <Link href="/contact" className="btn-primary block text-center mt-4" onClick={() => setOpen(false)}>
              Get Support
            </Link>
          </div>
        )}
      </header>
    </>
  )
}

export default Header
