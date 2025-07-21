import SimpleHeader from '@/components/SimpleHeader'

export default function Home() {
  return (
    <main className="min-h-screen">
      <SimpleHeader />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connect with{' '}
              <span className="text-blue-600">Top University Talent</span>{' '}
              Through Our Subscription Platform
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
              Revolutionize your hiring process with pre-vetted university students. Fast, affordable, and seamless talent matching with comprehensive support.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#get-started" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
                Get Started Today
              </a>
              <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-600 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 text-center">
            <div>
              <dt className="text-base leading-7 text-blue-200">Successful Placements</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white lg:text-4xl">2,500+</dd>
            </div>
            <div>
              <dt className="text-base leading-7 text-blue-200">Partner Universities</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white lg:text-4xl">150+</dd>
            </div>
            <div>
              <dt className="text-base leading-7 text-blue-200">Employer Satisfaction</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white lg:text-4xl">95%</dd>
            </div>
            <div>
              <dt className="text-base leading-7 text-blue-200">Average Time to Hire</dt>
              <dd className="text-3xl font-bold leading-9 tracking-tight text-white lg:text-4xl">7 Days</dd>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for Success on Both Sides
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform creates value for employers seeking top talent and students pursuing meaningful opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Pre-Vetted Talent Pool</h4>
              <p className="text-gray-600">Access rigorously screened students from top universities with verified skills.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Rapid Placement</h4>
              <p className="text-gray-600">Reduce hiring time by 70% with our streamlined matching process.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Full Support</h4>
              <p className="text-gray-600">We handle contracts, onboarding, and all administrative tasks.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Cost-Effective</h4>
              <p className="text-gray-600">Affordable subscription model with transparent pricing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-900 to-green-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to revolutionize your hiring?
          </h2>
          <p className="mt-6 text-lg text-blue-100 max-w-xl mx-auto">
            Join hundreds of companies that have transformed their internship programs with our platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#employer-signup" className="bg-white text-blue-600 hover:bg-gray-50 font-semibold py-4 px-8 rounded-lg">
              I'm an Employer
            </a>
            <a href="#student-signup" className="bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg">
              I'm a Student
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <span className="text-2xl font-bold text-white">Subscription Intern</span>
            <p className="mt-4 text-sm leading-6 text-gray-300 max-w-2xl mx-auto">
              Revolutionizing the way employers connect with top-tier university talent for internships and project-based work.
            </p>
            <div className="mt-8 flex justify-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-gray-300">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-gray-300">GitHub</a>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 text-center">
            <p className="text-xs leading-5 text-gray-400">
              &copy; 2024 Subscription Intern. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
} 