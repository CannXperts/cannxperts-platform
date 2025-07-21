import React from 'react'
import { 
  DocumentChartBarIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon,
  ScaleIcon,
  ClipboardDocumentCheckIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Business Valuation',
    description: 'Professional cannabis business valuation using industry-specific metrics, market comparables, and regulatory considerations.',
    features: [
      'Market-based valuation analysis',
      'Financial performance assessment',
      'Regulatory compliance review',
      'Growth potential evaluation'
    ],
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Due Diligence',
    description: 'Comprehensive analysis of cannabis business operations, financials, compliance, and market positioning.',
    features: [
      'Financial record analysis',
      'Compliance verification',
      'Operational assessment',
      'Risk factor identification'
    ],
    icon: ShieldCheckIcon,
  },
  {
    name: 'Transaction Support',
    description: 'End-to-end transaction management from initial negotiations through successful business transfer.',
    features: [
      'Deal structuring',
      'Negotiation support',
      'Legal coordination',
      'Closing assistance'
    ],
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Expert Guidance',
    description: 'Industry expertise and regulatory knowledge to navigate complex cannabis business transactions.',
    features: [
      'Regulatory compliance guidance',
      'Market insight analysis',
      'Strategic planning support',
      'Industry best practices'
    ],
    icon: UserGroupIcon,
  },
  {
    name: 'Legal & Compliance',
    description: 'Cannabis-specific legal support and compliance verification for secure business transactions.',
    features: [
      'License transfer assistance',
      'Regulatory compliance review',
      'Contract negotiation',
      'Documentation preparation'
    ],
    icon: ScaleIcon,
  },
  {
    name: 'Market Analysis',
    description: 'Comprehensive cannabis market research and competitive analysis for informed decision-making.',
    features: [
      'Market trend analysis',
      'Competitive landscape review',
      'Growth opportunity assessment',
      'Investment recommendations'
    ],
    icon: ClipboardDocumentCheckIcon,
  },
]

export function ServicesList() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Comprehensive Cannabis Business Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Professional support for every aspect of cannabis business transactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100">
                  <service.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                </div>
                <h3 className="ml-4 text-xl font-semibold text-gray-900">{service.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mr-2 mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}