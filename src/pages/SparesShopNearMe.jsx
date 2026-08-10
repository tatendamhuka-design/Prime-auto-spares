import React from 'react';
import { Link } from 'react-router-dom';

function SparesShopNearMe() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-center overflow-hidden" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-[#C00000]/30"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-16 bg-[#C00000]" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Spares Shop <span className="text-[#C00000]">Near Me</span></h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Looking for a reliable spares shop near you? Prime Auto Spares supplies quality auto parts in Johannesburg, Alberton, Germiston, Boksburg, and Roodepoort.
          </p>
        </div>
      </section>

      {/* Location Grid */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 text-center">
            Find a Spares Shop <span className="text-[#C00000]">Near You</span>
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
            We serve customers across Johannesburg and surrounding areas. Find your location below and contact us for quality auto parts.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Johannesburg", icon: "🏙️", description: "Quality auto parts in Johannesburg CBD and surrounding suburbs" },
              { name: "Alberton", icon: "🏘️", description: "Affordable spare parts delivered to Alberton and nearby areas" },
              { name: "Germiston", icon: "🏭", description: "Reliable auto parts supply in Germiston" },
              { name: "Boksburg", icon: "🚗", description: "Same-day parts delivery in Boksburg" },
              { name: "Roodepoort", icon: "🌳", description: "Competitive pricing on auto parts in Roodepoort" },
              { name: "Surrounding Areas", icon: "📍", description: "We deliver across Gauteng and surrounding areas" }
            ].map((location, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg hover:border-[#C00000] border-2 border-transparent transition">
                <div className="text-4xl mb-3">{location.icon}</div>
                <h3 className="font-bold text-black text-lg mb-2">{location.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{location.description}</p>
                <a href="tel:0663845291" className="text-[#C00000] font-semibold text-sm hover:underline">📞 Call for Parts</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#C00000] to-[#7A0000] py-12">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">Need a Spares Shop Near You?</h2>
          <p className="text-white/90 text-lg mb-6">Contact Prime Auto Spares for quality parts and fast delivery</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0663845291" className="bg-white text-[#C00000] px-8 py-3 rounded font-bold hover:bg-gray-100 transition inline-block">📞 Call Now</a>
            <a href="https://wa.me/27663845291" className="border-2 border-white text-white px-8 py-3 rounded font-bold hover:bg-white hover:text-[#C00000] transition inline-block">💬 WhatsApp Us</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default SparesShopNearMe;