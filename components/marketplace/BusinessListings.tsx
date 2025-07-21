'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  CurrencyDollarIcon, 
  HeartIcon,
  ShareIcon,
  EyeIcon,
  BuildingStorefrontIcon,
  TruckIcon,
  BeakerIcon,
  HomeIcon
} from '@heroicons/react/24/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'

// Premium business listings with realistic cannabis industry data
const businessListings = [
  {
    id: 1,
    title: 'Premium Downtown Dispensary',
    price: '$2,850,000',
    location: 'Portland, Oregon',
    category: 'Dispensary',
    description: 'Established dispensary in prime downtown Portland location with loyal customer base and consistent revenue growth. Features modern POS system, security infrastructure, and prime street visibility.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Prime Location', 'Established Brand', 'Growth Potential', 'Full License'],
    revenue: '$3.2M annually',
    sqft: '2,400 sq ft',
    established: '2019',
    employees: 12,
    isFavorited: false
  },
  {
    id: 2,
    title: 'State-of-the-Art Cultivation Facility',
    price: '$4,200,000',
    location: 'Eugene, Oregon',
    category: 'Cultivation',
    description: 'Large-scale indoor cultivation facility with advanced automation systems, climate control, and proven production capacity of 500+ pounds annually.',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Automated Systems', 'High Capacity', 'Proven Operations', 'Tier II License'],
    revenue: '$5.8M annually',
    sqft: '25,000 sq ft',
    established: '2018',
    employees: 25,
    isFavorited: true
  },
  {
    id: 3,
    title: 'Processing & Manufacturing Hub',
    price: '$1,950,000',
    location: 'Bend, Oregon',
    category: 'Processing',
    description: 'Complete processing facility with CO2 extraction equipment, packaging lines, and established product portfolio including edibles, concentrates, and topicals.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Extraction Equipment', 'Product Portfolio', 'Licensed Operation', 'Brand Recognition'],
    revenue: '$2.1M annually',
    sqft: '8,500 sq ft',
    established: '2020',
    employees: 18,
    isFavorited: false
  },
  {
    id: 4,
    title: 'Multi-Location Dispensary Chain',
    price: '$8,750,000',
    location: 'Multiple Oregon Locations',
    category: 'Dispensary',
    description: 'Established dispensary chain with 4 profitable locations across Oregon. Strong brand recognition, centralized operations, and expansion opportunities.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Multi-Location', 'Strong Brand', 'Centralized Ops', 'Expansion Ready'],
    revenue: '$12.5M annually',
    sqft: '8,200 sq ft total',
    established: '2017',
    employees: 45,
    isFavorited: false
  },
  {
    id: 5,
    title: 'Premium Cannabis Delivery Service',
    price: '$1,200,000',
    location: 'Salem, Oregon',
    category: 'Delivery',
    description: 'Established delivery service covering Salem metro area with fleet of 6 vehicles, strong customer base, and proprietary ordering platform.',
    image: 'https://images.unsplash.com/photo-1566919549351-224d83c2e1e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Delivery Fleet', 'Tech Platform', 'Market Coverage', 'Growth Potential'],
    revenue: '$1.8M annually',
    sqft: '3,200 sq ft warehouse',
    established: '2021',
    employees: 15,
    isFavorited: true
  },
  {
    id: 6,
    title: 'Cannabis Investment Property Portfolio',
    price: '$15,500,000',
    location: 'Portland Metro Area',
    category: 'Investment Property',
    description: 'Portfolio of 8 cannabis-zoned properties with existing tenant leases. Prime locations with expansion potential and stable rental income.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Portfolio Deal', 'Tenant Leases', 'Prime Zoning', 'Stable Income'],
    revenue: '$2.4M annually (rental)',
    sqft: '145,000 sq ft total',
    established: '2016',
    employees: 'N/A',
    isFavorited: false
  }
]

const categoryIcons = {
  'Dispensary': BuildingStorefrontIcon,
  'Cultivation': HomeIcon,
  'Processing': BeakerIcon,
  'Delivery': TruckIcon,
  'Wholesale': BuildingStorefrontIcon,
  'Investment Property': HomeIcon
}

export function BusinessListings() {
  const [favorites, setFavorites] = useState<number[]>([2, 5])
  const [sortBy, setSortBy] = useState('newest')

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  return (
    <div>
      {/* Sort and Results Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            {businessListings.length} Businesses Available
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            Premium cannabis business opportunities
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          <select 
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="location">Location</option>
          </select>
        </div>
      </div>

      {/* Business Listings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {businessListings.map((business, index) => {
          const IconComponent = categoryIcons[business.category as keyof typeof categoryIcons]
          const isFavorited = favorites.includes(business.id)
          
          return (
            <motion.div
              key={business.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img
                  src={business.image}
                  alt={business.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-700">
                    <IconComponent className="h-4 w-4 mr-1" />
                    {business.category}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => toggleFavorite(business.id)}
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
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 line-clamp-1">
                    {business.title}
                  </h3>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      {business.price}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {business.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-1 text-blue-600" />
                    {business.location}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <CurrencyDollarIcon className="h-4 w-4 mr-1 text-green-600" />
                    {business.revenue}
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">{business.sqft}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-medium">Est. {business.established}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {business.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                  {business.features.length > 3 && (
                    <span className="text-gray-500 text-xs py-1">
                      +{business.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`/businesses-for-sale/${business.id}`}
                    className="button-primary text-sm"
                  >
                    View Details
                  </Link>
                  
                  <div className="flex items-center text-xs text-gray-500">
                    <EyeIcon className="h-4 w-4 mr-1" />
                    {Math.floor(Math.random() * 500) + 100} views
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Load More */}
      <div className="text-center mt-12">
        <button className="button-secondary">
          Load More Listings
        </button>
      </div>
    </div>
  )
}