import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-8">Contact</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Let's Connect</h2>
              <p className="text-gray-700 leading-relaxed mb-8">
                Interested in exploring how AI and human potential can intersect 
                in your organization? Let's start a conversation about co-learning 
                and strategic implementation.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">hello@studiobothand.com</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900">Response Time</h3>
                  <p className="text-gray-600">Typically within 24-48 hours</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Partnership Areas</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• AI strategy and integration</li>
                <li>• Executive team co-learning</li>
                <li>• Organizational readiness assessment</li>
                <li>• Leadership development</li>
                <li>• Change management for emerging tech</li>
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 italic">
                  "Both efficiency and humanity.<br />
                  Both AI and EQ.<br />
                  Both systems and soul."
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