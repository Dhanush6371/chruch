import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';

export default function Serve() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
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

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
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
        </div>
        <div className="divine-glow" />
      </div>

      <PageHero
        title="Serve"
        subtitle="Serving is one of the primary ways people grow, belong, and participate in the life of the Church."
        backgroundImage="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-lg md:text-xl leading-relaxed scroll-animate fade-up">
            Serving is one of the primary ways people grow, belong, and participate in the life of the Church. God has intentionally placed gifts within each person, not for individual recognition, but for the strengthening of the whole body.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-gray-700 scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
            As we serve one another, faith is formed, relationships deepen, and the life of Christ is made visible through ordinary acts of love and faithfulness.
          </p>

          <div className="pt-8 scroll-animate fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-gold italic mb-8 text-base md:text-lg">
              "All of you together are Christ's body, and each of you is a part of it." — 1 Corinthians 12:27
            </p>
          </div>

          <Link
            to="/connect"
            className="inline-block px-8 py-3 border-2 border-gold text-gold rounded hover:bg-gold hover:text-charcoal transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:scale-105 scroll-animate fade-up"
            style={{ animationDelay: '0.4s' }}
          >
            Explore Serving
          </Link>
        </div>
      </section>

      <style>{`
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
      `}</style>
    </div>
  );
}
