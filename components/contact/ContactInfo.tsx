import React from 'react'
import { motion } from 'framer-motion'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon, 
  ClockIcon,
  CalendarIcon 
} from '@heroicons/react/24/outline'

const contactDetails = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: '(555) 123-4567',
    description: 'Mon-Fri 8am-6pm PST'
  },
  {
    icon: EnvelopeIcon,
    title: 'Email',
    content: 'info@cannxperts.com',
    description: 'We respond within 4 hours'
  },
  {
    icon: MapPinIcon,
    title: 'Office',
    content: 'Portland, Oregon',
    description: 'Serving the Pacific Northwest'
  },
  {
    icon: CalendarIcon,
    title: 'Schedule',
    content: 'Book Consultation',
    description: 'Free 30-minute consultation'
  }
]

const serviceAreas = [
  'Oregon',
  'California', 
  'Washington',
  'Colorado',
  'Nevada',
  'Arizona'
]

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <div key={index} className="flex items-start">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 mr-4">
                <detail.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{detail.title}</h3>
                <p className="text-lg text-primary-600">{detail.content}</p>
                <p className="text-sm text-gray-600">{detail.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Areas */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h2>
        
        <p className="text-gray-600 mb-4">
          We provide cannabis business brokerage services across multiple states:
        </p>
        
        <div className="grid grid-cols-2 gap-2">
          {serviceAreas.map((area, index) => (
            <div key={index} className="flex items-center">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
              <span className="text-gray-700">{area}</span>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
          <p className="text-sm text-primary-700">
            <strong>Note:</strong> We work with cannabis businesses in all legal cannabis states. 
            Contact us to discuss opportunities in your area.
          </p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose CannXperts?</h2>
        
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
            <span className="text-gray-700">Industry expertise with 500+ successful transactions</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
            <span className="text-gray-700">Comprehensive regulatory and compliance knowledge</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
            <span className="text-gray-700">Confidential and professional service</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
            <span className="text-gray-700">End-to-end transaction support</span>
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-primary-600 rounded-full mr-3 mt-2"></span>
            <span className="text-gray-700">Extensive network of qualified buyers and sellers</span>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}