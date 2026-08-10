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
          
          {/* Column 2 - Quick Links + SEO Pages */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/" className="hover:text-[#C00000] transition">Home</Link></li>
              <li><Link to="/services" className="hover:text-[#C00000] transition">Services</Link></li>
              <li><Link to="/contact" className="hover:text-[#C00000] transition">Contact</Link></li>
              {/* SEO Pages - Footer only */}
              <li><Link to="/affordable-spare-parts-johannesburg" className="hover:text-[#C00000] transition">Affordable Spare Parts</Link></li>
              <li><Link to="/spares-shop-near-me" className="hover:text-[#C00000] transition">Spares Shop Near Me</Link></li>
              <li><Link to="/service-areas" className="hover:text-[#C00000] transition">Service Areas</Link></li>
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