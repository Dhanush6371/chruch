import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function Belief() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-5xl text-center mb-8">The Belief</h1>
          <p className="text-center text-lg text-gray-700 max-w-2xl mx-auto mb-16 leading-relaxed">
            These are the core convictions that shape who we are and how we live as followers of Jesus.
          </p>

          <div className="space-y-4">
            {beliefs.map((belief, index) => (
              <div
                key={index}
                className="border border-border-light rounded-lg overflow-hidden bg-white"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-serif text-xl text-left">{belief.title}</h3>
                  <div className="flex-shrink-0 ml-4 text-gold">
                    {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2">
                    <p className="leading-relaxed text-gray-700">{belief.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.pexels.com/photos/1210273/pexels-photo-1210273.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Open Bible"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
