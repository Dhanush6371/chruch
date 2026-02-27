import { Heart } from 'lucide-react';

export default function Give() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-32 px-6">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="w-12 h-12 mx-auto text-gold flex items-center justify-center">
            <Heart size={32} className="fill-current" />
          </div>

          <h1 className="font-serif text-5xl">Give</h1>

          <div className="space-y-6 max-w-lg mx-auto">
            <p className="text-lg leading-relaxed">
              Giving is an act of worship that reveals the posture of the heart before God. From the opening pages of Scripture, God shows that what we bring to Him and how we bring it, matters.
            </p>

            <p className="text-lg leading-relaxed">
              In Christ, giving flows not from obligation, but from grace, gratitude, and trust.
            </p>

            <div className="pt-4">
              <p className="text-gold italic">
                "Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver." — 2 Corinthians 9:7
              </p>
            </div>
          </div>

          <div className="pt-8">
            <button className="px-10 py-3 bg-gold text-charcoal rounded hover:bg-gold-dark transition-all duration-300 font-medium">
              Give Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
