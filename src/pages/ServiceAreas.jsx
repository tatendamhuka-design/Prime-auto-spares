import React from 'react';
import { Link } from 'react-router-dom';

function ServiceAreasPage() {
  const areas = [
    { name: "Johannesburg", description: "Auto parts supply in Johannesburg CBD and surrounding suburbs", slug: "johannesburg" },
    { name: "Alberton", description: "Quality spare parts delivered to Alberton", slug: "alberton" },
    { name: "Germiston", description: "Reliable auto parts supply in Germiston", slug: "germiston" },
    { name: "Boksburg", description: "Same-day parts delivery in Boksburg", slug: "boksburg" },
    { name: "Roodepoort", description: "Competitive pricing on auto parts in Roodepoort", slug: "roodepoort" },
    { name: "Benoni", description: "Affordable spare parts in Benoni", slug: "benoni" },
    { name: "Kempton Park", description: "Quality auto parts in Kempton Park", slug: "kempton-park" },
    { name: "Edenvale", description: "Fast parts delivery in Edenvale", slug: "edenvale" }
  ];

  return (
    <>
      <section className="relative bg-black text-center overflow-hidden" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-[#C00000]/30"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-16 bg-[#C00000]" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Auto Parts Supplier in <span className="text-[#C00000]">Johannesburg</span></h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Prime Auto Spares is your trusted auto parts supplier across Johannesburg, Alberton, Germiston, Boksburg, Roodepoort, and surrounding areas.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 text-center">
            Our Service <span className="text-[#C00000]">Areas</span>
          </h2>
          <p className="text-gray-600 text-lg text-center max-w-2xl mx-auto mb-12">
            We supply quality auto parts to customers across Johannesburg and surrounding areas. Contact us for fast delivery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {areas.map((area, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg hover:border-[#C00000] border-2 border-transparent transition">
                <div className="text-4xl mb-3">📍</div>
                <h3 className="font-bold text-black text-lg mb-2">{area.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{area.description}</p>
                <a href="https://wa.me/27663845291" className="text-[#C00000] font-semibold text-sm hover:underline" target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-black mb-4">Why Choose Prime Auto Spares?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm"><span className="text-2xl">✓</span><p className="font-semibold text-sm mt-1">Quality Parts</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm"><span className="text-2xl">✓</span><p className="font-semibold text-sm mt-1">Affordable Prices</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm"><span className="text-2xl">✓</span><p className="font-semibold text-sm mt-1">Fast Delivery</p></div>
              <div className="bg-white p-4 rounded-lg shadow-sm"><span className="text-2xl">✓</span><p className="font-semibold text-sm mt-1">24/7 Support</p></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceAreasPage;