import React from 'react'
import { BusinessDetail } from '@/components/marketplace/BusinessDetail'
import { RelatedBusinesses } from '@/components/marketplace/RelatedBusinesses'

interface BusinessDetailPageProps {
  params: {
    id: string
  }
}

export default function BusinessDetailPage({ params }: BusinessDetailPageProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <BusinessDetail businessId={params.id} />
      <RelatedBusinesses currentBusinessId={params.id} />
    </div>
  )
}

export const metadata = {
  title: 'Cannabis Business Details | CannXperts',
  description: 'Detailed information about cannabis business for sale including financials, operations, and investment opportunity analysis.',
}