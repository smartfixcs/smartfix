import React, { useState} from "react";
import HeroSlider from "./components/HeroSlider";
import ProductsSection from "./components/ProductsSection";

import "./App.css";

function App() {
  
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="App">
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-orange-600 text-white py-3 px-4 text-sm">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <span>📞 +91-8710031865</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️ smartfixcs2018@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block text-xs">
              GST No: 29AOMPD6457J1ZF
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="bg-white shadow-xl sticky top-0 z-50 border-b-4 border-gradient-to-r from-blue-600 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <img 
                  src={`${process.env.PUBLIC_URL}/logo.png`}
                  alt="Smartfix Computer Solution" 
                  className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#home" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Home</a>
                <a href="#about" className="text-gray-.700 hover:text-blue-600 font-semibold transition-colors">About</a>
                <a href="#products" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Products</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Services</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">Testimonials</a>
                <a
                  href="https://wa.me/918710031865?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block"
                >
                  Contact
                </a>
              </div>
              <div className="md:hidden">
              <button
                  onClick={() => setIsOpen(!isOpen)} // 2. Toggle state
                  className="text-gray-700 hover:text-blue-600 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                  </svg>
                </button>
              </div>
            </div>
            {/* ===== Mobile Menu ===== */}
            {isOpen && (
              <div className="md:hidden mt-2 space-y-2 px-2 pb-3">
                <a
                  href="#home"
                  className="block text-gray-700 hover:text-blue-600 font-semibold"
                  onClick={() => setIsOpen(false)} // <-- close menu
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-gray-700 hover:text-blue-600 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
                <a
                  href="#products"
                  className="block text-gray-700 hover:text-blue-600 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </a>
                <a
                  href="#services"
                  className="block text-gray-700 hover:text-blue-600 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="block text-gray-700 hover:text-blue-600 font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Testimonials
                </a>
                <a
                href="https://wa.me/918710031865?text=Hello%2C%20I%20would%20like%20to%20get%20a%20quote%20for%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block"
              >
                Contact
              </a>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Slider */}
        <HeroSlider />

        {/* Hero Section */}
        
        <section id="home" className="relative overflow-hidden">
        <div className="slider-container">
          <div className="slide active bg-gradient-to-br from-blue-50 via-white to-orange-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Text - horizontally centered */}
                <div className="space-y-8 self-center text-center lg:text-left">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="text-gray-900">Welcome to</span><br/>
                    <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                      SMARTFIX
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Your trusted partner for <strong>Computer Sales & Service</strong>. We provide comprehensive IT solutions, 
                    computer hardware sales, and professional repair services. Quality products at competitive prices with unmatched customer service.
                  </p>
                  <div className="flex justify-center lg:justify-start flex-col sm:flex-row gap-4">
                    <a href="#about" className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 inline-block">
                      Contact Now
                    </a>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop"
                    alt="IT Support Team"
                    className="rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>


        {/* Quick Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop"
                    alt="Quick Diagnostics"
                    className="rounded-2xl shadow-xl mx-auto mb-6 w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Quick Diagnostics
                </h3>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1566918621183-ff90d3e0553f?w=400&h=250&fit=crop"
                    alt="Online Help"
                    className="rounded-2xl shadow-xl mx-auto mb-6 w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  Online Help
                </h3>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1663013244412-1153aabaa1bc?w=400&h=250&fit=crop"
                    alt="Professional Repair"
                    className="rounded-2xl shadow-xl mx-auto mb-6 w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  Professional Repair
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
          <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-gray-900">Welcome To</span>{' '}
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
              Smartfix Computer Solution
              </span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
              {/* Left box - 4 images grid */}
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1741392078186-35518e238f6b?w=300&h=200&fit=crop"
                  alt="Before 1"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop"
                  alt="Before 2"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1742416180133-cd9ab0816259?w=300&h=200&fit=crop"
                  alt="After 1"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop"
                  alt="After 2"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </div>

              {/* Right box - paragraphs */}
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Being a reputed Company, We <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent"><strong>Smartfix Computer Solution</strong></span> believe that everyone deserves high-quality computer hardware and IT products, no matter their budget or preferences. That's why we offer a wide range of options, from new and unused products to refurbished and restored items, both branded and assembled.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Why settle for less when you can have both quality and affordability? Visit Smartfix today and discover our commitment to providing quality computer hardware and IT products at competitive prices. Our team takes pride in delivering exceptional customer service and expertise to help you find the perfect product for your needs.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center mb-8">
                {/* Feature 1 */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">💻</span>
                  </div>
                  <h4 className="font-bold text-gray-900">IT Solutions</h4>
                  <p className="text-sm text-gray-600">Complete hardware & software solutions</p>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">⭐</span>
                  </div>
                  <h4 className="font-bold text-gray-900">Major Brands</h4>
                  <p className="text-sm text-gray-600">Dell, HP, Lenovo & Intel partnerships</p>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">🏪</span>
                  </div>
                  <h4 className="font-bold text-gray-900">All @ One Place</h4>
                  <p className="text-sm text-gray-600">Everything for everyone</p>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">📅</span>
                  </div>
                  <h4 className="font-bold text-gray-900">7+ Years Experience</h4>
                  <p className="text-sm text-gray-600">Trusted expertise since 2018</p>
                </div>
              </div>

              {/* Button */}
              {/* <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105">
                Read More
              </button> */}
            </div>
          </div>
        </section>


        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Our Mission</span>
              </h2>
              <p className="text-xl text-gray-600">To achieve our vision, our action plan (Mission) is to:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl">📈</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales</h3>
                <p className="text-gray-600">Build scalable sales.</p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Training</h3>
                <p className="text-gray-600">Provide training to the existing workforce for aggressive action</p>
              </div>
              <div className="text-center bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-3xl">🤝</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Joint-Ventures</h3>
                <p className="text-gray-600">To setup Joint-Ventures with leading companies.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Counter */}
        <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
              <div className="space-y-2">
                <div className="text-5xl font-bold counter" data-target="500">500</div>
                <div className="text-lg font-semibold">Completed Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold counter" data-target="22">22+</div>
                <div className="text-lg font-semibold">Years of Experience</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold counter" data-target="200">1000+</div>
                <div className="text-lg font-semibold">Happy Clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Products Section */}
        <ProductsSection />

        {/* Services Section */}        
        <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Our Services</span>
              </h2>
              <p className="text-xl text-gray-600">Comprehensive IT solutions for all your business needs</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🔧</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Hardware Repair</h3>
                <p className="text-gray-600 mb-6">Expert repair services for desktops, laptops, and servers with genuine parts and warranty.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Component-level repair</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Motherboard repair</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Screen replacement</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Sales & Support</h3>
                <p className="text-gray-600 mb-6">New and refurbished computers, laptops, and IT equipment with complete after-sales support.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Branded systems</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Custom builds</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Warranty support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Networking Solutions</h3>
                <p className="text-gray-600 mb-6">Complete networking setup, CCTV installation, and IT infrastructure management.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> LAN/WAN setup</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> CCTV systems</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Security solutions</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Software Solutions</h3>
                <p className="text-gray-600 mb-6">Operating system installation, software licensing, and business application setup.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> OS installation</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Software licensing</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Business apps</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AMC Services</h3>
                <p className="text-gray-600 mb-6">Annual maintenance contracts with regular health checks and preventive maintenance.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Regular checkups</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Preventive care</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Priority support</li>
                </ul>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Support</h3>
                <p className="text-gray-600 mb-6">Professional technical support during business hours for all your IT needs.</p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Mon-Sat: 10 AM - 7 PM</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> Remote assistance</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span> On-site visits</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">What Clients Say</span>
              </h2>
              <p className="text-xl text-gray-600">Some of our Precious Clients have something to say about Us!</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img src="https://images.unsplash.com/photo-1552642986-ccb41e7059e7?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-16 h-16 rounded-full mr-4"/>
                  <div>
                    <h4 className="font-bold text-gray-900">Ramanath Rao</h4>
                    <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Perfect Junction where one would stop and go for desired Electronic Items. Excellent service and quality products!"</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img src="https://images.unsplash.com/photo-1598096969068-7f52cac10c83?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-16 h-16 rounded-full mr-4"/>
                  <div>
                    <h4 className="font-bold text-gray-900">Abdul Aziz</h4>
                    <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Wide range of Laptops & Desktops available. Tough to make a choice amongst so many good options. Great support team!"</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img src="https://plus.unsplash.com/premium_photo-1682089841647-458dd29dc0ee?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-16 h-16 rounded-full mr-4"/>
                  <div>
                    <h4 className="font-bold text-gray-900">Shiny M.</h4>
                    <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Super Items and Very quick Service! They resolved my laptop issue within hours. Highly recommend their services."</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img src="https://images.unsplash.com/photo-1559100296-d3719e7e0433?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-16 h-16 rounded-full mr-4"/>
                  <div>
                    <h4 className="font-bold text-gray-900">Jagadish K.</h4>
                    <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"One Stop - One Proper Solution for all sorts of Electronic Items! Am very much satisfied with the service Smartfix rendered."</p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img src="https://images.unsplash.com/photo-1509839862600-309617c3201e?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-16 h-16 rounded-full mr-4"/>
                  <div>
                    <h4 className="font-bold text-gray-900">Priya Sharma</h4>
                    <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Amazing technical expertise and customer service. They helped us set up our entire office IT infrastructure seamlessly."</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg">
                <div className="flex items-center mb-6">
                  <img src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=60&h=60&fit=crop&crop=face" alt="Client" className="w-16 h-16 rounded-full mr-4"/>
                  <div>
                    <h4 className="font-bold text-gray-900">Amit Patel</h4>
                    <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">"Professional service with competitive pricing. Their AMC service has kept our systems running smoothly for years."</p>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div className="flex space-x-12 client-logos">
                <img src="https://images.unsplash.com/photo-1706879349377-bda8643cae8b?w=120&h=60&fit=crop" alt="Client Logo" className="h-16 w-auto hover:grayscale-0 transition-all duration-300"/>
                <img src="https://images.unsplash.com/photo-1562705121-e624542c7b9b?w=120&h=60&fit=crop" alt="Client Logo" className="h-16 w-auto hover:grayscale-0 transition-all duration-300"/>
                <img src="https://images.unsplash.com/photo-1646627928017-969b372e2727?w=120&h=60&fit=crop" alt="Client Logo" className="h-16 w-auto hover:grayscale-0 transition-all duration-300"/>
                <img src="https://images.unsplash.com/photo-1714251033127-9401d0adaaac?w=120&h=60&fit=crop" alt="Client Logo" className="h-16 w-auto hover:grayscale-0 transition-all duration-300"/>
                <img src="https://images.unsplash.com/photo-1606963060045-1e3eaa0e6eac?w=120&h=60&fit=crop" alt="Client Logo" className="h-16 w-auto hover:grayscale-0 transition-all duration-300"/>
                <img src="https://images.unsplash.com/photo-1663124178667-28b3776d7c15?w=120&h=60&fit=crop" alt="Client Logo" className="h-16 w-auto hover:grayscale-0 transition-all duration-300"/>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your IT infrastructure? Contact us today!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Office Address */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-start hover:shadow-2xl transition duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">
                📍
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Office Address</h4>
              <p className="text-gray-600">
                No 34, 2nd Floor, 6th Cross, 2nd Main,<br /> JP Nagar, 7th Phase, Bengaluru,<br />
                Karnataka - 560078
              </p>
            </div>

            {/* Phone */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-start hover:shadow-2xl transition duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">
                📞
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Phone</h4>
              <p className="text-gray-600">+91-8710031865</p>
            </div>

            {/* Email */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-start hover:shadow-2xl transition duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl mb-4">
                ✉️
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Email</h4>
              <p className="text-gray-600">smartfixcs2018@gmail.com</p>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-8 rounded-2xl shadow-xl flex flex-col items-start hover:shadow-2xl transition duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-blue-600 rounded-xl flex items-center justify-center text-white text-xl mb-4">
                🕒
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Business Hours</h4>
              <p className="text-gray-600">
                Mon-Sat: 10:00 AM - 7:00 PM<br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-orange-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top Grid Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left items-center md:items-start justify-center">
              
              {/* Logo & Description */}
              <div className="md:col-span-2 flex flex-col items-center md:items-start">
                <img 
                  src={`${process.env.PUBLIC_URL}/logo.png`} 
                  alt="Smartfix Computer Solution" 
                  className="h-16 w-auto mb-6 filter brightness-0 invert" 
                />
                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Your trusted partner for comprehensive IT solutions, computer hardware, and professional services. 
                  Quality products at competitive prices with unmatched customer service.
                </p>
                <div className="flex space-x-4 justify-center md:justify-start">
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold">f</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold">t</span>
                  </a>
                  <a href="#" className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform">
                    <span className="text-white font-bold">in</span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-bold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                  <li><a href="#products" className="text-gray-300 hover:text-white transition-colors">Products</a></li>
                  <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-xl font-bold mb-6">Services</h4>
                <ul className="space-y-3">
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Hardware Repair</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Software Solutions</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Networking</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">AMC Services</a></li>
                  <li><a href="#" className="text-gray-300 hover:text-white transition-colors">24/7 Support</a></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-12 pt-8 text-center">
              <div className="flex flex-col items-center md:flex-row md:justify-between md:items-center text-center">
                <p className="text-gray-300 mb-4 md:mb-0">
                  © 2025 Smartfix Computer Solution. All Rights Reserved. | GST: 29AOMPD6457J1ZF
                </p>
                <p className="text-gray-300">
                  Designed & Developed by <span className="text-orange-400 font-semibold">Kiran Tikoo</span>
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;