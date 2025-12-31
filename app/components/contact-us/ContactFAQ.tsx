'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa'

const ContactFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What information should I provide when contacting about compliance services?',
      answer: 'Please provide your company name, type of telecom service, specific compliance requirements, deadlines, and any existing documentation. This helps us provide accurate guidance.',
    },
    {
      question: 'How quickly will I receive a response to my inquiry?',
      answer: 'We guarantee a response within 2 business hours during working days. Emergency inquiries receive immediate attention.',
    },
    {
      question: 'Do you offer free initial consultations?',
      answer: 'Yes, we offer a free 30-minute compliance assessment consultation to understand your requirements and provide preliminary guidance.',
    },
    {
      question: 'What are your working hours for non-emergency queries?',
      answer: 'Our regular business hours are Monday to Friday, 9:00 AM to 6:00 PM IST. Saturday from 10:00 AM to 2:00 PM IST.',
    },
    {
      question: 'Can I schedule an in-person meeting at your office?',
      answer: 'Yes, we welcome in-person meetings. Please schedule an appointment in advance to ensure availability of our compliance experts.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, online payments, UPI, and corporate checks. Detailed payment terms are provided in our service agreement.',
    },
    {
      question: 'Do you serve clients outside of Noida/Delhi NCR?',
      answer: 'Yes, we serve telecom businesses across India. We offer remote compliance services and can travel for on-site requirements when needed.',
    },
    {
      question: 'How do you ensure the confidentiality of my information?',
      answer: 'We maintain strict confidentiality through NDAs, secure data handling procedures, and comply with data protection regulations.',
    },
  ]

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0a95b4] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common questions about contacting us and our compliance services
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center">
                    <FaQuestionCircle className="text-[#0a95b4] mr-4" />
                    <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  </div>
                  <div className="text-[#0a95b4]">
                    {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </button>
                
                <div
                  className={`px-6 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'pb-6 max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="pl-10 pr-4 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-linear-to-r from-blue-50 to-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#0a95b4] mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@compliancesgurus.com"
                className="btn-primary"
              >
                Email Your Question
              </a>
              <a
                href="tel:+918178861057"
                className="px-6 py-3 border-2 border-[#0a95b4] text-[#0a95b4] rounded-xl"
              >
                Call for Immediate Help
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactFAQ