'use client'

import { useState, useEffect } from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeadset } from 'react-icons/fa'

const ContactHero = () => {
  const [animatedText, setAnimatedText] = useState('')
  const fullText = 'Get in Touch'
  
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

  // const contactQuick = [
  //   {
  //     icon: <FaPhoneAlt className="text-2xl" />,
  //     title: 'Call Us',
  //     details: '+91 81788 61057',
  //     action: 'tel:+918178861057',
  //     color: 'bg-blue-100 text-[#0a95b4]',
  //   },
  //   {
  //     icon: <FaEnvelope className="text-2xl" />,
  //     title: 'Email Us',
  //     details: 'contact@compliancesgurus.com',
  //     action: 'mailto:contact@compliancesgurus.com',
  //     color: 'bg-green-100 text-green-600',
  //   },
  //   {
  //     icon: <FaMapMarkerAlt className="text-2xl" />,
  //     title: 'Visit Us',
  //     details: 'Noida, Sector 18',
  //     action: '#map',
  //     color: 'bg-purple-100 text-purple-600',
  //   },
  //   {
  //     icon: <FaHeadset className="text-2xl" />,
  //     title: 'Support Hours',
  //     details: 'Mon-Fri: 9AM-6PM',
  //     action: null,
  //     color: 'bg-orange-100 text-orange-600',
  //   },
  // ]



  return (
    <section className="relative overflow-hidden bg-[#0a95b4] text-white">
      {/* Background Pattern */}

      <div className="relative container mx-auto px-4 py-20 md:py-28">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span>24/7 Compliance Support Available</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {animatedText}
            <span className="text-[#0a95b4]">|</span>
          </h1>
          
          <p className="text-xl text-white max-w-3xl mx-auto mb-12">
            Connect with our telecom compliance experts for personalized guidance, 
            consultation, and support tailored to your business needs.
          </p>
        </div>

        {/* Response Time Promise */}
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Quick Response Guarantee</h3>
              <p className="text-white">
                We respond to all inquiries within 2 business hours during working days
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-center mr-6">
                <div className="text-4xl font-bold">2</div>
                <div className="text-sm text-white">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm text-white">Emergency Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero;