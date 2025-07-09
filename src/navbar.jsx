import React, { useState } from 'react';

// 1. Impor komponen dan ikon dari Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Tentang", href: "/about" },
    { title: "Layanan", href: "/services" },
    { title: "Kontak", href: "/contact" },
  ];

  return (
    <nav className="bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-2xl font-bold">
              LogoWeb
            </a>
          </div>

          {/* Menu Desktop */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Tombol Menu Mobile */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Buka menu</span>
              {/* 3. Ganti ikon lucide dengan FontAwesomeIcon */}
              {isOpen ? (
                <FontAwesomeIcon icon={faXmark} className="h-6 w-6" />
              ) : (
                <FontAwesomeIcon icon={faBars} className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Daftar Link Mobile */}
      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;  