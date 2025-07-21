import React from 'react'
import Link from 'next/link'

export function ServicesHero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 via-white to-cannabis-50 py-20 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Professional Cannabis{' '}
            <span className="gradient-text">Brokerage Services</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for buying and selling cannabis businesses with industry expertise, 
            regulatory knowledge, and proven transaction success.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="button-primary">
              Schedule Consultation
            </Link>
            <Link href="/businesses-for-sale" className="button-secondary">
              Browse Opportunities
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}