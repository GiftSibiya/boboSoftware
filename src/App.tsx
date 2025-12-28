import logo from './assets/logo.png'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img src={logo} alt="b0b0 software logo" className="h-12" />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-700 transition-colors">Services</a>
              <a href="#projects" className="text-gray-700 hover:text-green-700 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-700 hover:text-green-700 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <img src={logo} alt="b0b0 software logo" className="h-32 mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Custom Software Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We build modern web and mobile applications with React, React Native, and powerful Node.js backends. 
            Delivering scalable, type-safe solutions powered by TypeScript.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">What We Specialize In</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">⚛️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">React</h3>
              <p className="text-gray-600">Modern, responsive web applications built with the latest React technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">React Native</h3>
              <p className="text-gray-600">Cross-platform mobile apps for iOS and Android with native performance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Node.js</h3>
              <p className="text-gray-600">Scalable backend services and APIs built for performance and reliability.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">📘</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TypeScript</h3>
              <p className="text-gray-600">Type-safe codebases that reduce errors and improve maintainability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Taxi Admin */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="text-3xl mb-4">🚕</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Taxi Admin</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive solution for managing your taxi fleet, drivers, and operations. 
                  Increase efficiency, reduce costs, and improve customer satisfaction with our powerful platform.
                </p>
                <a 
                  href="https://taxiadmin.co.za/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                >
                  Visit Website →
                </a>
              </div>
            </div>

            {/* Accelerit */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="text-3xl mb-4">📶</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">Accelerit Connect</h3>
                <p className="text-gray-600 mb-4">
                  A mobile application for managing broadband and internet services. 
                  Features account management, instant top-ups, speed tests, and 24/7 customer support.
                </p>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.ClientAppTech.Accelerit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                >
                  View on Play Store →
                </a>
              </div>
            </div>

            {/* PhandaPay */}
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="text-3xl mb-4">💳</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">PhandaPay</h3>
                <p className="text-gray-600 mb-4">
                  A revolutionary digital wallet and voucher platform for buying and selling hotspot vouchers. 
                  Features secure payments, QR codes, rewards system, and dual user modes.
                </p>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.accelerit.phandapay&hl=en_IE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-700 hover:text-green-800 font-medium"
                >
                  View on Play Store →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-green-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
            <p className="text-xl text-green-100 mb-12 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <a 
                href="mailto:info@bobosoftware.co.za" 
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <span>📧</span> info@bobosoftware.co.za
              </a>
              <a 
                href="tel:0712442080" 
                className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                <span>📞</span> 071 244 2080
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; {new Date().getFullYear()} b0b0 software. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
