import React from 'react'
import { Hero } from '@/components/sections/Hero'
import { FeaturedListings } from '@/components/sections/FeaturedListings'
import { ServicesOverview } from '@/components/sections/ServicesOverview'
import { MarketInsights } from '@/components/sections/MarketInsights'
import { CallToAction } from '@/components/sections/CallToAction'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedListings />
      <ServicesOverview />
      <MarketInsights />
      <CallToAction />
    </div>
  )
}