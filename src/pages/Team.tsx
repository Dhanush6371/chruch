import { useEffect, useRef } from 'react';
import PageHero from '../components/PageHero';

export default function Team() {
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

  const leaders = [
    {
      names: 'Noel & Geraldine',
      role: 'Lead Eldership & Planting Family – Cardiff',
      bio: 'Noel and Geraldine are the founding leaders and church planters of The Way. Right after their marriage, they sensed a clear call from God to be equipped for church planting, which led them to Dubai, where they served faithfully at Well of Life Church for nearly a decade, including over four years in eldership. Their family story holds both deep loss and living hope. In 2022 they welcomed their daughter Ella Hadassah, who lived for ten precious days. God later reaffirmed His faithfulness through the birth of their son, Judah—a joyful reminder of God\'s kindness and restoration.',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      names: 'Heath & Leah Van Staden',
      role: 'Co-Eldership & Apostolic Oversight – Liberty Church',
      bio: 'Heath and Leah lead Liberty Church in Newport, Wales. They carry a deep passion for seeing people live fully alive in Christ. Together with their three children, they serve locally and internationally (UK, Nepal, Cyprus, Greece, Baltic region). They walk closely with Noel and Geraldine as co-eldership couple and apostolic oversight, offering voice, wisdom, prayerful covering, and encouragement.',
      image: 'https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      names: 'Chris & Meryl',
      role: 'Apostolic Leadership & Global Oversight – Genesis Collective',
      bio: 'Chris and Meryl are the founders of Genesis Collective, providing global leadership and relational covering to a growing family of churches. Beginning in South Africa in 1982, they are seasoned church-planting veterans. They serve as key apostolic voices into Noel and Geraldine\'s life and mission, helping discern and strengthen the work in Europe.',
      image: 'https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      names: 'Rob & Linda Hutton',
      role: 'Ministry Mentors & Apostolic Oversight – Well of Life Church',
      bio: 'Rob and Linda lead Well of Life Church in Dubai, where Noel and Geraldine were trained and sent from. Married for over 30 years, they have led two churches and raised three children. As mentors and apostolic oversight, they remain an integral part of The Way\'s journey, offering wisdom, relational support, and ongoing partnership.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600',
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
        title="Our Team"
        subtitle="The Way is led by faithful leaders who walk in apostolic relationship and accountability with one another, seeking to honour Christ in all things."
        backgroundImage="https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=1920"
      />

      <section className="relative py-20 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {leaders.map((leader, index) => (
              <div key={index} className="space-y-6 scroll-animate fade-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-gold/20">
                  <img
                    src={leader.image}
                    alt={leader.names}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-110"
                  />
                </div>

                <div className="text-center">
                  <h2 className="font-serif text-2xl md:text-3xl mb-2">{leader.names}</h2>
                  <p className="text-xs uppercase tracking-widest text-gold mb-4">
                    {leader.role}
                  </p>
                </div>

                <p className="leading-relaxed text-gray-700 text-sm md:text-base">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 md:py-32 px-4 md:px-6 bg-white/80 backdrop-blur-sm">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/208315/pexels-photo-208315.jpeg?auto=compress&cs=tinysrgb&w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl mb-8 scroll-animate fade-up">What Does This Mean For You?</h2>
          <p className="text-base md:text-lg leading-relaxed scroll-animate fade-up" style={{ animationDelay: '0.2s' }}>
            The Way is locally led by Noel and Geraldine alongside Heath and Leah, while joyfully walking in apostolic relationship and accountability with trusted leaders. Together with Chris and Meryl and Rob and Linda, they provide wisdom, prayerful covering, and shared discernment as the church is formed. The Way is not built on one couple alone, but is supported, prayed for, and walked with by trusted leaders who help keep the church healthy, accountable, and faithful to Jesus.
          </p>
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
