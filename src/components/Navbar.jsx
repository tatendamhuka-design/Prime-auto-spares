import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black z-50 border-b border-white/10">
      <div className="container-custom">
        <nav className="flex justify-between items-center py-5">
          <Link to="/" className="text-2xl md:text-3xl font-extrabold text-white">
            PRIME <span className="text-primary">AUTO</span> SPARES
            <small className="block text-[9px] font-normal text-silver tracking-wide">Premium Parts SA</small>
          </Link>

          <div className={`flex flex-col fixed top-20 left-0 w-full bg-black h-[calc(100vh-80px)] transition-all duration-300 md:static md:flex-row md:bg-transparent md:h-auto md:w-auto gap-8 md:gap-10 items-center justify-center md:justify-start z-40 ${mobileMenuOpen ? 'left-0' : '-left-full md:left-auto'}`}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-white font-semibold hover:text-primary transition-colors ${location.pathname === link.path ? 'text-primary' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/27663845291"
              className="bg-[#25D366] text-white px-6 py-2 rounded hover:bg-[#20b359] transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              📱 WhatsApp
            </a>
          </div>

          <button
            className="flex flex-col gap-1.5 md:hidden z-50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;