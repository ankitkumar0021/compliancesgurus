'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaArrowRight, FaShieldAlt, FaChartBar } from 'react-icons/fa'
import { MdOutlineVerified } from 'react-icons/md'

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('')
  const fullText = 'DoT & Telecom Compliance'
  
  const bgPatternUrl = "data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
  
  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setAnimatedText(fullText.substring(0, i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    
    return () => clearInterval(typingInterval)
  }, [])

  const features = [
    { icon: <FaShieldAlt />, text: '100% Regulatory Compliance' },
    { icon: <MdOutlineVerified />, text: 'Certified Experts' },
    { icon: <FaChartBar />, text: 'Accurate Reporting' },
  ]

  return (
    <section className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-30" style={{backgroundImage: `url('${bgPatternUrl}')`}}></div>
      </div>

      <div className="relative container mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Trusted by 50+ ISPs & Telecom Companies
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Your Trusted Partner for{' '}
              <span className="bg-linear-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {animatedText}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Professional compliance support for Internet Service Providers and telecom businesses across India. 
              We handle your regulatory requirements so you can focus on growth.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center lg:justify-start space-x-2">
                  <div className="text-blue-600 text-xl">
                    {feature.icon}
                  </div>
                  <span className="font-semibold text-blue-900">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center"
              >
                Get Compliance Support
                <FaArrowRight className="ml-2" />
              </Link>
              <Link
                href="/services"
                className="btn-secondary inline-flex items-center justify-center"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Right Content - Stats Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="absolute -top-6 -right-6 bg-blue-600 text-white p-4 rounded-2xl shadow-lg">
                <FaChartBar className="text-3xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-green-100 p-3 rounded-full">
                    <span className="text-green-600 font-bold text-xl">✓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Expert Team</h4>
                    <p className="text-sm text-gray-600">15+ years telecom compliance experience</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 font-bold text-xl">⌛</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Timely Submissions</h4>
                    <p className="text-sm text-gray-600">Never miss a regulatory deadline</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <span className="text-purple-600 font-bold text-xl">💯</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Accuracy Guaranteed</h4>
                    <p className="text-sm text-gray-600">100% accurate AGR calculations & reporting</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Support</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">100%</div>
                    <div className="text-sm text-gray-600">Compliance Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">0</div>
                    <div className="text-sm text-gray-600">Penalties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero