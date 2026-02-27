import { ReactNode } from 'react';

interface PageHeroProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    children?: ReactNode;
}

export default function PageHero({ title, subtitle, backgroundImage, children }: PageHeroProps) {
    return (
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax */}
            <div
                className="absolute inset-0 page-hero-bg"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            />

            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/50 to-charcoal/80" />

            {/* Divine Light Glow */}
            <div className="page-divine-light" />

            {/* Sparkles */}
            <div className="page-sparkles-container">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={`page-sparkle-${i}`}
                        className="page-sparkle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 8}s`,
                            animationDuration: `${8 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
                <h1
                    className="font-serif font-light text-4xl md:text-6xl text-white leading-tight mb-6"
                    style={{
                        lineHeight: '1.3',
                        textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 0 40px rgba(212,175,55,0.1)'
                    }}
                >
                    {title}
                </h1>
                {subtitle && (
                    <p
                        className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
                        style={{
                            lineHeight: '1.8',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        {subtitle}
                    </p>
                )}
                {children}
            </div>

            <style>{`
        .page-hero-bg {
          will-change: transform;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .page-divine-light {
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.04) 40%, transparent 70%);
          border-radius: 50%;
          animation: page-divine-pulse 6s ease-in-out infinite;
          pointer-events: none;
        }

        @media (min-width: 768px) {
          .page-divine-light {
            width: 800px;
            height: 800px;
          }
        }

        @keyframes page-divine-pulse {
          0%, 100% {
            opacity: 0.6;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 0.9;
            transform: translate(-50%, -50%) scale(1.1);
          }
        }

        .page-sparkles-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
        }

        .page-sparkle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, rgba(212, 175, 55, 1) 0%, rgba(212, 175, 55, 0.6) 40%, transparent 70%);
          border-radius: 50%;
          animation: page-float linear infinite;
          opacity: 0;
          box-shadow: 0 0 6px rgba(212, 175, 55, 0.8);
        }

        @keyframes page-float {
          0% {
            transform: translateY(100vh) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(-20vh) scale(1.3);
            opacity: 0;
          }
        }
      `}</style>
        </section>
    );
}
