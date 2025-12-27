'use client'

import { useState } from 'react'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { MdOutlineVerified } from 'react-icons/md'

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Sharma',
      position: 'CEO, Spectrum Broadband',
      company: 'ISP Provider - Delhi NCR',
      content: 'Compliance Gurus transformed our regulatory processes. Their expertise in DoT compliance saved us from heavy penalties and streamlined our reporting.',
      rating: 5,
    },
    {
      name: 'Priya Verma',
      position: 'Compliance Head',
      company: 'Telecom Solutions Pvt. Ltd.',
      content: 'Working with Compliance Gurus has been exceptional. Their team ensures all TRAI and TTP submissions are accurate and timely.',
      rating: 5,
    },
    {
      name: 'Amit Patel',
      position: 'Director',
      company: 'NetConnect ISP',
      content: 'The AGR calculation services are precise and reliable. Their advisory on new regulations helps us stay ahead of compliance requirements.',
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <MdOutlineVerified className="mr-2" />
            Trusted by Industry Leaders
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join 50+ satisfied telecom companies who trust us with their compliance needs
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl p-8 md:p-12">
            <FaQuoteLeft className="text-4xl text-blue-200 mb-6" />
            
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 italic mb-6">
                {testimonials[currentIndex].content}
              </p>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-xl font-bold text-blue-900">{testimonials[currentIndex].name}</h4>
                <p className="text-blue-600">{testimonials[currentIndex].position}</p>
                <p className="text-gray-500">{testimonials[currentIndex].company}</p>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Company Logos */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Airtel', 'Jio', 'Vodafone', 'BSNL', 'Tata', 'Spectra'].map((company) => (
              <div
                key={company}
                className="bg-gray-50 p-4 rounded-xl flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <span className="text-gray-600 font-semibold">{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial