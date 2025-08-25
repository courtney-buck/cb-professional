import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function StudioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow pt-20">
        {/* Header Section */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-5xl font-light mb-6">Studio Both/And</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            A systems-first, human-centered consultancy for the AI era.
          </p>
        </section>

        {/* Services Section */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Integration & Automation Strategy */}
            <div className="bg-white border-l-4 border-rose-300 rounded-r-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                AI Integration & Automation Strategy
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Navigate the complexity of AI adoption with human-centered automation strategies. 
                We design systems that enhance human capabilities rather than replace them, 
                ensuring your organization thrives in the AI era.
              </p>
            </div>

            {/* Org Design for Emerging Tech */}
            <div className="bg-white border-l-4 border-rose-300 rounded-r-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Org Design for Emerging Tech
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Reimagine organizational structures for the future of work. We help you build 
                adaptive, resilient organizations that can thrive in rapidly evolving technological 
                landscapes while maintaining human connection and purpose.
              </p>
            </div>

            {/* Leadership Development through I/O Psychology */}
            <div className="bg-white border-l-4 border-rose-300 rounded-r-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Leadership Development through I/O Psychology
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Develop leaders who can navigate complexity with both analytical rigor and 
                emotional intelligence. Our evidence-based approach combines industrial-organizational 
                psychology with practical leadership frameworks.
              </p>
            </div>

            {/* Co-learning partnerships for executive teams */}
            <div className="bg-white border-l-4 border-rose-300 rounded-r-lg p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                Co-learning Partnerships for Executive Teams
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Transform your executive team through collaborative learning experiences. 
                We facilitate co-learning partnerships that build collective intelligence 
                and foster innovation while strengthening team dynamics and trust.
              </p>
            </div>
          </div>
        </section>

        {/* Both/And Philosophy Section */}
        <section className="max-w-4xl mx-auto px-6 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-light mb-8 text-gray-900">
              The Both/And Philosophy
            </h2>
            <div className="bg-rose-100 rounded-2xl p-12">
              <p className="text-2xl font-light text-gray-800 leading-relaxed">
                &ldquo;I believe in both efficiency and humanity. Both AI and EQ. Both systems and soul.&rdquo;
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}