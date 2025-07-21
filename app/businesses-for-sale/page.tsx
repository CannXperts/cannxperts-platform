import React from 'react'
import { BusinessListings } from '@/components/marketplace/BusinessListings'
import { SearchFilters } from '@/components/marketplace/SearchFilters'

export default function BusinessesForSalePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Cannabis Businesses for Sale
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium cannabis business opportunities with comprehensive due diligence 
              and professional transaction support.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <SearchFilters />
          </div>
          
          {/* Business Listings */}
          <div className="lg:col-span-3">
            <BusinessListings />
          </div>
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Cannabis Businesses for Sale | CannXperts',
  description: 'Browse premium cannabis businesses for sale including dispensaries, cultivation facilities, processing operations, and wholesale licenses. Professional brokerage services with comprehensive due diligence.',
}