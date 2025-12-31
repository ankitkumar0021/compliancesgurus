'use client'

import { useState, useEffect } from 'react'
import { FaPhoneAlt, FaClock, FaExclamationTriangle, FaWhatsapp } from 'react-icons/fa'
import { MdEmergency, MdSupportAgent } from 'react-icons/md'

const EmergencySupport = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  const hours = currentTime.getHours()
  const day = currentTime.getDay() // 0 = Sunday, 1 = Monday, etc.
  
  // Check if it's emergency hours (outside business hours or weekend)
  const isWeekend = day === 0 // Sunday
  const isOutsideHours = hours < 9 || hours >= 18 // Before 9 AM or after 6 PM
  const isEmergencyHours = isWeekend || isOutsideHours

  const emergencyContacts = [
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: 'Emergency Phone',
      number: '+91 81788 61057',
      available: '24/7',
      action: 'tel:+918178861057',
      color: 'bg-red-100 text-red-700',
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: 'WhatsApp Support',
      number: '+91 9654272754',
      available: '24/7',
      action: 'https://wa.me/919654272754',
      color: 'bg-green-100 text-green-700',
    },
    {
      icon: <MdSupportAgent className="text-2xl" />,
      title: 'Emergency Email',
      email: 'emergency@compliancesgurus.com',
      available: '24/7',
      action: 'mailto:emergency@compliancesgurus.com',
      color: 'bg-blue-100 text-blue-700',
    },
  ]

  const emergencyScenarios = [
    'Missed regulatory deadlines',
    'Imminent penalty notices',
    'Urgent compliance audits',
    'Last-minute submissions',
    'Emergency license renewals',
    'Immediate regulatory queries',
  ]

  const handleEmergencyCall = () => {
    if (window.confirm('Call emergency compliance support? This is for urgent regulatory issues only.')) {
      window.location.href = 'tel:+918178861057'
    }
  }

  return (
    <section className="section-padding bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
            <MdEmergency className="mr-2 animate-pulse" />
            <span>24/7 Emergency Compliance Support</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Emergency Regulatory Support
          </h2>
          <p className="text-xl text-red-200 max-w-3xl mx-auto">
            Immediate assistance for urgent compliance deadlines, penalty notices, 
            and critical regulatory issues
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {emergencyContacts.map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              target={contact.action.startsWith('http') ? '_blank' : '_self'}
              rel={contact.action.startsWith('http') ? 'noopener noreferrer' : ''}
              className={`${contact.color} rounded-2xl p-8 text-center hover:shadow-xl transition-all card-hover`}
            >
              <div className="inline-flex p-4 rounded-full bg-white mb-6">
                {contact.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{contact.title}</h3>
              {contact.number && (
                <div className="text-2xl font-bold mb-2">{contact.number}</div>
              )}
              {contact.email && (
                <div className="text-xl font-bold mb-2">{contact.email}</div>
              )}
              <div className="flex items-center justify-center">
                <FaClock className="mr-2" />
                <span className="font-semibold">{contact.available}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Emergency Button */}
        <div className="text-center mb-12">
          <button
            onClick={handleEmergencyCall}
            className="inline-flex items-center bg-white text-red-700 font-bold py-4 px-8 rounded-full hover:bg-red-50 transform hover:scale-105 transition-all text-lg shadow-lg"
          >
            <FaExclamationTriangle className="mr-3 text-2xl" />
            CLICK FOR EMERGENCY CALL
          </button>
          <p className="text-red-200 mt-4 text-sm">
            For immediate regulatory emergencies only
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Emergency Scenarios */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">When to Use Emergency Support</h3>
            <ul className="space-y-3">
              {emergencyScenarios.map((scenario, index) => (
                <li key={index} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-400 mr-3"></div>
                  <span>{scenario}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Current Status</h3>
              <div className={`px-4 py-2 rounded-full ${isEmergencyHours ? 'bg-red-500' : 'bg-green-500'} font-bold`}>
                {isEmergencyHours ? 'EMERGENCY HOURS' : 'BUSINESS HOURS'}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <span>Current Time</span>
                <span className="font-mono font-bold">
                  {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <span>Response Time</span>
                <span className="font-bold text-green-300">Within 30 minutes</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/10 rounded-lg">
                <span>Support Level</span>
                <span className="font-bold">Priority Emergency</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-500/20 rounded-lg">
              <p className="text-sm">
                <strong>Note:</strong> Emergency support charges may apply for services 
                rendered outside regular business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmergencySupport