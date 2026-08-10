import React from 'react';
import { Link } from 'react-router-dom';

function AffordableParts() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-black text-center overflow-hidden" style={{ paddingTop: '160px', paddingBottom: '80px' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-[#C00000]/30"></div>
        <div className="absolute bottom-0 right-0 w-[30%] h-16 bg-[#C00000]" style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}></div>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Affordable Spare Parts in <span className="text-[#C00000]">Johannesburg</span></h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Quality auto parts at competitive prices. We source and supply affordable replacement parts for all vehicle makes and models across Johannesburg and surrounding areas.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-6 text-center">
              Quality <span className="text-[#C00000]">Affordable</span> Auto Parts
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Prime Auto Spares, we believe that quality auto parts shouldn't break the bank. We supply premium replacement parts at competitive prices, making us a trusted choice for affordable spare parts in Johannesburg.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Whether you need <strong>engine components, brake pads, suspension parts, or electrical components</strong>, we offer quality products at prices that fit your budget.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our affordable spare parts range covers passenger vehicles, bakkies, SUVs, and light commercial vehicles. We source from reputable manufacturers to ensure reliability and performance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">💰</div>
                <h3 className="font-bold text-black text-lg mb-2">Best Prices</h3>
                <p className="text-gray-500 text-sm">Competitive pricing on all auto parts</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">🔧</div>
                <h3 className="font-bold text-black text-lg mb-2">Quality Guaranteed</h3>
                <p className="text-gray-500 text-sm">Premium parts from trusted manufacturers</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">🚚</div>
                <h3 className="font-bold text-black text-lg mb-2">Fast Delivery</h3>
                <p className="text-gray-500 text-sm">Same-day delivery across Johannesburg</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-8 text-center">
              Frequently Asked <span className="text-[#C00000]">Questions</span>
            </h2>
            <div className="space-y-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-black text-lg mb-2">Where can I find affordable spare parts in Johannesburg?</h3>
                <p className="text-gray-600">Prime Auto Spares offers quality affordable spare parts across Johannesburg, Alberton, Germiston, Boksburg, and Roodepoort.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-black text-lg mb-2">What is the cheapest auto parts shop near me?</h3>
                <p className="text-gray-600">Prime Auto Spares provides competitive pricing on all auto parts. Contact us for a quote on your specific parts.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-black text-lg mb-2">Do you offer same-day delivery?</h3>
                <p className="text-gray-600">Yes, we offer fast and reliable delivery across Johannesburg and surrounding areas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AffordableParts;