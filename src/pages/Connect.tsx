import { useState, FormEvent } from 'react';

export default function Connect() {
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
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl text-center mb-20">Connect</h1>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-6">
              <p className="text-xl leading-relaxed">
                The Way is being formed through relationship, shared life, and simple steps of obedience. Whether you are exploring faith, returning to church, or sensing a desire to walk with us in this season, we would love to hear from you.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                You don't need to have all the answers. You don't need to commit to anything. If you are curious, interested, or would like to journey with us as The Way is being formed, you are welcome here.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We believe God often meets people not through pressure, but through presence.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
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
                          <span className="ml-3 group-hover:text-gold transition-colors">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-gold text-charcoal rounded font-medium hover:bg-gold-dark transition-colors"
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
    </div>
  );
}
