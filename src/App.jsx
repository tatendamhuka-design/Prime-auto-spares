import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// ========== ANIMATED TOP BANNER ==========
function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const banners = [
    { text: "FREE DELIVERY on orders over R1500 within Johannesburg", icon: "🚚" },
    { text: "TRADE DISCOUNTS available for workshops & mechanics", icon: "🔧" },
    { text: "SAME-DAY sourcing on most parts - Call now!", icon: "⚡" },
    { text: "GENUINE & AFTERMARKET parts available", icon: "✓" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  return (
    <div className="bg-[#C00000] text-white py-2 overflow-hidden fixed top-0 left-0 w-full z-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 text-center">
            <div className="animate-slide">
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-medium">
                <span>{banners[currentIndex].icon}</span>
                <span>{banners[currentIndex].text}</span>
              </span>
            </div>
          </div>
          <a href="tel:0663845291" className="hidden md:flex items-center gap-1 text-xs bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition">
            📞 Call Now
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 bg-white/40 transition-all duration-100" 
           style={{ width: `${((currentIndex + 1) / banners.length) * 100}%` }}></div>
    </div>
  );
}

// ========== NAVBAR ==========
function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-10 left-0 w-full bg-white z-40 border-b border-gray-200 shadow-sm">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center py-3">
          <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setMobileMenuOpen(false)}>
            <img 
              src="/logo.png" 
              alt="Prime Auto Spares Logo" 
              className="h-10 md:h-14 w-auto"
              style={{ width: 'auto', minWidth: '80px' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/favicon-32x32.png';
              }}
            />
            <div className="hidden sm:block">
              <span className="text-lg md:text-2xl font-extrabold text-black whitespace-nowrap">
                PRIME <span className="text-[#C00000]">AUTO</span> SPARES
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 font-semibold hover:text-[#C00000] transition-colors ${location.pathname === link.path ? 'text-[#C00000]' : ''}`}
              >
                {link.name}
              </Link>
            ))}
           <a
  href="https://wa.me/27663845291"
  className="bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#20b359] transition flex items-center gap-2 font-semibold text-sm shadow-md hover:shadow-lg whitespace-nowrap"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  <span className="hidden lg:inline">WhatsApp</span>
  <span className="lg:hidden">WA</span>
