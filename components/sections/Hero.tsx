'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-cannabis-50 py-20 lg:py-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Premier Cannabis{' '}
              <span className="gradient-text">Business Marketplace</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Connect with verified cannabis businesses for sale. From dispensaries to cultivation facilities, 
              find your next investment opportunity with professional guidance and comprehensive due diligence support.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/businesses-for-sale" className="button-primary group">
              Browse Businesses
              <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link href="/get-valuation" className="button-secondary group">
              <MagnifyingGlassIcon className="mr-2 h-4 w-4" />
              Get Free Valuation
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">500+</div>
              <div className="text-sm text-gray-600 mt-1">Businesses Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">$2.5B+</div>
              <div className="text-sm text-gray-600 mt-1">Transaction Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">98%</div>
              <div className="text-sm text-gray-600 mt-1">Client Satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="container mt-16"
      >
        <div className="mx-auto max-w-2xl">
          <div className="glass-effect rounded-2xl p-6">
            <form className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label htmlFor="search" className="sr-only">
                  Search businesses
                </label>
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="block w-full rounded-lg border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-500 focus:border-primary-500 focus:ring-primary-500"
                  placeholder="Search dispensaries, cultivation, processing..."
                />
              </div>
              <div className="sm:w-48">
                <select className="block w-full rounded-lg border-gray-300 py-3 px-4 text-gray-900 focus:border-primary-500 focus:ring-primary-500">
                  <option value="">All Categories</option>
                  <option value="dispensary">Dispensary</option>
                  <option value="cultivation">Cultivation</option>
                  <option value="processing">Processing</option>
                  <option value="wholesale">Wholesale</option>
                </select>
              </div>
              <button type="submit" className="button-primary">
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                Search
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  )
}