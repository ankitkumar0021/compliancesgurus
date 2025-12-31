'use client'

import { useState } from 'react'
import { FaMapMarkerAlt, FaDirections, FaCar, FaTrain, FaBus } from 'react-icons/fa'

const MapSection = () => {
  const [mapLoaded, setMapLoaded] = useState(false)

  const transportOptions = [
    {
      icon: <FaCar className="text-blue-600" />,
      title: 'By Car',
      description: 'Parking available in the building basement',
      time: '20-30 mins from Delhi',
    },
    {
      icon: <FaTrain className="text-green-600" />,
      title: 'Metro',
      description: 'Nearest station: Noida Sector 18',
      time: '5 mins walk from station',
    },
    {
      icon: <FaBus className="text-purple-600" />,
      title: 'Bus',
      description: 'Multiple bus routes available',
      time: 'Bus stop right outside building',
    },
  ]

  const handleGetDirections = () => {
    const address = encodeURIComponent('JOP Plaza, Sector 18, Noida, Uttar Pradesh 201301')
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank')
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Find Our Office</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Visit us at our headquarters in Noida for in-person consultations and meetings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="text-red-500 text-2xl mr-3" />
                    <div>
                      <h3 className="font-bold text-lg">Compliance Gurus Office</h3>
                      <p className="text-gray-600">3rd Floor, JOP Plaza, Sector 18, Noida</p>
                    </div>
                  </div>
                  <button
                    onClick={handleGetDirections}
                    className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FaDirections className="mr-2" />
                    Get Directions
                  </button>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="relative h-96">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                      <p>Loading map...</p>
                    </div>
                  </div>
                )}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8694510370955!2d77.31867747534172!3d28.570514875693357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce44f6e8f62cb%3A0x78e1a20d5cb7b8f7!2sSector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1703681575556!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setMapLoaded(true)}
                  title="Compliance Gurus Office Location"
                ></iframe>
              </div>

              {/* Map Footer */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Coordinates:</strong> 28.5705° N, 77.3187° E
                  </div>
                  <div>
                    <strong>Landmark:</strong> Opposite GIP Mall, Sector 18
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transportation Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-6">How to Reach</h3>
              
              <div className="space-y-4">
                {transportOptions.map((option, index) => (
                  <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg">
                    <div className="mr-4 mt-1">
                      {option.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-800 mb-1">{option.title}</h4>
                      <p className="text-sm text-gray-600 mb-1">{option.description}</p>
                      <p className="text-sm font-semibold text-blue-600">{option.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Parking Info */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Visitor Information</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Parking Available</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    Yes
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Wheelchair Access</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold">
                    Available
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <span className="font-medium">Security Check</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-bold">
                    Required
                  </span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> Please bring a government-issued ID for security check. 
                  Appointments recommended for meetings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection