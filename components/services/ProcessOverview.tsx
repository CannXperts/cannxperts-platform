import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'Free consultation to understand your needs and evaluate opportunities.'
  },
  {
    number: '02', 
    title: 'Market Analysis',
    description: 'Comprehensive market research and business valuation assessment.'
  },
  {
    number: '03',
    title: 'Due Diligence',
    description: 'Thorough review of financials, operations, and compliance status.'
  },
  {
    number: '04',
    title: 'Transaction Support',
    description: 'Professional guidance through negotiations and closing process.'
  }
]

export function ProcessOverview() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Proven Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Streamlined approach to cannabis business transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white text-xl font-bold mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}