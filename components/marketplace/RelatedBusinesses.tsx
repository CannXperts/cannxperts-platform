import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPinIcon, CurrencyDollarIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

interface RelatedBusinessesProps {
  currentBusinessId: string
}

const relatedBusinesses = [
  {
    id: 2,
    title: 'State-of-the-Art Cultivation Facility',
    price: '$4,200,000',
    location: 'Eugene, Oregon',
    category: 'Cultivation',
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 3,
    title: 'Processing & Manufacturing Hub',
    price: '$1,950,000',
    location: 'Bend, Oregon',
    category: 'Processing',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  },
  {
    id: 5,
    title: 'Premium Cannabis Delivery Service',
    price: '$1,200,000',
    location: 'Salem, Oregon',
    category: 'Delivery',
    image: 'https://images.unsplash.com/photo-1566919549351-224d83c2e1e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
  }
]

export function RelatedBusinesses({ currentBusinessId }: RelatedBusinessesProps) {
  return (
    <section className="container py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Similar Business Opportunities
        </h2>
        <p className="text-lg text-gray-600">
          Explore other premium cannabis businesses available for acquisition
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedBusinesses.map((business, index) => (
          <motion.div
            key={business.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-xl shadow-sm border hover:shadow-lg transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden rounded-t-xl">
              <img
                src={business.image}
                alt={business.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {business.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                {business.title}
              </h3>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-sm text-gray-600">
                  <CurrencyDollarIcon className="h-4 w-4 mr-2 text-green-600" />
                  <span className="font-semibold">{business.price}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <MapPinIcon className="h-4 w-4 mr-2 text-blue-600" />
                  {business.location}
                </div>
              </div>

              <Link
                href={`/businesses-for-sale/${business.id}`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group"
              >
                View Details
                <ArrowRightIcon className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link href="/businesses-for-sale" className="button-primary">
          View All Businesses
        </Link>
      </div>
    </section>
  )
}