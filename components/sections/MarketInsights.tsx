import React from 'react'

export function MarketInsights() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Cannabis Market Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Market Growth</h3>
            <p className="text-gray-600">Cannabis industry continues rapid expansion with increasing legalization.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Investment Trends</h3>
            <p className="text-gray-600">Strategic acquisitions and consolidation driving market maturity.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-4">Regulatory Updates</h3>
            <p className="text-gray-600">Evolving compliance requirements create new opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  )
}