import { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'בית', href: '#home' },
    { name: 'עלינו', href: '#about' },
    { name: 'שירותים', href: '#services' },
    { name: 'לפני ואחרי', href: '#gallery' },
    { name: 'שאלות נפוצות', href: '#faq' },
    { name: 'צור קשר', href: '#contact' },
  ];

  return (
    <nav className={`w-full z-50 transition-all duration-300 absolute md:fixed ${isScrolled ? 'md:bg-primary-dark/95 md:backdrop-blur-sm shadow-lg py-3 bg-primary-dark/95' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between md:justify-center items-center">
          
          {/* Logo */}
          <div className="flex-1 flex justify-start items-center z-50 relative">
            <div className="flex flex-col md:flex-row items-center md:gap-2 mt-1 md:mt-0">
              <img src="./logo.png" alt="ב.י שיפוצים - לוגו" className="h-10 md:h-12 w-auto object-contain" />
              <span className="text-[11px] md:text-xl font-bold text-white whitespace-nowrap leading-none mt-1 md:mt-0">
                ב.י שיפוצים
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-none items-center justify-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-accent font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to Action & Mobile Menu Button Wrapper */}
          <div className="flex-1 flex justify-end items-center">
            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <a 
                href="tel:0539211640" 
                className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 transition-all shadow-md hover:shadow-lg whitespace-nowrap"
              >
                <span>חייגו עכשיו</span>
                <Phone size={18} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center z-50 relative">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 bg-primary-dark transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
          {navLinks
            .map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white font-medium hover:text-accent"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
