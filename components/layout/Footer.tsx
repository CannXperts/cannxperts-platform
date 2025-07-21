import React from 'react'
import Link from 'next/link'

const navigation = {
  marketplace: [
    { name: 'Dispensaries for Sale', href: '/businesses-for-sale/dispensaries' },
    { name: 'Cultivation for Sale', href: '/businesses-for-sale/cultivation' },
    { name: 'Processing for Sale', href: '/businesses-for-sale/processing' },
    { name: 'Investment Opportunities', href: '/investments' },
  ],
  services: [
    { name: 'Business Valuation', href: '/services/valuation' },
    { name: 'Due Diligence', href: '/services/due-diligence' },
    { name: 'Legal Support', href: '/services/legal' },
    { name: 'Market Analysis', href: '/services/analysis' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Press', href: '/press' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Compliance', href: '/compliance' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container">
        <div className="py-16 lg:py-20">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <div>
                <div className="text-2xl font-bold text-white">
                  CannXperts
                </div>
                <p className="mt-4 text-base text-gray-300 max-w-md">
                  The premier marketplace for cannabis business transactions. 
                  Professional brokerage services for dispensaries, cultivation, 
                  processing, and investment opportunities.
                </p>
              </div>
              <div className="flex space-x-6">
                {/* Social Media Links */}
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold leading-6 text-white">
                    Marketplace
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.marketplace.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-semibold leading-6 text-white">
                    Services
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.services.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-semibold leading-6 text-white">
                    Company
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.company.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-10 md:mt-0">
                  <h3 className="text-base font-semibold leading-6 text-white">
                    Legal
                  </h3>
                  <ul role="list" className="mt-6 space-y-4">
                    {navigation.legal.map((item) => (
                      <li key={item.name}>
                        <Link 
                          href={item.href} 
                          className="text-sm leading-6 text-gray-300 hover:text-white transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 border-t border-gray-700 pt-8 lg:mt-20">
            <div className="md:flex md:items-center md:justify-between">
              <div className="flex space-x-6 md:order-2">
                <Link 
                  href="/contact" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact: sales@cannxperts.com
                </Link>
                <Link 
                  href="tel:+1-555-0123" 
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200"
                >
                  (555) 012-3456
                </Link>
              </div>
              <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
                &copy; 2024 CannXperts. All rights reserved. Cannabis business brokerage services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}