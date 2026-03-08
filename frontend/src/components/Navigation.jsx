import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="bg-black/40 backdrop-blur-md border-b border-pink-500/20">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">
                <span className="text-white">Hum </span>
                <span className="text-pink-500">Aur </span>
                <span className="text-white">Zindagi </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-white hover:text-pink-500 transition-colors duration-300 font-medium"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white hover:text-pink-500 transition-colors duration-300 font-medium"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-white hover:text-pink-500 transition-colors duration-300 font-medium"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white hover:text-pink-500 transition-colors duration-300 font-medium"
                >
                  Contact
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden text-white hover:text-pink-500 transition-colors"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-pink-500/20">
            <div className="px-6 py-4 flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-pink-500 transition-colors duration-300 font-medium text-left py-2"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-white hover:text-pink-500 transition-colors duration-300 font-medium text-left py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="text-white hover:text-pink-500 transition-colors duration-300 font-medium text-left py-2"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-pink-500 transition-colors duration-300 font-medium text-left py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
