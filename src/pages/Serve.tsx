import { Link } from 'react-router-dom';

export default function Serve() {
  return (
    <div className="min-h-screen pt-20">
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1200)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10">
          <h1 className="font-serif text-6xl text-white text-center">Serve</h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-xl leading-relaxed">
            Serving is one of the primary ways people grow, belong, and participate in the life of the Church. God has intentionally placed gifts within each person, not for individual recognition, but for the strengthening of the whole body.
          </p>

          <p className="text-lg leading-relaxed text-gray-700">
            As we serve one another, faith is formed, relationships deepen, and the life of Christ is made visible through ordinary acts of love and faithfulness.
          </p>

          <div className="pt-8">
            <p className="text-gold italic mb-8">
              "All of you together are Christ's body, and each of you is a part of it." — 1 Corinthians 12:27
            </p>
          </div>

          <Link
            to="/connect"
            className="inline-block px-8 py-3 border-2 border-gold text-gold rounded hover:bg-gold hover:text-charcoal transition-all duration-300 font-medium"
          >
            Explore Serving
          </Link>
        </div>
      </section>
    </div>
  );
}
