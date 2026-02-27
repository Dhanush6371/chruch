import { Instagram, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-charcoal via-gray-900 to-charcoal text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl md:text-3xl font-light tracking-wide text-gold mb-4">
              THE WAY
            </h3>
            <p className="text-white/80 text-sm md:text-base leading-relaxed">
              A church for anyone and everyone in Cardiff, shaped by Scripture and led by the Spirit.
            </p>
            <div className="flex items-center space-x-2 text-white/70">
              <MapPin size={18} className="text-gold" />
              <span className="text-sm">Cardiff, Wales</span>
            </div>
          </div>

          {/* Sunday Gathering */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
              Sunday Gathering
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-white/80">
                <Clock size={18} className="text-gold" />
                <span className="text-sm md:text-base">11:00 AM</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                Location to be announced
              </p>
            </div>
            <Link
              to="/connect"
              className="inline-block mt-4 px-6 py-2 border border-gold text-gold text-sm rounded hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              Plan Your Visit
            </Link>
          </div>

          {/* Quick Links & Social */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4">
              Connect
            </h4>
            <nav className="space-y-2">
              <Link to="/story" className="block text-sm text-white/80 hover:text-gold transition-colors">
                Our Story
              </Link>
              <Link to="/belief" className="block text-sm text-white/80 hover:text-gold transition-colors">
                What We Believe
              </Link>
              <Link to="/team" className="block text-sm text-white/80 hover:text-gold transition-colors">
                Our Team
              </Link>
              <Link to="/give" className="block text-sm text-white/80 hover:text-gold transition-colors">
                Give
              </Link>
            </nav>
            <div className="pt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-gold hover:text-charcoal transition-all duration-300"
                aria-label="Follow us on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-white/50">
              © {new Date().getFullYear()} The Way Church. All rights reserved.
            </p>
            <p className="text-xs text-white/50">
              Death to Life. Life to Fullness. Fullness to Mission.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
