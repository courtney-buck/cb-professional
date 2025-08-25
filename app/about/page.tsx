import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-8">About</h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-4">Courtney Buck</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Founder of Studio Both/And, an evolving AI learning lab and consultancy. 
                  Building at the intersection of technology and human potential.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With a background in I/O Psychology and organizational design, I help 
                  leaders and teams navigate the complexities of emerging technologies 
                  while maintaining focus on human-centered outcomes.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Philosophy</h3>
                <p className="text-sm text-gray-600 italic">
                  I believe in both efficiency and humanity.<br />
                  Both AI and EQ.<br />
                  Both systems and soul.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Experience</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• AI Integration Strategy</li>
                  <li>• Organizational Psychology</li>
                  <li>• Leadership Development</li>
                  <li>• Change Management</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Approach</h3>
                <p className="text-gray-700">
                  Co-learning partnerships that combine strategic thinking with 
                  practical implementation, always keeping human potential at the center.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}