'use client'

import { useState } from 'react'
import { 
  FaPaperPlane, 
  FaCheckCircle, 
  FaExclamationCircle,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaFileAlt
} from 'react-icons/fa'
import { MdEmail, MdPhone, MdPerson, MdMessage } from 'react-icons/md'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    service: '',
  })

 

  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, answer: '' })


  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
    message: '',
  })

  const services = [
    'AGR Calculations',
    'Monthly Reporting',
    'Quarterly Compliance',
    'Annual Filing',
    'TRAI Compliance',
    'TTP Services',
    'ISP Licensing',
    'Regulatory Advisory',
    'Other',
  ]

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1
    const num2 = Math.floor(Math.random() * 10) + 1
    setCaptcha({ num1, num2, answer: '' })
  }


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaptcha(prev => ({ ...prev, answer: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate captcha
    const correctAnswer = captcha.num1 + captcha.num2
    if (parseInt(captcha.answer) !== correctAnswer) {
      setFormStatus({
        submitting: false,
        submitted: false,
        error: true,
        message: 'Please solve the captcha correctly.',
      })
      generateCaptcha()
      return
    }

    setFormStatus({ submitting: true, submitted: false, error: false, message: '' })

    // Simulate API call
    setTimeout(() => {
      setFormStatus({
        submitting: false,
        submitted: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully. We will contact you within 2 business hours.',
      })
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        service: '',
      })
      generateCaptcha()
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }))
      }, 5000)
    }, 1500)
  }

  const isFormValid = () => {
    return formData.name && formData.email && formData.phone && formData.message && captcha.answer
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#0a95b4] mb-4">Send us a Message</h2>
        <p className="text-gray-600">
          Fill out the form below and our compliance experts will contact you within 24 hours
        </p>
      </div>

      {/* Status Messages */}
      {formStatus.error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <div className="flex items-center">
            <FaExclamationCircle className="text-red-500 mr-3" />
            <span className="text-red-700">{formStatus.message}</span>
          </div>
        </div>
      )}

      {formStatus.submitted && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-3" />
            <span className="text-green-700">{formStatus.message}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <div className="flex items-center">
                <FaUser className="mr-2" />
                Full Name *
              </div>
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your full name"
              />
              <MdPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <div className="flex items-center">
                <FaPhone className="mr-2" />
                Phone Number *
              </div>
            </label>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="+91 9876543210"
              />
              <MdPhone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <div className="flex items-center">
                <FaEnvelope className="mr-2" />
                Email Address *
              </div>
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 pl-12 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
              <MdEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          {/* Company Field */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <div className="flex items-center">
                <FaFileAlt className="mr-2" />
                Company Name
              </div>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Your company/organization"
            />
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Service Interested In
          </label>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Select a service</option>
            {services.map((service, index) => (
              <option key={index} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <div className="flex items-center">
              <MdMessage className="mr-2" />
              Your Message *
            </div>
          </label>
          <textarea
            rows={4}
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your compliance requirements, deadlines, or any specific concerns..."
          />
        </div>

        {/* Captcha
        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="font-semibold text-gray-700 mb-2">Security Check</p>
              <p className="text-sm text-gray-600 mb-3">
                Solve this simple math problem to verify you&apos;re human:
              </p>
              <div className="flex items-center justify-center sm:justify-start space-x-4">
                <div className="text-3xl font-bold text-[#0a95b4] bg-white p-4 rounded-lg shadow">
                  {captcha.num1} + {captcha.num2} = ?
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="text-sm text-[#0a95b4] hover:text-[#0a95b4] font-semibold"
                >
                  ↻ New Problem
                </button>
              </div>
            </div>
            <div className="w-full sm:w-auto">
              <input
                type="text"
                required
                value={captcha.answer}
                onChange={handleCaptchaChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-xl font-bold"
                placeholder="Answer"
                style={{ maxWidth: '120px' }}
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            This helps us prevent spam submissions and automated bots
          </p>
        </div> */}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={formStatus.submitting || !isFormValid()}
          className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
            formStatus.submitting || !isFormValid()
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700 transform hover:-translate-y-1 hover:shadow-lg'
          }`}
        >
          {formStatus.submitting ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FaPaperPlane className="mr-3" />
              Send Message
            </>
          )}
        </button>

        {/* Privacy Note */}
        <p className="text-sm text-gray-500 text-center">
          By submitting this form, you agree to our Privacy Policy and consent to being contacted 
          by our team regarding telecom compliance services. We respect your privacy and will 
          never share your information with third parties.
        </p>
      </form>
    </div>
  )
}

export default ContactForm