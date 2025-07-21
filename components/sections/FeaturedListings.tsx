'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPinIcon, CurrencyDollarIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

const featuredListings = [
  {
    id: 1,
    title: 'Premium Dispensary - Downtown Portland',
    price: '$2,850,000',
    location: 'Portland, Oregon',
    category: 'Dispensary',
    description: 'Established dispensary in prime downtown location with loyal customer base and strong revenue growth.',
    image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    features: ['Prime Location', 'Established Customer Base', 'Growth Potential']
  },
  {
    id: 2,
    title: 'Large Scale Cultivation Facility',
    price: '$4,200,000',
    location: 'Eugene, Oregon',
    category: 'Cultivation',
    description: 'State-of-the-art indoor cultivation facility with automation systems and proven production capacity.',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    features: ['Automated Systems', 'High Capacity', 'Proven Operations']
  },
  {
    id: 3,
    title: 'Processing & Manufacturing Operation',
    price: '$1,950,000',
    location: 'Bend, Oregon',
    category: 'Processing',
    description: 'Complete processing facility with extraction equipment and established product lines.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    features: ['Extraction Equipment', 'Product Lines', 'Licensed Operation']
  }
]

export function FeaturedListings() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Business Opportunities
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover premium cannabis businesses available for acquisition. 
            Each listing includes comprehensive financial data and professional support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={listing.image}
                  alt={listing.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {listing.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {listing.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {listing.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <CurrencyDollarIcon className="h-4 w-4 mr-2 text-green-600" />
                    <span className="font-semibold">{listing.price}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-2 text-blue-600" />
                    {listing.location}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {listing.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/businesses-for-sale/${listing.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group"
                >
                  View Details
                  <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/businesses-for-sale" className="button-primary">
            View All Listings
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}