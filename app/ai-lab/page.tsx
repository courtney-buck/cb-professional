import Navigation from '@/app/components/Navigation'
import Footer from '@/app/components/Footer'

export default function AILabPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-8">AI Lab</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              An evolving learning laboratory for AI integration and human-centered technology.
            </p>
            
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-semibold mb-4">Current Focus Areas</h2>
              <ul className="space-y-2 text-gray-700">
                <li>• Ethical AI implementation frameworks</li>
                <li>• Human-AI collaboration models</li>
                <li>• Organizational readiness assessments</li>
                <li>• Executive education on emerging technologies</li>
              </ul>
            </div>
            
            <p className="text-gray-700">
              The AI Lab represents our commitment to responsible innovation at the intersection 
              of artificial intelligence and human potential. We explore, experiment, and share 
              learnings that help organizations navigate the rapidly evolving AI landscape.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}