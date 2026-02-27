import { useState, FormEvent, useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';

export default function Connect() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    joinGathering: false,
    receiveUpdates: false,
    explorePartnership: false,
    prayerRequest: false,
  });

  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: '',
        joinGathering: false,
        receiveUpdates: false,
        explorePartnership: false,
        prayerRequest: false,
      });
      setSubmitted(false);
    }, 3000);
  };

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
        title="Connect"
        subtitle="The Way is being formed through relationship, shared life, and simple steps of obedience."
        backgroundImage="https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg md:text-xl leading-relaxed scroll-animate fade-up">
                The Way is being formed through relationship, shared life, and simple steps of obedience. Whether you are exploring faith, returning to church, or sensing a desire to walk with us in this season, we would love to hear from you.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 scroll-animate fade-up" style={{ animationDelay: '0.1s' }}>
                You don't need to have all the answers. You don't need to commit to anything. If you are curious, interested, or would like to journey with us as The Way is being formed, you are welcome here.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
                We believe God often meets people not through pressure, but through presence.
              </p>
            </div>

            <div className="lg:col-span-2 scroll-animate fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl p-6 md:p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg
                        className="w-8 h-8 text-gold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-serif text-2xl mb-2">Thank You</h3>
                    <p className="text-gray-600">We'll be in touch soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full border-b-2 border-border-light focus:border-gold outline-none py-2 transition-colors bg-transparent"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full border-b-2 border-border-light focus:border-gold outline-none py-2 transition-colors bg-transparent"
                      />
                    </div>

                    <div>
                      <textarea
                        placeholder="Message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full border-b-2 border-border-light focus:border-gold outline-none py-2 transition-colors bg-transparent resize-none"
                      />
                    </div>

                    <div className="space-y-3 pt-4">
                      {[
                        { key: 'joinGathering', label: 'Join a gathering' },
                        { key: 'receiveUpdates', label: 'Receive updates' },
                        { key: 'explorePartnership', label: 'Explore partnership' },
                        { key: 'prayerRequest', label: 'Prayer request' },
                      ].map((option) => (
                        <label key={option.key} className="flex items-center cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={formData[option.key as keyof typeof formData] as boolean}
                            onChange={(e) =>
                              setFormData({ ...formData, [option.key]: e.target.checked })
                            }
                            className="w-5 h-5 rounded border-2 border-border-light text-gold focus:ring-gold focus:ring-offset-0"
                          />
                          <span className="ml-3 group-hover:text-gold transition-colors text-sm md:text-base">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gold text-charcoal rounded font-medium hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
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
