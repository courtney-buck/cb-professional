import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-light mb-6">Courtney Buck</h1>
          <p className="text-xl text-gray-600 mb-6">
            Building at the intersection of technology and human potential
          </p>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
            Founder of Studio Both/And, a systems-first consultancy that embraces the power of both efficiency and humanity. I&apos;m a generalist who believes in the magic that happens when we bridge different worlds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
              Explore Studio Both/And →
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium">
              Book a Strategy Call
            </button>
          </div>
        </section>

        {/* Preview Cards Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Studio Both/And Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Studio Both/And</h3>
              <p className="text-gray-600 mb-4">
                Systems-first consultancy that helps organizations navigate complexity while staying human-centered.
              </p>
              <a href="/studio" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                Learn more →
              </a>
            </div>

            {/* AI Learning Lab Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI Learning Lab</h3>
              <p className="text-gray-600 mb-4">
                Learning in public about AI, systems thinking, and the future of work. Join the exploration.
              </p>
              <a href="/ai-lab" className="text-green-600 hover:text-green-700 font-medium inline-flex items-center">
                Explore lab →
              </a>
            </div>

            {/* Latest Insights Card */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Latest Insights</h3>
              <div className="space-y-3">
                <div className="border-l-2 border-purple-200 pl-3">
                  <p className="text-sm text-gray-500">Recent</p>
                  <p className="text-gray-700">The Art of Systems Thinking</p>
                </div>
                <div className="border-l-2 border-purple-200 pl-3">
                  <p className="text-sm text-gray-500">Recent</p>
                  <p className="text-gray-700">AI Ethics in Practice</p>
                </div>
                <div className="border-l-2 border-purple-200 pl-3">
                  <p className="text-sm text-gray-500">Recent</p>
                  <p className="text-gray-700">Building Human-Centered Tech</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Belief Block */}
        <section className="max-w-4xl mx-auto px-6 py-16">
          <div className="bg-rose-100 rounded-2xl p-12 text-center">
            <p className="text-2xl font-light text-gray-800 leading-relaxed">
              &ldquo;I believe in both efficiency and humanity. Both AI and EQ. Both systems and soul.&rdquo;
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}