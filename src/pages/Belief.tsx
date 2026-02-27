import { useState, useEffect, useRef } from 'react';
import { Plus, Minus } from 'lucide-react';
import PageHero from '../components/PageHero';

export default function Belief() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const beliefs = [
    {
      title: 'The Scriptures',
      content:
        'We believe in the scriptures of the Old and New Testaments in their original writing as fully inspired by God, and accept them as the final authority for faith and life.',
    },
    {
      title: 'The Godhead',
      content:
        'We believe in one God eternally existing in a loving unity of three persons—Father, Son and Holy Spirit; co-eternal in being, co-eternal in nature, co-equal in power and glory, and having the same attributes and perfections.',
    },
    {
      title: 'The Person & Work of Jesus Christ',
      content:
        'We believe that Jesus Christ is God incarnate, fully God and fully man, one person in two natures. He was conceived by the Holy Spirit, born of the virgin Mary, lived a sinless life, died as our substitute, rose bodily, ascended, and now reigns as Lord. His atoning death and victorious resurrection constitute the only grounds for salvation.',
    },
    {
      title: 'The Holy Spirit',
      content:
        'We believe that the Holy Spirit glorifies Christ, convicts the world, regenerates sinners, and indwells, illuminates, guides, equips, and empowers believers for Christlike living and service.',
    },
    {
      title: 'The Fall & Salvation of Man',
      content:
        'We believe that God created man in His image, that man sinned and thereby incurred physical and spiritual death. All human beings inherit a sinful nature and are unable to remedy their lost condition. Salvation is offered freely by grace through faith to all who repent and believe. All who are redeemed are kept by God\'s power and secure in Christ forever.',
    },
    {
      title: 'The Church',
      content:
        'We believe that the true church comprises all who have been justified by grace through faith alone in Christ alone, united by the Holy Spirit in the body of Christ. The true church is manifest in local churches composed of believers, who model the New Testament pattern. The Lord mandated two ordinances—baptism and the Lord\'s Supper—which visibly express the gospel and nourish the believer.',
    },
    {
      title: 'Christian Living',
      content:
        'We believe that the ascended Christ gave ministries to the church to bring believers to maturity. God\'s justifying grace must not be separated from His sanctifying power. We are called to love God supremely, love others sacrificially, and live out our faith with care for one another, compassion for the poor, and justice for the oppressed.',
    },
    {
      title: 'The End of All Things',
      content:
        'We believe in the personal return of our Lord Jesus Christ in power and glory. God will raise the dead bodily and judge the world—the unbeliever to eternal conscious punishment, the believer to eternal blessedness and joy with the Lord in the new heaven and new earth.',
    },
  ];

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
        title="What We Believe"
        subtitle="These are the core convictions that shape who we are and how we live as followers of Jesus."
        backgroundImage="https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="border-2 border-border-light rounded-xl overflow-hidden bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 scroll-animate fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-serif text-lg md:text-xl text-left">{belief.title}</h3>
                  <div className="flex-shrink-0 ml-4 text-gold">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96' : 'max-h-0'
                    }`}
                >
                  <div className="px-6 md:px-8 pb-6 pt-2">
                    <p className="leading-relaxed text-gray-700 text-sm md:text-base">{belief.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl scroll-animate fade-up">
            <img
              src="https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Open Bible"
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent" />
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
