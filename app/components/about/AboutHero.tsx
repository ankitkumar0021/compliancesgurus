'use client'

import { useState, useEffect } from 'react'
import { FaShieldAlt } from 'react-icons/fa'

const AboutHero = () => {
  const [animatedText, setAnimatedText] = useState('')
  const fullText = 'Compliance Gurus'
  
  useEffect(() => {
    let i = 0
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setAnimatedText(fullText.substring(0, i))
        i++
      } else {
        clearInterval(typingInterval)
      }
    }, 150)
    
    return () => clearInterval(typingInterval)
  }, [])

  // const stats = [
  //   {
  //     number: '12+',
  //     label: 'Years Experience',
  //     icon: <FaChartLine className="text-[#0a95b4]" />,
  //   },
  //   {
  //     number: '50+',
  //     label: 'Happy Clients',
  //     icon: <FaAward className="text-green-600" />,
  //   },
  //   {
  //     number: '100%',
  //     label: 'Compliance Rate',
  //     icon: <FaShieldAlt className="text-purple-600" />,
  //   },
  // ]

  return (
    <section className="relative overflow-hidden bg-[#0a95b4] text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=%2760%27 height=%2760%27 viewBox=%270 0 60 60%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cg fill=%27none%27 fill-rule=%27evenodd%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.4%27%3E%3Cpath d=%27M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%27/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span>Trusted Telecom Compliance Partner Since 2020</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About{' '}
              <span className="bg-linear-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                {animatedText}
              </span>
            </h1>
            
            <p className="text-xl text-white mb-8">
              Your trusted partner in navigating the complexities of Department of Telecommunications (DoT) 
              compliance for Internet Service Providers across India.
            </p>
          </div>

          {/* Right Content - Image/Graphics */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 mb-4">
                  <FaShieldAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <p className="text-white">
                  Dedicated to ensuring 100% regulatory compliance for telecom businesses across India
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  { label: 'DoT Compliance', percentage: 100 },
                  { label: 'TRAI Regulations', percentage: 100 },
                  { label: 'Client Satisfaction', percentage: 98 },
                  { label: 'On-time Submissions', percentage: 99.8 },
                ].map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span>{item.label}</span>
                      <span>{item.percentage}%</span>
                    </div>
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <div 
                          className="h-full bg-linear-to-r from-green-400 to-blue-400 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
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

export default AboutHero