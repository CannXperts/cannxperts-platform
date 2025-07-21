'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  CurrencyDollarIcon,
  CalendarIcon,
  UsersIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  ShareIcon,
  HeartIcon,
  PrinterIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

interface BusinessDetailProps {
  businessId: string
}

// Sample business data - in production, this would be fetched from API
const businessData = {
  id: 1,
  title: 'Premium Downtown Dispensary',
  price: '$2,850,000',
  location: 'Portland, Oregon',
  category: 'Dispensary',
  description: 'Established dispensary in prime downtown Portland location with loyal customer base and consistent revenue growth. This turnkey operation features modern POS systems, comprehensive security infrastructure, and exceptional street visibility in a high-traffic area.',
  images: [
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  ],
  revenue: '$3.2M annually',
  sqft: '2,400 sq ft',
  established: '2019',
  employees: 12,
  financials: {
    grossRevenue: '$3,200,000',
    netIncome: '$485,000',
    ebitda: '$620,000',
    cashFlow: '$520,000'
  },
  highlights: [
    'Prime downtown location with high foot traffic',
    'Established customer base of 8,500+ registered patients',
    'Strong brand recognition and community presence',
    'Turnkey operation with trained staff',
    'Modern POS system and inventory management',
    'Comprehensive security and compliance systems',
    'Growth opportunities in expanding market'
  ],
  operationalDetails: {
    licenses: ['Retail Cannabis License', 'Medical Cannabis License'],
    hours: 'Mon-Sat: 8am-10pm, Sun: 10am-8pm',
    inventory: '200+ SKUs across all product categories',
    avgTransaction: '$65',
    dailyCustomers: '150-200'
  }
}

export function BusinessDetail({ businessId }: BusinessDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isFavorited, setIsFavorited] = useState(false)
  const [showFinancials, setShowFinancials] = useState(false)

  return (
    <div className="container py-8">
      {/* Breadcrumb */}
      <nav className="mb-6 text-sm">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li><a href="/" className="hover:text-primary-600">Home</a></li>
          <li>/</li>
          <li><a href="/businesses-for-sale" className="hover:text-primary-600">Businesses for Sale</a></li>
          <li>/</li>
          <li className="text-gray-900">{businessData.title}</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image Gallery */}
          <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
            <div className="relative h-96">
              <Image
                src={businessData.images[selectedImage]}
                alt={businessData.title}
                fill
                className="object-cover"
              />
              
              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsFavorited(!isFavorited)}
                  className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200"
                >
                  {isFavorited ? (
                    <HeartIconSolid className="h-5 w-5 text-red-500" />
                  ) : (
                    <HeartIcon className="h-5 w-5 text-gray-600" />
                  )}
                </button>
                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                  <ShareIcon className="h-5 w-5 text-gray-600" />
                </button>
                <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors duration-200">
                  <PrinterIcon className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
            
            {/* Image Thumbnails */}
            <div className="p-4 flex gap-2">
              {businessData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary-600' : 'border-gray-200'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`View ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Business</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              {businessData.description}
            </p>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Highlights</h3>
            <ul className="space-y-2">
              {businessData.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <StarIcon className="h-5 w-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Financial Information */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Financial Overview</h2>
              <button
                onClick={() => setShowFinancials(!showFinancials)}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                {showFinancials ? 'Hide Details' : 'View Details'}
              </button>
            </div>
            
            {showFinancials ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{businessData.financials.grossRevenue}</div>
                  <div className="text-sm text-gray-600 mt-1">Gross Revenue</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{businessData.financials.netIncome}</div>
                  <div className="text-sm text-gray-600 mt-1">Net Income</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{businessData.financials.ebitda}</div>
                  <div className="text-sm text-gray-600 mt-1">EBITDA</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{businessData.financials.cashFlow}</div>
                  <div className="text-sm text-gray-600 mt-1">Cash Flow</div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                Financial details available to qualified buyers
              </div>
            )}
          </div>

          {/* Operational Details */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Operational Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Licenses</h3>
                <ul className="space-y-1 text-gray-600">
                  {businessData.operationalDetails.licenses.map((license, index) => (
                    <li key={index}>• {license}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Operating Hours</h3>
                <p className="text-gray-600">{businessData.operationalDetails.hours}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Inventory</h3>
                <p className="text-gray-600">{businessData.operationalDetails.inventory}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Customer Traffic</h3>
                <p className="text-gray-600">{businessData.operationalDetails.dailyCustomers} customers/day</p>
                <p className="text-gray-600">Avg transaction: {businessData.operationalDetails.avgTransaction}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price & Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {businessData.price}
              </div>
              <div className="text-sm text-gray-600">Asking Price</div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPinIcon className="h-5 w-5 mr-3 text-blue-600" />
                <span>{businessData.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BuildingOfficeIcon className="h-5 w-5 mr-3 text-green-600" />
                <span>{businessData.sqft}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CalendarIcon className="h-5 w-5 mr-3 text-purple-600" />
                <span>Established {businessData.established}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <UsersIcon className="h-5 w-5 mr-3 text-orange-600" />
                <span>{businessData.employees} employees</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ChartBarIcon className="h-5 w-5 mr-3 text-red-600" />
                <span>{businessData.revenue}</span>
              </div>
            </div>
          </div>

          {/* Contact Agent */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Our Team</h3>
            
            <div className="space-y-4">
              <button className="w-full button-primary">
                Request Information
              </button>
              <button className="w-full button-secondary">
                Schedule Viewing
              </button>
              
              <div className="pt-4 border-t space-y-3">
                <div className="flex items-center text-gray-600">
                  <PhoneIcon className="h-5 w-5 mr-3" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <EnvelopeIcon className="h-5 w-5 mr-3" />
                  <span>info@cannxperts.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Market Analysis */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Market Analysis</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Market Value Range</span>
                <span className="font-medium">$2.5M - $3.2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Price per Sq Ft</span>
                <span className="font-medium">$1,188</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Market Trend</span>
                <span className="font-medium text-green-600">↗ Growing</span>
              </div>
            </div>
            
            <button className="w-full mt-4 text-sm text-primary-600 hover:text-primary-700 font-medium">
              Get Detailed Market Report
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}