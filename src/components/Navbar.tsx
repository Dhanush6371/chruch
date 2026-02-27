import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === '/';

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/story', label: 'The Story' },
    { to: '/team', label: 'The Team' },
    { to: '/belief', label: 'The Belief' },
    { to: '/connect', label: 'Connect' },
  ];

  const secondaryLinks = [
    { to: '/serve', label: 'Serve' },
    { to: '/give', label: 'Give' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="font-serif text-2xl font-semibold tracking-wide">
              THE WAY
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm font-medium tracking-wide hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/connect"
                className="px-6 py-2 bg-gold text-charcoal text-sm font-medium rounded hover:bg-gold-dark transition-colors"
              >
                Gather With Us
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="absolute top-20 left-0 right-0 bg-white shadow-lg">
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-lg font-medium tracking-wide hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-border-light pt-6 space-y-4">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="block text-sm tracking-wide hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
