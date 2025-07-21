import React from 'react'
import { ContactForm } from '@/components/contact/ContactForm'
import { ContactInfo } from '@/components/contact/ContactInfo'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Our Cannabis Business Experts
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to buy or sell a cannabis business? Get in touch with our experienced team 
              for professional guidance and personalized service.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}

export const metadata = {
  title: 'Contact Cannabis Business Experts | CannXperts',
  description: 'Contact our cannabis business brokerage experts for professional guidance on buying and selling cannabis businesses. Free consultation available.',
}