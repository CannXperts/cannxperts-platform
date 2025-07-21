import './globals.css'

export const metadata = {
  title: 'CannXperts - Cannabis Business Marketplace',
  description: 'Professional cannabis business brokerage and marketplace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">{children}</body>
    </html>
  )
}
