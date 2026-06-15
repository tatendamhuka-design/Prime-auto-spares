import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="min-h-screen flex items-center relative bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-primary/20 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[35%] h-20 bg-primary clip-path-diagonal z-10"></div>
      
      <div className="container-custom relative z-20">
        <div className="max-w-2xl">
          <div className="inline-block bg-primary text-white px-5 py-1.5 text-xs font-bold tracking-wider mb-8 clip-path-badge">
            PREMIER AUTO PARTS SUPPLIER
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            QUALITY AUTO PARTS.<br />
            <span className="text-primary">FAST SOURCING.</span><br />
            RELIABLE SERVICE.
          </h1>
          
          <p className="text-white/80 text-lg mb-8 max-w-lg">
            Prime Auto Spares supplies quality replacement parts for passenger vehicles,
            bakkies and light commercial vehicles across Johannesburg and surrounding areas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/contact" className="btn-primary text-center">Get a Quote →</Link>
            <a href="https://wa.me/27663845291" className="btn-outline text-center" target="_blank" rel="noopener noreferrer">
              WhatsApp Us →
            </a>
          </div>
          
          <div className="flex gap-12 pt-6 border-t border-white/20">
            <div>
              <h3 className="text-primary text-2xl md:text-3xl font-bold">5000+</h3>
              <p className="text-silver text-xs uppercase tracking-wide">Parts Available</p>
            </div>
            <div>
              <h3 className="text-primary text-2xl md:text-3xl font-bold">24/7</h3>
              <p className="text-silver text-xs uppercase tracking-wide">Support</p>
            </div>
            <div>
              <h3 className="text-primary text-2xl md:text-3xl font-bold">Same-Day</h3>
              <p className="text-silver text-xs uppercase tracking-wide">Delivery</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;