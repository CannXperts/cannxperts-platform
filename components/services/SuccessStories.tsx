import React from 'react'

const stories = [
  {
    business: 'Portland Premium Dispensary',
    outcome: '$2.8M Sale Completed',
    description: 'Successfully facilitated the sale of a downtown Portland dispensary, achieving above asking price through strategic marketing and buyer qualification.',
    location: 'Portland, OR'
  },
  {
    business: 'Cascade Cultivation Group',
    outcome: '$4.2M Acquisition',
    description: 'Guided buyers through complex due diligence process for large-scale cultivation facility acquisition with seamless license transfer.',
    location: 'Eugene, OR'
  },
  {
    business: 'Northwest Processing LLC',
    outcome: '$1.9M Transaction',
    description: 'Coordinated multi-party transaction for processing facility with equipment evaluation and regulatory compliance verification.',
    location: 'Bend, OR'
  }
]

export function SuccessStories() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Recent Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Proven results in cannabis business transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
              <div className="text-2xl font-bold text-primary-600 mb-2">
                {story.outcome}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {story.business}
              </h3>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <div className="text-sm text-gray-500">{story.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}