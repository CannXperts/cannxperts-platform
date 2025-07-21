export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Cannabis Business Marketplace
          </h1>
          <p className="text-xl mb-8">
            Professional cannabis business brokerage services and marketplace
          </p>
          <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100">
            View Businesses for Sale
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Business Brokerage</h3>
              <p className="text-gray-600">Expert guidance for buying and selling cannabis businesses</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Market Analysis</h3>
              <p className="text-gray-600">Comprehensive market research and valuation services</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Professional Network</h3>
              <p className="text-gray-600">Connect with verified cannabis industry professionals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
