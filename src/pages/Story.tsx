export default function Story() {
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
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
              <img
                src="https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cardiff streets"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h2 className="font-serif text-4xl mb-6">The Reason</h2>
              <p className="text-lg leading-relaxed">
                The Way is being formed as a local church with a simple conviction: that Jesus still meets people in the middle of real life, and that the Church is called to walk closely with others through both beauty and brokenness.
              </p>
              <p className="text-lg leading-relaxed">
                As a church rooted in Cardiff, we seek to live among the people of this city and bear witness to the way, the truth, and the life of Jesus. From the streets and homes of Cardiff, we trust that God will raise a sent people to the nations, conduits of His grace who will carry the life of Jesus beyond the city to plant and strengthen churches across the UK and Europe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16">The Vision — W.A.Y.</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {visionPoints.map((point, index) => (
              <div key={index} className="space-y-4">
                <div className="text-6xl font-serif text-gold mb-4">{point.letter}</div>
                <h3 className="text-xl font-semibold tracking-wide mb-3">
                  {point.letter} — {point.title}
                </h3>
                <p className="leading-relaxed text-gray-700 mb-4">
                  {point.description}
                </p>
                <div className="pt-4 border-t border-border-light">
                  <p className="text-xs uppercase tracking-wider text-gold mb-2">
                    {point.scripture}
                  </p>
                  <p className="text-sm italic text-gray-600">{point.scriptureText}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-px bg-gold mx-auto mb-8" />
          <h2 className="font-serif text-4xl mb-8">The Mission</h2>
          <p className="text-xl leading-relaxed mb-8">
            Our mission is to walk with people from death to life, from life to fullness, and from fullness into mission.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            We form disciples who follow Jesus wholeheartedly, people whose lives are shaped by the Word and the Spirit, expressed through faithful obedience, as we journey together toward Christlikeness and are sent to live on mission in the world.
          </p>
          <div className="w-16 h-px bg-gold mx-auto mt-8" />
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl text-center mb-16">How We Live This Out</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="flex gap-4 pb-8 border-b border-border-light">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
                  <span className="text-gold font-semibold">{index + 1}</span>
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="font-serif text-xl">{principle.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{principle.description}</p>
                  <div className="pt-2">
                    <p className="text-xs uppercase tracking-wider text-gold">
                      {principle.scripture}
                    </p>
                    <p className="text-sm italic text-gray-600">{principle.scriptureText}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
