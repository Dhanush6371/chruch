import { useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';

export default function Story() {
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

  const visionPoints = [
    {
      letter: 'W',
      title: 'WITNESS',
      description:
        'We believe the gospel must be embodied before it is explained. Through transformed lives, loving community, and faithful obedience, we desire to bear witness to Jesus in both word and deed.',
      scripture: 'Acts 1:8',
      scriptureText: '"But you will receive power when the Holy Spirit comes upon you. And you will be my witnesses…"',
    },
    {
      letter: 'A',
      title: 'APOSTOLIC EQUIPPING',
      description:
        'We are committed to forming disciples who are grounded in Scripture, filled with the Holy Spirit, and equipped to serve God faithfully in every sphere of life.',
      scripture: 'Ephesians 4:11–12',
      scriptureText: '"Now these are the gifts Christ gave to the church…"',
    },
    {
      letter: 'Y',
      title: 'YIELDING NATIONS',
      description:
        'We look forward to God raising a sent people who carry the life of Jesus beyond the city.',
      scripture: 'Matthew 28:19',
      scriptureText: '"Therefore, go and make disciples of all the nations…"',
    },
  ];

  const principles = [
    {
      title: 'Christ Exalted',
      description: 'We centre everything on Jesus as Lord, Head, and supreme authority.',
      scripture: 'Colossians 1:18',
      scriptureText: '"Christ is also the head of the church…"',
    },
    {
      title: 'Scripture Honoured',
      description: 'We submit our lives and direction to the authority of God\'s Word.',
      scripture: '2 Timothy 3:16',
      scriptureText: '"All Scripture is inspired by God…"',
    },
    {
      title: 'Spirit Depended',
      description: 'We rely on the Holy Spirit for guidance, power, and transformation.',
      scripture: 'Zechariah 4:6',
      scriptureText: '"It is not by force nor by strength, but by my Spirit…"',
    },
    {
      title: 'Character Formed',
      description: 'We pursue Christlike formation before gifting, platform, or position.',
      scripture: 'Galatians 4:19',
      scriptureText: '"…until Christ is fully developed in your lives."',
    },
    {
      title: 'Community Covenanted',
      description: 'We walk in authentic, loving, and accountable life together.',
      scripture: 'John 13:35',
      scriptureText: '"Your love for one another will prove to the world that you are my disciples."',
    },
    {
      title: 'Mission Embraced',
      description: 'We live as sent people in everyday life and among the nations.',
      scripture: 'John 20:21',
      scriptureText: '"As the Father has sent me, so I am sending you."',
    },
    {
      title: 'Generosity Practised',
      description: 'We live open-handed lives marked by hospitality and sacrifice.',
      scripture: 'Acts 20:35',
      scriptureText: '"It is more blessed to give than to receive."',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Global Background Animation */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="sparkles-container">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 8}s`,
              }}
            />
          ))}
        </div>
        <div className="divine-glow" />
      </div>

      <PageHero
        title="Our Story"
        subtitle="The Way is being formed as a local church with a simple conviction: that Jesus still meets people in the middle of real life."
        backgroundImage="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      {/* Section 1: The Reason - asymmetrical layout */}
      <section className="relative py-24 md:py-36 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - decorative element with image */}
            <div className="relative lg:order-2 scroll-animate fade-right">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold/10 rounded-full blur-2xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Cardiff streets"
                  loading="lazy"
                  className="w-full h-[450px] md:h-[550px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gold/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 border-8 border-gold/20 rounded-full"></div>
            </div>

            {/* Right side - text */}
            <div className="lg:order-1 space-y-6 scroll-animate fade-left">
              <span className="text-gold uppercase tracking-[0.3em] text-sm font-medium">Our beginning</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                The Reason
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  The Way is being formed as a local church with a simple conviction: that Jesus still meets people in the middle of real life, and that the Church is called to walk closely with others through both beauty and brokenness.
                </p>
                <p>
                  As a church rooted in Cardiff, we seek to live among the people of this city and bear witness to the way, the truth, and the life of Jesus. From the streets and homes of Cardiff, we trust that God will raise a sent people to the nations, conduits of His grace who will carry the life of Jesus beyond the city to plant and strengthen churches across the UK and Europe.
                </p>
              </div>
              <div className="pt-4">
                <div className="w-20 h-1 bg-gold"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: The Vision - overlapping circles design */}
      <section className="relative py-28 md:py-40 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-16 scroll-animate fade-up">
            The <span className="text-gold">Vision</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-0 relative">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="relative group w-full md:w-1/3 scroll-animate fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Connecting line (except last) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold/30 transform -translate-y-1/2"></div>
                )}
                <div className="relative mx-auto max-w-sm">
                  {/* Circle with letter */}
                  <div className="relative z-10 w-32 h-32 mx-auto mb-6 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-gold/20 group-hover:border-gold/50 transition-colors">
                    <span className="text-5xl font-serif text-gold">{point.letter}</span>
                  </div>
                  {/* Content card */}
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-left">
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{point.description}</p>
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-1">
                        {point.scripture}
                      </p>
                      <p className="text-xs italic text-gray-500">{point.scriptureText}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: The Mission - full-width with bold typography */}
      <section className="relative py-32 md:py-44 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="scroll-animate fade-up">
            <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold text-sm uppercase tracking-wider mb-6">Our purpose</span>
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              The Mission
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 leading-relaxed mb-6">
              “Our mission is to walk with people from death to life, from life to fullness, and from fullness into mission.”
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              We form disciples who follow Jesus wholeheartedly, people whose lives are shaped by the Word and the Spirit, expressed through faithful obedience, as we journey together toward Christlikeness and are sent to live on mission in the world.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: How We Live This Out - masonry-style grid */}
      <section className="relative py-24 md:py-32 px-4 md:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-center mb-16 scroll-animate fade-up">
            How We <span className="text-gold">Live This Out</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="group relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-gold/30 transition-all duration-300 hover:shadow-xl scroll-animate fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Small decorative element */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-gold/5 rounded-full group-hover:scale-150 transition-transform"></div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </span>
                    <h3 className="font-serif text-xl text-gray-900">{principle.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{principle.description}</p>
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <p className="text-xs uppercase tracking-wider text-gold font-semibold mb-1">
                      {principle.scripture}
                    </p>
                    <p className="text-xs italic text-gray-500">{principle.scriptureText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .scroll-animate {
          opacity: 0;
          transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform, opacity;
        }

        .scroll-animate.animate-in {
          opacity: 1;
        }

        .fade-up {
          transform: translateY(40px);
        }
        .fade-up.animate-in {
          transform: translateY(0);
        }

        .fade-right {
          transform: translateX(-30px);
        }
        .fade-right.animate-in {
          transform: translateX(0);
        }

        .fade-left {
          transform: translateX(30px);
        }
        .fade-left.animate-in {
          transform: translateX(0);
        }

        .sparkles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.9) 0%, rgba(212, 175, 55, 0.3) 60%, transparent 90%);
          border-radius: 50%;
          animation: float-up linear infinite;
          opacity: 0;
          box-shadow: 0 0 10px rgba(212, 175, 55, 0.6);
        }

        @keyframes float-up {
          0% {
            transform: translateY(100vh) scale(0.5);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-10vh) scale(1.5);
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
          background: radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%);
          border-radius: 50%;
          animation: pulse-glow 15s ease-in-out infinite;
        }

        @media (min-width: 768px) {
          .divine-glow {
            width: 1400px;
            height: 1400px;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.4;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 0.8;
            transform: translateX(-50%) scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}