</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex flex-col gap-1.5 md:hidden z-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-24 left-0 w-full bg-white shadow-lg transition-all duration-300 z-40 ${mobileMenuOpen ? 'max-h-[80vh] opacity-100 p-6' : 'max-h-0 opacity-0 p-0 overflow-hidden'}`}>
        <div className="flex flex-col items-center gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-gray-700 font-semibold text-lg hover:text-[#C00000] transition-colors ${location.pathname === link.path ? 'text-[#C00000]' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/27663845291"
            className="bg-[#25D366] text-white px-8 py-3 rounded-lg hover:bg-[#20b359] transition flex items-center gap-2 text-lg font-semibold shadow-md w-full justify-center"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.032 0C5.384 0 0 5.384 0 12.032c0 2.112.544 4.192 1.6 6.016L0 24l6.016-1.6a11.936 11.936 0 0 0 5.984 1.6c6.656 0 12.032-5.376 12.032-12.032 0-6.656-5.376-12-12.032-12z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}

// ========== HERO ==========
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90 z-0 hidden md:block"></div>
      <div className="absolute inset-0 z-0 md:hidden">
        <img 
          src="/images/hero-mobile-bg.jpg" 
          alt="Auto parts background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-[#C00000]/10 z-0 hidden md:block"></div>
      <div className="absolute top-0 left-0 w-32 h-1 bg-[#C00000] z-10"></div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-[#C00000]/20 text-[#C00000] px-3 py-1 text-xs font-semibold tracking-wide mb-6 rounded">
              EST. 2024
            </div>
            <h1 className="text-white mb-6">
              <div className="text-3xl sm:text-4xl font-light text-[#C0C0C0]/80 mb-2">
                NEED AUTO PARTS FAST?
              </div>
              <div className="text-4xl sm:text-5xl font-bold">
                WE'VE GOT YOU{' '}
                <span className="text-[#C00000]">COVERED.</span>
              </div>
            </h1>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
              Quality replacement parts for cars, bakkies, and light commercial vehicles. 
              Competitive prices, quick sourcing, and dependable service from one of 
              Johannesburg's trusted auto spares suppliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 justify-center md:justify-start">
              <Link to="/contact" className="bg-[#C00000] text-white px-6 py-3 rounded font-semibold hover:bg-[#7A0000] transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 text-sm">
                Request a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a 
  href="https://wa.me/27663845291" 
  className="border border-white/30 text-white px-6 py-3 rounded font-semibold hover:border-[#C00000] hover:text-[#C00000] transition-all hover:-translate-y-0.5 inline-flex items-center justify-center gap-2 text-sm" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  WhatsApp Us
</a>
            </div>
            <div className="flex gap-8 pt-6 border-t border-white/10 justify-center md:justify-start">
              <div className="text-center md:text-left">
                <h3 className="text-[#C00000] text-2xl font-bold">5000+</h3>
                <p className="text-white/40 text-xs uppercase tracking-wide mt-1">Parts in Stock</p>
              </div>
              <div className="w-px h-8 bg-white/10 self-center"></div>
              <div className="text-center md:text-left">
                <h3 className="text-[#C00000] text-2xl font-bold">24/7</h3>
                <p className="text-white/40 text-xs uppercase tracking-wide mt-1">Quick Support</p>
              </div>
              <div className="w-px h-8 bg-white/10 self-center"></div>
              <div className="text-center md:text-left">
                <h3 className="text-[#C00000] text-2xl font-bold">Same-Day</h3>
                <p className="text-white/40 text-xs uppercase tracking-wide mt-1">Delivery</p>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img src="/images/hero-image.jpg" alt="Premium auto parts" className="w-full h-auto object-cover" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#C00000]/20 to-transparent rounded-tr-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== ABOUT SECTION ==========
function About() {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-[#C00000]/10 text-[#C00000] px-4 py-1 rounded-full text-sm font-semibold mb-4">
            About Prime Auto Spares
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black">
            Trusted Auto Parts <span className="text-[#C00000]">Supplier in Johannesburg</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          <div className="text-center lg:text-left flex flex-col h-full">
            <div className="space-y-4 text-gray-600 leading-relaxed flex-grow">
              <p>Prime Auto Spares is a trusted Johannesburg auto parts supplier specializing in high-quality replacement parts for passenger vehicles, bakkies, SUVs, and light commercial vehicles across South Africa.</p>
              <p>We provide a wide range of affordable auto spares, including engine parts, suspension components, braking systems, filters, electrical parts, and vehicle accessories from reputable manufacturers.</p>
              <p>Whether you're a vehicle owner, mechanic, workshop, fleet operator, or dealership, Prime Auto Spares is your dependable partner for quality car parts in Johannesburg and nationwide.</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#C00000]/10 rounded-full flex items-center justify-center text-[#C00000] text-sm font-bold">✓</div>
                <span className="text-sm font-medium text-gray-700">Quality Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#C00000]/10 rounded-full flex items-center justify-center text-[#C00000] text-sm font-bold">✓</div>
                <span className="text-sm font-medium text-gray-700">Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#C00000]/10 rounded-full flex items-center justify-center text-[#C00000] text-sm font-bold">✓</div>
                <span className="text-sm font-medium text-gray-700">Best Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-[#C00000]/10 rounded-full flex items-center justify-center text-[#C00000] text-sm font-bold">✓</div>
                <span className="text-sm font-medium text-gray-700">24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col h-full">
            <div className="rounded-lg overflow-hidden shadow-xl h-full">
              <img src="/images/about-image.jpg" alt="Auto parts warehouse" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#C00000]/10 rounded-full hidden md:block"></div>
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#C00000]/5 rounded-full hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== QUOTE FORM ==========
function QuoteForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✓ Quote request sent!\n\nThank you for choosing Prime Auto Spares. We will contact you within 1 hour.');
    e.target.reset();
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl"><img src="/images/quote-image.jpg" alt="Get a quote for auto parts" className="w-full h-auto object-cover mx-auto" /></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#C00000]/10 rounded-full hidden md:block"></div>
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-extrabold text-black inline-block pb-3 relative">Need a <span className="text-[#C00000]">Part?</span><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-[#C00000]"></div></h2>
              <p className="text-gray-500 mt-4">Send us your vehicle details and we'll source the correct part fast.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Vehicle Make" required className="p-3 border border-gray-200 rounded bg-gray-50 focus:border-[#C00000] focus:outline-none" />
                  <input type="text" placeholder="Vehicle Model" required className="p-3 border border-gray-200 rounded bg-gray-50 focus:border-[#C00000] focus:outline-none" />
                  <input type="text" placeholder="Vehicle Year" className="p-3 border border-gray-200 rounded bg-gray-50 focus:border-[#C00000] focus:outline-none" />
                  <input type="text" placeholder="Engine Size" className="p-3 border border-gray-200 rounded bg-gray-50 focus:border-[#C00000] focus:outline-none" />
                  <input type="text" placeholder="VIN Number" className="p-3 border border-gray-200 rounded bg-gray-50 focus:border-[#C00000] focus:outline-none" />
                  <input type="tel" placeholder="Phone Number" required className="p-3 border border-gray-200 rounded bg-gray-50 focus:border-[#C00000] focus:outline-none" />
                </div>
                <textarea placeholder="Message / Part needed..." rows="3" className="w-full mt-4 p-3 border border-gray-200 rounded bg-gray-50 focus:border-[#C00000] focus:outline-none"></textarea>
                <button type="submit" className="w-full mt-4 bg-[#C00000] text-white px-6 py-3 rounded font-bold hover:bg-[#7A0000] transition-all">Request Quote →</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== WHY CHOOSE US ==========
function WhyChooseUs() {
  const features = ["Competitive Prices", "Fast Parts Sourcing", "Reliable Service", "Quality Replacement Parts", "Friendly Customer Support", "Delivery Available"];
  return (
    <section className="bg-black py-20">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12"><h2 className="text-3xl md:text-4xl font-extrabold text-white inline-block pb-3 relative">Why Choose <span className="text-[#C00000]">Us</span><div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-[#C00000]"></div></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{features.map((feature, index) => (<div key={index} className="border border-white/10 rounded-lg p-8 text-center hover:border-[#C00000] transition-all hover:-translate-y-1"><p className="text-white text-lg font-semibold">✓ {feature}</p></div>))}</div>
      </div>
    </section>
  );
}

// ========== SERVICE AREAS ==========
function ServiceAreas() {
  const areas = ["Johannesburg", "Alberton", "Germiston", "Boksburg", "Roodepoort", "Surrounding Areas"];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image - NO OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/service-areas-bg.jpg" 
          alt="Service areas background" 
          className="w-full h-full object-cover opacity-20 md:opacity-30"
        />
        {/* REMOVED the white overlay that was hiding the image */}
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black inline-block pb-3 relative">
            Service <span className="text-[#C00000]">Areas</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-[#C00000]"></div>
          </h2>
          <p className="text-gray-600 mt-4">Serving customers across Gauteng and surrounding areas</p>
        </div>
        
        <div className="overflow-hidden">
          <div 
            className="flex gap-6 animate-scroll-horizontal"
            style={{ 
              animation: `scrollHorizontal 20s linear infinite`,
              width: 'max-content'
            }}
          >
            {[...areas, ...areas].map((area, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm text-center px-8 py-4 rounded-lg font-semibold shadow-md hover:bg-[#C00000] hover:text-white transition-all hover:-translate-y-1 cursor-pointer whitespace-nowrap min-w-[180px]">
                📍 {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ========== TESTIMONIALS ==========
function Testimonials() {
  const testimonials = [
    { name: "Johannes van der Merwe", location: "Johannesburg", rating: 5, text: "Excellent service from Prime Auto Spares! They sourced a hard-to-find part for my bakkie within hours. Great prices and friendly staff." },
    { name: "Sphamandla Ndlovu", location: "Alberton", rating: 5, text: "I've been buying parts from them for my workshop for over a year. Reliable, fast delivery, and quality products every time." },
    { name: "Michael Naidoo", location: "Germiston", rating: 5, text: "Best auto parts supplier in Gauteng! Competitive prices and same-day delivery saved me when my car broke down." },
    { name: "Thabo Modise", location: "Boksburg", rating: 5, text: "Professional service and quality parts. Their WhatsApp support is super responsive. Highly recommended!" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white inline-block pb-3 relative">
            What Our <span className="text-[#C00000]">Customers Say</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-[#C00000]"></div>
          </h2>
          <p className="text-gray-400 mt-4">Trusted by hundreds of happy customers across Johannesburg</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <svg className="w-8 h-8 text-[#C00000]/20 mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 17h3l2-4V7h-6v6h3l-2 4zm-8 0h3l2-4V7H5v6h3l-2 4z"/>
              </svg>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="w-12 h-px bg-gray-200 my-3"></div>
              <div>
                <h4 className="font-bold text-black">{testimonial.name}</h4>
                <p className="text-gray-400 text-xs">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== FAQS ==========
function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of vehicles do you supply parts for?",
      answer: "We supply quality replacement parts for passenger vehicles, bakkies, SUVs, and light commercial vehicles. We cover most major makes and models available in South Africa."
    },
    {
      question: "Do you offer same-day parts sourcing?",
      answer: "Yes! We offer same-day parts sourcing on most items. Our team works quickly to find and deliver the parts you need, often within hours of your request."
    },
    {
      question: "What areas do you deliver to?",
      answer: "We deliver across Johannesburg, Alberton, Germiston, Boksburg, Roodepoort, and surrounding areas in Gauteng. We can also arrange nationwide delivery on request."
    },
    {
      question: "Do you offer trade discounts for workshops?",
      answer: "Yes, we offer competitive trade pricing and dedicated support for workshops, mechanics, fleet operators, and dealerships. Contact us to set up a trade account."
    },
    {
      question: "How do I request a quote for a part?",
      answer: "You can request a quote through our website contact form, call us at 066 384 5291, or send us a WhatsApp message. We'll get back to you quickly with pricing and availability."
    },
    {
      question: "Are your parts genuine or aftermarket?",
      answer: "We supply both genuine OEM parts and high-quality aftermarket alternatives. We'll advise you on the best option based on your vehicle, budget, and requirements."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black inline-block pb-3 relative">
            Frequently Asked <span className="text-[#C00000]">Questions</span>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60px] h-1 bg-[#C00000]"></div>
          </h2>
          <p className="text-gray-500 mt-4">Find answers to common questions about our auto parts and services</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => toggleFAQ(index)} className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-black text-base">{faq.question}</span>
                <svg className={`w-5 h-5 text-[#C00000] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`px-5 transition-all duration-300 overflow-hidden ${openIndex === index ? 'pb-5 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ========== FINAL CTA ==========
function FinalCTA() {
  return (
    <section className="bg-gradient-to-r from-[#C00000] to-[#7A0000] py-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Get Your Part?</h2>
        <p className="text-white/90 text-lg mb-8">Contact Prime Auto Spares today for instant quotes and fast delivery</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-[#C00000] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-all inline-block">Contact Us →</Link>
          <a 
  href="https://wa.me/27663845291" 
  className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#C00000] transition-all inline-flex items-center justify-center gap-2" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  WhatsApp Us →
</a>
        </div>
      </div>
    </section>
  );
}

// ========== HOME PAGE ==========
function Home() {
  return (
    <>
      <Hero />
      <About />
      <QuoteForm />
      <WhyChooseUs />
      <ServiceAreas />
      <Testimonials />
      <FAQs />
      <FinalCTA />
    </>
  );
}

// ========== SERVICES PAGE ==========
function Services() {
  const servicesList = [
    { name: "Auto Parts Supply", description: "Genuine and aftermarket replacement parts for all vehicle makes and models.", icon: "🔧", img: "/images/services/service-1.jpg" },
    { name: "Service Kits", description: "Complete vehicle service kits including all necessary components for routine maintenance.", icon: "🛠️", img: "/images/services/service-2.jpg" },
    { name: "Oil Filters", description: "Premium quality oil filters that trap contaminants and protect your engine.", icon: "⛽", img: "/images/services/service-3.jpg" },
    { name: "Air Filters", description: "High-performance air filters that improve engine efficiency and fuel economy.", icon: "🌬️", img: "/images/services/service-4.jpg" },
    { name: "Fuel Filters", description: "Reliable fuel filters that remove contaminants from your fuel system.", icon: "⛽", img: "/images/services/service-5.jpg" },
    { name: "Brake Pads & Brake Discs", description: "High-quality braking components for safe stopping power.", icon: "🛑", img: "/images/services/service-6.jpg" },
    { name: "Suspension Parts", description: "Complete suspension components including control arms, ball joints, and tie rods.", icon: "🔧", img: "/images/services/service-7.jpg" },
    { name: "Shock Absorbers", description: "Premium shock absorbers and struts for improved handling and ride comfort.", icon: "📏", img: "/images/services/service-8.jpg" },
    { name: "Engine Mountings", description: "Durable engine mounts that reduce vibration and noise.", icon: "🔩", img: "/images/services/service-9.jpg" },
    { name: "Water Pumps", description: "Reliable water pumps for proper engine cooling.", icon: "💧", img: "/images/services/service-10.jpg" },
    { name: "Timing Kits", description: "Complete timing belt and chain kits with tensioners and pulleys.", icon: "⏱️", img: "/images/services/service-11.jpg" },
    { name: "Sensors & Electrical Components", description: "Wide range of automotive sensors and electrical parts.", icon: "⚡", img: "/images/services/service-12.jpg" },
    { name: "Vehicle Service Parts", description: "All essential service parts including spark plugs, belts, and hoses.", icon: "🔧", img: "/images/services/service-13.jpg" },
    { name: "Same-Day Parts Sourcing", description: "Need a part urgently? Our same-day sourcing service finds and delivers quickly.", icon: "🚚", img: "/images/services/service-14.jpg" },
    { name: "Workshop & Trade Supply", description: "Special pricing and dedicated support for workshops and trade customers.", icon: "🏭", img: "/images/services/service-15.jpg" },
    { name: "Delivery Available", description: "Fast and reliable delivery across Johannesburg and surrounding areas.", icon: "📦", img: "/images/services/service-16.jpg" }
  ];

  return (
    <>
      <section className="relative bg-black text-center overflow-hidden" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-[#C00000]/30"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-16 bg-[#C00000]" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Premium Auto <span className="text-[#C00000]">Services</span></h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Quality replacement parts and expert sourcing for all vehicle makes and models. From engine components to brake systems, we have everything you need.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4">Our Complete Range of <span className="text-[#C00000]">Auto Parts</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We supply thousands of quality auto parts for passenger vehicles, bakkies, SUVs, and light commercial vehicles.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesList.map((service, index) => (
              <div key={index} className="group border border-gray-200 rounded-lg overflow-hidden hover:border-[#C00000] hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer bg-white">
                <div className="h-48 overflow-hidden bg-gray-100 relative">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/e5e5e5/666666?text=' + encodeURIComponent(service.name); }} />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3"><span className="text-2xl">{service.icon}</span><h3 className="text-lg font-bold text-black group-hover:text-[#C00000] transition">{service.name}</h3></div>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-16 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6">Quality Auto Parts for Every Vehicle in <span className="text-[#C00000]">South Africa</span></h2>
            <p className="text-gray-600 mb-6 leading-relaxed">At Prime Auto Spares, we understand that your vehicle is essential to your daily life. That's why we stock only the highest quality replacement parts from trusted manufacturers. Whether you need routine maintenance parts like oil filters and brake pads, or more complex components like timing kits and sensors, we have you covered.</p>
            <p className="text-gray-600 mb-6 leading-relaxed">Our extensive inventory includes <strong>engine parts, suspension components, braking systems, filters, electrical parts, and vehicle accessories</strong> for all major vehicle brands. We source our products from reputable manufacturers to ensure reliability, durability, and performance.</p>
            <p className="text-gray-600 leading-relaxed">Serving <strong>Johannesburg, Alberton, Germiston, Boksburg, Roodepoort</strong>, and surrounding areas, Prime Auto Spares offers <strong>same-day parts sourcing, competitive wholesale pricing, and fast delivery</strong> across Gauteng. Our team of auto parts experts is dedicated to helping you find exactly what you need, when you need it.</p>
          </div>
        </div>
      </section>
    </>
  );
}

// ========== CONTACT PAGE ==========
function Contact() {
  const handleSubmit = (e) => { 
    e.preventDefault(); 
    alert('✓ Message received!\n\nA representative from Prime Auto Spares will respond shortly.'); 
    e.target.reset(); 
  };
  
  return (
    <>
      <section className="relative bg-black text-center overflow-hidden" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-[#C00000]/30"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-16 bg-[#C00000]" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact <span className="text-[#C00000]">Us</span></h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Get in touch with our auto parts experts for quotes, sourcing assistance, and professional support. We're here to help keep your vehicle on the road.</p>
        </div>
      </section>
      <section className="py-20 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Looking for a part?</h3>
              <p className="text-gray-600 mb-8">Contact Prime Auto Spares today for instant quotes, fast sourcing, and reliable delivery across Johannesburg and surrounding areas.</p>
              <div className="space-y-6">
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center text-2xl">📞</div>
                  <div><h4 className="font-bold text-black mb-1">Phone / WhatsApp</h4><p className="text-gray-600">066 384 5291</p><a href="tel:0663845291" className="text-[#C00000] text-sm hover:underline">Click to call →</a></div>
                </div>
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center text-2xl">✉️</div>
                  <div><h4 className="font-bold text-black mb-1">Email Address</h4><p className="text-gray-600">sales@primespares.co.za</p><a href="mailto:sales@primespares.co.za" className="text-[#C00000] text-sm hover:underline">Send email →</a></div>
                </div>
                <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                  <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center text-2xl">🕐</div>
                  <div><h4 className="font-bold text-black mb-1">Business Hours</h4><p className="text-gray-600">Monday - Friday: 8:00 - 17:30<br />Saturday: 8:30 - 14:00<br />Sunday: Closed</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#C00000]/10 rounded-lg flex items-center justify-center text-2xl">📍</div>
                  <div><h4 className="font-bold text-black mb-1">Service Center</h4><p className="text-gray-600">Johannesburg, Gauteng<br />South Africa</p></div>
                </div>
              </div>
              <a 
  href="https://wa.me/27663845291" 
  className="block text-center mt-8 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#20b359] transition flex items-center justify-center gap-2" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
  WhatsApp for Instant Quotes
</a>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label><input type="text" placeholder="Enter your full name" required className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:border-[#C00000] focus:outline-none focus:ring-1 focus:ring-[#C00000]" /></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label><input type="email" placeholder="Enter your email address" required className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:border-[#C00000] focus:outline-none focus:ring-1 focus:ring-[#C00000]" /></div>
                <div className="mb-4"><label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label><input type="tel" placeholder="Enter your phone number" required className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:border-[#C00000] focus:outline-none focus:ring-1 focus:ring-[#C00000]" /></div>
                <div className="mb-6"><label className="block text-sm font-medium text-gray-700 mb-2">Vehicle & Part Details</label><textarea rows="5" placeholder="Tell us about your vehicle (make, model, year) and the part you need..." className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:border-[#C00000] focus:outline-none focus:ring-1 focus:ring-[#C00000]"></textarea></div>
                <button type="submit" className="w-full bg-[#C00000] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#7A0000] transition transform hover:-translate-y-0.5">Send Message →</button>
              </form>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-black mb-4">Quality Auto Parts Supplier in Johannesburg</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Prime Auto Spares is your trusted partner for quality replacement auto parts in Johannesburg, Alberton, Germiston, Boksburg, Roodepoort, and surrounding areas. We specialize in sourcing and supplying premium automotive components for passenger vehicles, bakkies, SUVs, and light commercial vehicles.</p>
              <p className="text-gray-600 mb-4 leading-relaxed">Our extensive inventory includes engine parts, brake components, suspension systems, filters, electrical parts, timing kits, water pumps, and much more. Whether you need a routine service kit or a hard-to-find specific part, our team of auto parts experts is ready to assist you.</p>
              <p className="text-gray-600 leading-relaxed">Contact us today for competitive prices, fast sourcing, and reliable delivery across Gauteng. We're committed to keeping South African vehicles on the road with quality parts and exceptional service.</p>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-2xl font-bold text-black mb-6 text-center">Visit Our Service Area</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe title="Prime Auto Spares Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.139177378859!2d28.047235!3d-26.195246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b0b8c4b3f%3A0x2b6d1e6e2b2b6f!2sJohannesburg%20CBD!5e0!3m2!1sen!2sza!4v1710000000000!5m2!1sen!2sza" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy"></iframe>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h4 className="text-xl font-bold text-black mb-3">Why Choose Prime Auto Spares?</h4>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">✓ Same-day parts sourcing</span>
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">✓ Competitive wholesale pricing</span>
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">✓ Quality guaranteed products</span>
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">✓ Fast delivery across Gauteng</span>
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">✓ Expert technical support</span>
                <span className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">✓ Workshop & trade discounts</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// ========== FOOTER ==========
function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Column 1 - Brand */}
          <div>
            <h4 className="text-lg font-bold mb-4 relative inline-block pb-2 after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-[#C00000]">
              Prime Auto Spares
            </h4>
            <p className="text-gray-400 text-sm">Premium automotive parts supplier in South Africa.</p>
          </div>
          
          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-[#C00000] transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#C00000] transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#C00000] transition">Contact</Link></li>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>📞 066 384 5291</li>
              <li>✉️ sales@primespares.co.za</li>
            </ul>
          </div>
          
          {/* Column 4 - Social Media */}
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              
              {/* Facebook - Clickable */}
              <a 
                href="https://www.facebook.com/share/1GiaiJYq7C/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C00000] transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              
              {/* Instagram - Clickable */}
              <a 
                href="https://www.instagram.com/prime_autospares" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#C00000] transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm-4 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
                </svg>
              </a>
              
              {/* Twitter - Not Clickable (Decorative) */}
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-default opacity-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
                </svg>
              </div>
              
              {/* LinkedIn - Not Clickable (Decorative) */}
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center cursor-default opacity-50">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/>
                </svg>
              </div>
              
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-gray-500 text-sm">&copy; 2026 Prime Auto Spares. All Rights Reserved.</p>
          <p className="text-gray-600 text-xs mt-2">
            Designed by <a href="https://inkspiredigitaldesigns.co.za/" target="_blank" rel="noopener noreferrer" className="text-[#C00000] hover:underline transition">Inkspire Digital Designs</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

// Add the keyframes to global styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @keyframes scrollHorizontal {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-scroll-horizontal {
    animation: scrollHorizontal 20s linear infinite;
  }
`;
document.head.appendChild(styleSheet);

// ========== MAIN APP ==========
function App() {
  return (
    <BrowserRouter>
      <TopBanner />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingWhatsApp />
    </BrowserRouter>
  );
}

export default App;