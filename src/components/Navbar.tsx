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
        { to: '/story', label: 'Story' },
        { to: '/belief', label: 'Belief' },
        { to: '/team', label: 'Team' },
        { to: '/serve', label: 'Serve' },
        { to: '/give', label: 'Give' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50">
                {/* Animated Background */}
                <div className={`absolute inset-0 transition-all duration-700 ${scrolled || !isHome
                        ? 'bg-white/80'
                        : 'bg-gradient-to-b from-black/60 via-black/30 to-transparent'
                    }`}>
                    <div className="absolute inset-0 backdrop-blur-xl" />

                    {/* Animated Border */}
                    <div className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-700 ${scrolled || !isHome
                            ? 'bg-gradient-to-r from-transparent via-gold/30 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-white/20 to-transparent'
                        }`}>
                        <div className="nav-shimmer" />
                    </div>

                    {/* Floating Particles */}
                    <div className="nav-particles">
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="nav-particle"
                                style={{
                                    left: `${15 + i * 15}%`,
                                    animationDelay: `${i * 0.8}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24 md:h-28">
                        {/* Logo with Glow Effect */}
                        <Link
                            to="/"
                            className="relative group z-10"
                        >
                            <div className="logo-glow" />
                            <span className={`relative font-serif text-xl md:text-2xl font-light tracking-[0.3em] transition-all duration-500 ${scrolled || !isHome ? 'text-charcoal' : 'text-white'
                                }`}>
                                THE WAY
                            </span>
                            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-2 relative z-10">
                            {navLinks.map((link, index) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    className="nav-link-wrapper"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <span className={`nav-link ${scrolled || !isHome
                                            ? isActive(link.to)
                                                ? 'text-gold'
                                                : 'text-charcoal'
                                            : isActive(link.to)
                                                ? 'text-gold'
                                                : 'text-white/95'
                                        }`}>
                                        {link.label}
                                        {isActive(link.to) && <span className="nav-active-dot" />}
                                    </span>
                                    <span className="nav-link-bg" />
                                </Link>
                            ))}

                            {/* Premium Connect Button */}
                            <Link
                                to="/connect"
                                className="connect-button ml-6"
                            >
                                <span className="connect-button-bg" />
                                <span className="connect-button-border" />
                                <span className="connect-button-text">Connect</span>
                                <span className="connect-button-glow" />
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={`lg:hidden p-3 rounded-xl transition-all duration-300 relative z-10 ${scrolled || !isHome
                                    ? 'text-charcoal hover:bg-gray-100'
                                    : 'text-white hover:bg-white/10'
                                }`}
                            aria-label="Toggle menu"
                        >
                            <div className="relative">
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Premium Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-all duration-700 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Animated Backdrop */}
                <div className="absolute inset-0 bg-charcoal/98 backdrop-blur-2xl">
                    {/* Radial Gradient */}
                    <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent" />

                    {/* Animated Grid */}
                    <div className="mobile-grid" />

                    {/* Floating Sparkles */}
                    <div className="mobile-sparkles">
                        {[...Array(15)].map((_, i) => (
                            <div
                                key={i}
                                className="mobile-sparkle"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 4}s`,
                                    animationDuration: `${4 + Math.random() * 3}s`,
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* Menu Content */}
                <div className={`relative h-full flex flex-col items-center justify-center px-6 transition-all duration-700 ${mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                    {/* Logo at Top */}
                    <div className="absolute top-28 left-1/2 transform -translate-x-1/2">
                        <div className="text-gold/30 text-xs tracking-[0.3em] font-light">NAVIGATION</div>
                    </div>

                    {/* Navigation Links */}
                    <div className="space-y-1 mb-12">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className="mobile-nav-link"
                                style={{
                                    animationDelay: `${index * 0.1 + 0.2}s`,
                                    animation: mobileMenuOpen ? 'mobileSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                                }}
                            >
                                <span className={`mobile-nav-text ${isActive(link.to) ? 'active' : ''}`}>
                                    {link.label}
                                </span>
                                {isActive(link.to) && (
                                    <span className="mobile-nav-indicator" />
                                )}
                            </Link>
                        ))}
                    </div>

                    {/* Connect Button */}
                    <Link
                        to="/connect"
                        className="mobile-connect-button"
                        style={{
                            animationDelay: `${navLinks.length * 0.1 + 0.3}s`,
                            animation: mobileMenuOpen ? 'mobileSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
                        }}
                    >
                        <span className="mobile-connect-bg" />
                        <span className="mobile-connect-text">Connect With Us</span>
                    </Link>

                    {/* Decorative Elements */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex items-center space-x-3">
                        <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold/50" />
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/50" />
                        <div className="w-8 h-px bg-gradient-to-l from-transparent to-gold/50" />
                    </div>
                </div>
            </div>

            <style>{`
        .nav-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6), transparent);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .nav-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .nav-particle {
          position: absolute;
          top: 50%;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.8), transparent);
          border-radius: 50%;
          animation: particleFloat 4s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) scale(0.8);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }

        .logo-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15), transparent 70%);
          opacity: 0;
          transition: opacity 0.5s;
          filter: blur(20px);
        }

        .group:hover .logo-glow {
          opacity: 1;
        }

        .nav-link-wrapper {
          position: relative;
          padding: 0.75rem 1.25rem;
          overflow: hidden;
          border-radius: 0.75rem;
        }

        .nav-link {
          position: relative;
          z-index: 2;
          font-size: 0.875rem;
          font-weight: 500;
          letter-spacing: 0.05em;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .nav-link-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05));
          opacity: 0;
          transition: opacity 0.4s;
          border-radius: 0.75rem;
        }

        .nav-link-wrapper:hover .nav-link-bg {
          opacity: 1;
        }

        .nav-active-dot {
          width: 4px;
          height: 4px;
          background: #D4AF37;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.6);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }

        .connect-button {
          position: relative;
          padding: 0.75rem 2rem;
          overflow: hidden;
          border-radius: 9999px;
          transition: transform 0.3s;
        }

        .connect-button:hover {
          transform: translateY(-2px);
        }

        .connect-button-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #D4AF37, #C9A961);
          transition: transform 0.5s;
        }

        .connect-button:hover .connect-button-bg {
          transform: scale(1.05);
        }

        .connect-button-border {
          position: absolute;
          inset: -2px;
          background: linear-gradient(135deg, #D4AF37, #E8D4A0, #D4AF37);
          border-radius: 9999px;
          opacity: 0;
          transition: opacity 0.5s;
          filter: blur(4px);
        }

        .connect-button:hover .connect-button-border {
          opacity: 0.6;
        }

        .connect-button-text {
          position: relative;
          z-index: 2;
          color: #1a1a1a;
          font-size: 0.875rem;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .connect-button-glow {
          position: absolute;
          inset: -20px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.4), transparent 70%);
          opacity: 0;
          transition: opacity 0.5s;
          filter: blur(20px);
        }

        .connect-button:hover .connect-button-glow {
          opacity: 1;
        }

        @keyframes mobileSlideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .mobile-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        .mobile-sparkles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .mobile-sparkle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, rgba(212, 175, 55, 1), transparent);
          border-radius: 50%;
          animation: sparkleFloat ease-in-out infinite;
        }

        @keyframes sparkleFloat {
          0%, 100% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(20px, -30px) scale(1.5);
            opacity: 1;
          }
        }

        .mobile-nav-link {
          position: relative;
          display: block;
          padding: 1rem 2rem;
          opacity: 0;
        }

        .mobile-nav-text {
          font-family: serif;
          font-size: 2rem;
          font-weight: 300;
          letter-spacing: 0.05em;
          color: white;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
        }

        .mobile-nav-text.active {
          color: #D4AF37;
          transform: scale(1.1);
        }

        .mobile-nav-link:hover .mobile-nav-text {
          color: #D4AF37;
          transform: translateX(10px);
        }

        .mobile-nav-indicator {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 4px;
          height: 40%;
          background: linear-gradient(to bottom, transparent, #D4AF37, transparent);
          border-radius: 2px;
          animation: indicatorPulse 2s ease-in-out infinite;
        }

        @keyframes indicatorPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .mobile-connect-button {
          position: relative;
          padding: 1.25rem 3rem;
          border-radius: 9999px;
          overflow: hidden;
          opacity: 0;
        }

        .mobile-connect-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #D4AF37, #E8D4A0);
          transition: transform 0.5s;
        }

        .mobile-connect-button:hover .mobile-connect-bg {
          transform: scale(1.1) rotate(5deg);
        }

        .mobile-connect-text {
          position: relative;
          z-index: 2;
          color: #1a1a1a;
          font-size: 1.125rem;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        @media (min-width: 768px) {
          .mobile-nav-text {
            font-size: 2.5rem;
          }
        }
      `}</style>
        </>
    );
}
