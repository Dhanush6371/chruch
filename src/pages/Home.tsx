import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    setFadeIn(true);

    // Parallax effect for hero
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const heroParallax = document.querySelector('.hero-parallax') as HTMLElement;
      if (heroParallax && scrolled < window.innerHeight) {
        heroParallax.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Scroll animation observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Spiritual Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Golden Sparkles - More on desktop, fewer on mobile */}
        <div className="sparkles-container">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 6}s`,
              }}
            />
          ))}
          {/* Additional sparkles only for desktop */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`desktop-${i}`}
              className="sparkle hidden md:block"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 6}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Mist Effect - Reduced on mobile */}
        <div className="mist-container">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="mist"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${20 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        {/* Divine Glow - Smaller on mobile */}
        <div className="divine-glow" />
        <div className="divine-glow-secondary hidden md:block" />
      </div>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-charcoal via-gray-800 to-charcoal overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 hero-parallax"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/70" />

        {/* Divine Light Glow */}
        <div className="divine-hero-light" />

        {/* Hero Sparkles */}
        <div className="hero-sparkles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={`hero-sparkle-${i}`}
              className="hero-sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Mist at Bottom */}
        <div className="hero-mist" />

        {/* Light Rays from Top */}
        <div className="light-rays">
          <div className="light-ray" style={{ left: '45%', animationDelay: '0s' }} />
          <div className="light-ray" style={{ left: '50%', animationDelay: '1s' }} />
          <div className="light-ray" style={{ left: '55%', animationDelay: '2s' }} />
        </div>

        {/* Content */}
        <div className={`relative z-10 text-center px-6 max-w-5xl mx-auto transition-all duration-1500 ${fadeIn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-white leading-tight mb-10" style={{ lineHeight: '1.3', textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.1)' }}>
            <span className="block mb-5">DEATH TO LIFE.</span>
            <span className="block mb-5">LIFE TO FULLNESS.</span>
            <span className="block">FULLNESS TO MISSION.</span>
          </h1>

          <p className="text-white/95 text-lg max-w-2xl mx-auto mb-14 leading-relaxed font-light" style={{ lineHeight: '1.8', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
            The Way is a church for anyone and everyone in Cardiff. We are shaped by Scripture, led by the Spirit, and committed to following Jesus together in everyday life — at home, at work, and across the city and the nations God has called us to.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/connect"
              className="hero-button-outline px-8 py-3 border-2 border-white text-white rounded hover:bg-gold hover:border-gold hover:text-charcoal transition-all duration-300"
            >
              Plan Your Visit
            </Link>
            <Link
              to="/connect"
              className="hero-button-primary px-8 py-3 bg-gold text-charcoal rounded hover:bg-gold-dark transition-all duration-300 font-medium"
            >
              Connect With Us
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="scroll-indicator">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
            </svg>
          </div>
        </div>
      </section>

      {/* Who We Are + Three Pillars Section - Continuous Background */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-image-hover"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Who We Are */}
        <div className="relative py-16 md:py-28 px-4 md:px-6 min-h-[70vh] md:min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-xs uppercase tracking-widest text-gold font-semibold mb-4 md:mb-6 scroll-animate fade-up">
                  Who We Are
                </h2>
                <p className="text-base md:text-lg leading-relaxed scroll-animate fade-up" style={{ animationDelay: '0.1s' }}>
                  The Way is being formed as a local church with a simple conviction: that Jesus still meets people in the middle of real life, and that the Church is called to walk closely with others through both beauty and brokenness.
                </p>
                <p className="text-base md:text-lg leading-relaxed scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
                  Rooted in Cardiff, we seek to live among the people of this city as witnesses to the way, the truth, and the life of Jesus. The Way is not about building a platform, but about forming a people who walk faithfully with God and with one another for the sake of the world He loves.
                </p>
              </div>

              <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl scroll-animate fade-up" style={{ animationDelay: '0.3s' }}>
                <img
                  src="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Community gathering"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="relative py-16 md:py-28 px-4 md:px-6 bg-white/80 min-h-[70vh] md:min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              {[
                {
                  title: 'Death to Life',
                  description: 'To go from death to life, where grace rewrites the story.',
                  image: 'https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=800',
                },
                {
                  title: 'Life to Fullness',
                  description: 'To grow from life to fullness, where we dive deeper into His glory.',
                  image: 'https://images.pexels.com/photos/3845456/pexels-photo-3845456.jpeg?auto=compress&cs=tinysrgb&w=800',
                },
                {
                  title: 'Fullness to Mission',
                  description: 'To move from fullness to mission, where we make His glory known.',
                  image: 'https://images.pexels.com/photos/3845623/pexels-photo-3845623.jpeg?auto=compress&cs=tinysrgb&w=800',
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="scroll-animate fade-up"
                  style={{
                    animationDelay: `${index * 0.3}s`,
                    transitionDelay: `${index * 0.3}s`
                  }}
                >
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg mb-4 md:mb-6 group">
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
                  </div>
                  <div className="border-2 border-border-light rounded-2xl p-6 md:p-8 hover:border-gold hover:shadow-xl transition-all duration-300 bg-white group">
                    <h3 className="font-serif text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-gold transition-colors">
                      {card.title}
                    </h3>
                    <p className="leading-relaxed text-gray-700 text-sm md:text-base">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section with Background */}
      <section
        className="relative py-40 px-6 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1684032/pexels-photo-1684032.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8 text-white scroll-animate fade-up">
            You are welcome here, whether you come searching, hurting, or hoping.
          </p>
          <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-8 text-white scroll-animate fade-up" style={{ animationDelay: '0.15s' }}>
            You do not need to have all the answers.
          </p>
          <p className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-16 text-white scroll-animate fade-up" style={{ animationDelay: '0.3s' }}>
            You are welcome to come as you are.
          </p>

          <Link
            to="/connect"
            className="inline-block px-10 py-4 bg-gold text-charcoal rounded hover:bg-gold-dark transition-all duration-300 font-medium shadow-xl hover:shadow-2xl hover:scale-105 scroll-animate fade-up"
            style={{ animationDelay: '0.45s' }}
          >
            Connect With Us
          </Link>
        </div>
      </section >

      <style>{`
        /* Hero Section Enhancements */
        .hero-parallax {
          will-change: transform;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* Divine Hero Light */
        .divine-hero-light {
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 40%, transparent 70%);
          border-radius: 50%;
          animation: divine-pulse 6s ease-in-out infinite;
          pointer-events: none;
        }

        @media (max-width: 768px) {
          .divine-hero-light {
            width: 500px;
            height: 500px;
          }
        }

        @keyframes divine-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        /* Hero Sparkles */
        .hero-sparkles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .hero-sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(212, 175, 55, 1) 0%, rgba(212, 175, 55, 0.6) 40%, transparent 70%);
          border-radius: 50%;
          animation: hero-float linear infinite;
          opacity: 0;
          box-shadow: 0 0 8px rgba(212, 175, 55, 0.8);
        }

        @keyframes hero-float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-20vh) scale(1.5);
            opacity: 0;
          }
        }

        /* Hero Mist */
        .hero-mist {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(to top, rgba(212, 175, 55, 0.03), transparent);
          filter: blur(40px);
          animation: mist-float 8s ease-in-out infinite;
        }

        @keyframes mist-float {
          0%, 100% {
            opacity: 0.5;
            transform: translateY(0);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-20px);
          }
        }

        /* Light Rays */
        .light-rays {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .light-ray {
          position: absolute;
          top: -50%;
          width: 2px;
          height: 50%;
          background: linear-gradient(to bottom, rgba(212, 175, 55, 0.3), transparent);
          filter: blur(2px);
          animation: ray-shine 8s ease-in-out infinite;
          transform-origin: top center;
        }

        @keyframes ray-shine {
          0%, 100% {
            opacity: 0.3;
            height: 40%;
          }
          50% {
            opacity: 0.6;
            height: 60%;
          }
        }

        /* Hero Buttons */
        .hero-button-outline {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transform: translateY(0);
        }

        .hero-button-outline:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3);
        }

        .hero-button-primary {
          box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
          transform: translateY(0);
        }

        .hero-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(212, 175, 55, 0.5);
        }

        /* Scroll Indicator */
        .scroll-indicator {
          animation: bounce-scroll 2s ease-in-out infinite;
          cursor: pointer;
          opacity: 0.8;
          transition: opacity 0.3s;
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        @keyframes bounce-scroll {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }

        /* Background Image Hover Effect */
        .bg-image-hover {
          transition: all 0.8s ease-in-out;
        }

        section:hover .bg-image-hover {
          transform: scale(1.05) rotate(0.5deg);
          opacity: 0.25;
        }

        /* Scroll Animations */
        .scroll-animate {
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity;
        }

        .scroll-animate.animate-in {
          opacity: 1;
        }

        .fade-up {
          transform: translateY(50px);
        }

        .fade-up.animate-in {
          transform: translateY(0);
        }

        .slide-left {
          transform: translateX(50px);
        }

        .slide-left.animate-in {
          transform: translateX(0);
        }

        /* Spiritual Background Animation */
        .sparkles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .sparkle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.9) 0%, rgba(212, 175, 55, 0.4) 40%, transparent 70%);
          border-radius: 50%;
          animation: float-up linear infinite;
          opacity: 0;
          box-shadow: 0 0 4px rgba(212, 175, 55, 0.5);
        }

        @media (min-width: 768px) {
          .sparkle {
            width: 4px;
            height: 4px;
            box-shadow: 0 0 6px rgba(212, 175, 55, 0.5);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          5% {
            opacity: 0.7;
          }
          50% {
            opacity: 0.8;
          }
          95% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-10vh) scale(1.2);
            opacity: 0;
          }
        }

        /* Floating Mist Effect */
        .mist-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .mist {
          position: absolute;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          animation: float-mist ease-in-out infinite;
          opacity: 0;
          filter: blur(30px);
        }

        @media (min-width: 768px) {
          .mist {
            width: 400px;
            height: 400px;
            filter: blur(40px);
          }
        }

        @keyframes float-mist {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          50% {
            transform: translate(50px, -100px) scale(1.3);
            opacity: 0.4;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            transform: translate(0, -200px) scale(1);
            opacity: 0;
          }
        }

        /* Divine Glow Effects */
        .divine-glow {
          position: absolute;
          top: -30%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse-glow 10s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .divine-glow {
            width: 1000px;
            height: 1000px;
          }
        }

        .divine-glow-secondary {
          position: absolute;
          bottom: -30%;
          left: 30%;
          transform: translateX(-50%);
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse-glow-secondary 12s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.6;
            transform: translateX(-50%) scale(1.15);
          }
        }

        @keyframes pulse-glow-secondary {
          0%, 100% {
            opacity: 0.3;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.5;
            transform: translateX(-50%) scale(1.2);
          }
        }
      `}</style>
    </div >
  );
}
