export default function SimpleHeader() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <span className="text-2xl font-bold text-blue-600">Subscription Intern</span>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a href="#employers" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
            For Employers
          </a>
          <a href="#students" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
            For Students
          </a>
          <a href="#how-it-works" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
            How It Works
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
          <a href="#login" className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600">
            Log in
          </a>
          <a href="#get-started" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
            Get Started
          </a>
        </div>
      </nav>
    </header>
  )
} 