import React from 'react'
import type { Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navigation } from '@/components/layout/Navigation'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
})

export const metadata: Metadata = {
  title: {
    default: 'CannXperts - Premier Cannabis Business Marketplace',
    template: '%s | CannXperts'
  },
  description: 'The leading marketplace for buying and selling cannabis businesses. Dispensaries, cultivation facilities, processing operations, and investment opportunities.',
  keywords: [
    'cannabis business for sale',
    'dispensary for sale',
    'cannabis cultivation for sale',
    'cannabis processor for sale',
    'cannabis license for sale',
    'marijuana business broker',
    'cannabis investment opportunities',
    'OLCC licensed business',
    'cannabis business valuation',
    'cannabis M&A'
  ],
  authors: [{ name: 'CannXperts' }],
  creator: 'CannXperts',
  publisher: 'CannXperts',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://cannxperts.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cannxperts.ai',
    siteName: 'CannXperts',
    title: 'CannXperts - Premier Cannabis Business Marketplace',
    description: 'The leading marketplace for buying and selling cannabis businesses. Professional brokerage services for dispensaries, cultivation, and processing operations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CannXperts Cannabis Business Marketplace',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CannXperts - Premier Cannabis Business Marketplace',
    description: 'The leading marketplace for buying and selling cannabis businesses.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <body className="min-h-screen bg-white font-sans antialiased">
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}