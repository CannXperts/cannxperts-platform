'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FunnelIcon, XMarkIcon } from '@heroicons/react/24/outline'

const businessTypes = [
  'Dispensary',
  'Cultivation',
  'Processing',
  'Wholesale',
  'Delivery',
  'Investment Property'
]

const locations = [
  'Oregon',
  'California',
  'Colorado',
  'Washington',
  'Nevada',
  'Other States'
]

const priceRanges = [
  'Under $500K',
  '$500K - $1M',
  '$1M - $2M',
  '$2M - $5M',
  'Over $5M'
]

export function SearchFilters() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedLocations, setSelectedLocations] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('')

  const toggleFilter = (category: string[], item: string, setter: (items: string[]) => void) => {
    if (category.includes(item)) {
      setter(category.filter(i => i !== item))
    } else {
      setter([...category, item])
    }
  }

  const clearAllFilters = () => {
    setSelectedTypes([])
    setSelectedLocations([])
    setSelectedPriceRange('')
  }

  const hasActiveFilters = selectedTypes.length > 0 || selectedLocations.length > 0 || selectedPriceRange

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50"
        >
          <FunnelIcon className="h-5 w-5 mr-2" />
          Filters
          {hasActiveFilters && (
            <span className="ml-2 bg-primary-600 text-white text-xs rounded-full px-2 py-1">
              {selectedTypes.length + selectedLocations.length + (selectedPriceRange ? 1 : 0)}
            </span>
          )}
        </button>
      </div>

      {/* Desktop Filters */}
      <div className="hidden lg:block">
        <FilterContent
          businessTypes={businessTypes}
          locations={locations}
          priceRanges={priceRanges}
          selectedTypes={selectedTypes}
          selectedLocations={selectedLocations}
          selectedPriceRange={selectedPriceRange}
          onTypeToggle={(item) => toggleFilter(selectedTypes, item, setSelectedTypes)}
          onLocationToggle={(item) => toggleFilter(selectedLocations, item, setSelectedLocations)}
          onPriceRangeChange={setSelectedPriceRange}
          onClearAll={clearAllFilters}
          hasActiveFilters={hasActiveFilters}
        />
      </div>

      {/* Mobile Filter Modal */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            className="fixed left-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            
            <FilterContent
              businessTypes={businessTypes}
              locations={locations}
              priceRanges={priceRanges}
              selectedTypes={selectedTypes}
              selectedLocations={selectedLocations}
              selectedPriceRange={selectedPriceRange}
              onTypeToggle={(item) => toggleFilter(selectedTypes, item, setSelectedTypes)}
              onLocationToggle={(item) => toggleFilter(selectedLocations, item, setSelectedLocations)}
              onPriceRangeChange={setSelectedPriceRange}
              onClearAll={clearAllFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </motion.div>
        </div>
      )}
    </>
  )
}

interface FilterContentProps {
  businessTypes: string[]
  locations: string[]
  priceRanges: string[]
  selectedTypes: string[]
  selectedLocations: string[]
  selectedPriceRange: string
  onTypeToggle: (item: string) => void
  onLocationToggle: (item: string) => void
  onPriceRangeChange: (range: string) => void
  onClearAll: () => void
  hasActiveFilters: boolean
}

function FilterContent({
  businessTypes,
  locations,
  priceRanges,
  selectedTypes,
  selectedLocations,
  selectedPriceRange,
  onTypeToggle,
  onLocationToggle,
  onPriceRangeChange,
  onClearAll,
  hasActiveFilters
}: FilterContentProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 space-y-6">
      {/* Clear Filters */}
      {hasActiveFilters && (
        <button
          onClick={onClearAll}
          className="text-sm text-primary-600 hover:text-primary-700 font-medium"
        >
          Clear all filters
        </button>
      )}

      {/* Business Type */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Business Type</h3>
        <div className="space-y-2">
          {businessTypes.map((type) => (
            <label key={type} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => onTypeToggle(type)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Location */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Location</h3>
        <div className="space-y-2">
          {locations.map((location) => (
            <label key={location} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedLocations.includes(location)}
                onChange={() => onLocationToggle(location)}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">{location}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range} className="flex items-center">
              <input
                type="radio"
                name="priceRange"
                checked={selectedPriceRange === range}
                onChange={() => onPriceRangeChange(range)}
                className="text-primary-600 focus:ring-primary-500"
              />
              <span className="ml-2 text-sm text-gray-700">{range}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}