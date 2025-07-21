import React from 'react'
import Link from 'next/link'

export function CallToAction() {
  return (
    <section className="section-padding bg-primary-600">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Buy or Sell Your Cannabis Business?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get started with a free consultation and professional market analysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-gray-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              Schedule Consultation
            </Link>
            <Link href="/list-business" className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
              List Your Business
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}