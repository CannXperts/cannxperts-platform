import React from 'react'
import { ServicesHero } from '@/components/services/ServicesHero'
import { ServicesList } from '@/components/services/ServicesList'
import { ProcessOverview } from '@/components/services/ProcessOverview'
import { SuccessStories } from '@/components/services/SuccessStories'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesList />
      <ProcessOverview />
      <SuccessStories />
    </div>
  )
}

export const metadata = {
  title: 'Cannabis Business Brokerage Services | CannXperts',
  description: 'Professional cannabis business brokerage services including valuation, due diligence, transaction support, and expert guidance for buying and selling cannabis businesses.',
}