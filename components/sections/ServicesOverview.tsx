import React from 'react'
import { motion } from 'framer-motion'
import { 
  DocumentChartBarIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon, 
  UserGroupIcon 
} from '@heroicons/react/24/outline'

const services = [
  {
    name: 'Business Valuation',
    description: 'Professional valuation services using industry-specific metrics and market data.',
    icon: DocumentChartBarIcon,
  },
  {
    name: 'Due Diligence',
    description: 'Comprehensive analysis of financial records, compliance, and operational procedures.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Transaction Support',
    description: 'End-to-end support from initial contact through successful business transfer.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Expert Guidance',
    description: 'Industry expertise and regulatory knowledge to navigate complex transactions.',
    icon: UserGroupIcon,
  },
]

export function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Professional Cannabis Brokerage Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support for buying and selling cannabis businesses with industry expertise.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                <service.icon className="h-8 w-8 text-primary-600" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-gray-900">{service.name}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}