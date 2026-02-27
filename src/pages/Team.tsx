export default function Team() {
  const leaders = [
    {
      names: 'Noel & Geraldine',
      role: 'Lead Eldership & Planting Family – Cardiff',
      bio: 'Noel and Geraldine are the founding leaders and church planters of The Way. Right after their marriage, they sensed a clear call from God to be equipped for church planting, which led them to Dubai, where they served faithfully at Well of Life Church for nearly a decade, including over four years in eldership. Their family story holds both deep loss and living hope. In 2022 they welcomed their daughter Ella Hadassah, who lived for ten precious days. God later reaffirmed His faithfulness through the birth of their son, Judah—a joyful reminder of God\'s kindness and restoration.',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      names: 'Heath & Leah Van Staden',
      role: 'Co-Eldership & Apostolic Oversight – Liberty Church',
      bio: 'Heath and Leah lead Liberty Church in Newport, Wales. They carry a deep passion for seeing people live fully alive in Christ. Together with their three children, they serve locally and internationally (UK, Nepal, Cyprus, Greece, Baltic region). They walk closely with Noel and Geraldine as co-eldership couple and apostolic oversight, offering voice, wisdom, prayerful covering, and encouragement.',
      image: 'https://images.pexels.com/photos/1024998/pexels-photo-1024998.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      names: 'Chris & Meryl',
      role: 'Apostolic Leadership & Global Oversight – Genesis Collective',
      bio: 'Chris and Meryl are the founders of Genesis Collective, providing global leadership and relational covering to a growing family of churches. Beginning in South Africa in 1982, they are seasoned church-planting veterans. They serve as key apostolic voices into Noel and Geraldine\'s life and mission, helping discern and strengthen the work in Europe.',
      image: 'https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      names: 'Rob & Linda Hutton',
      role: 'Ministry Mentors & Apostolic Oversight – Well of Life Church',
      bio: 'Rob and Linda lead Well of Life Church in Dubai, where Noel and Geraldine were trained and sent from. Married for over 30 years, they have led two churches and raised three children. As mentors and apostolic oversight, they remain an integral part of The Way\'s journey, offering wisdom, relational support, and ongoing partnership.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl text-center mb-8">The Team</h1>
          <p className="text-center text-lg text-gray-700 max-w-3xl mx-auto mb-20 leading-relaxed">
            The Way is led by faithful leaders who walk in apostolic relationship and accountability with one another, seeking to honour Christ in all things.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {leaders.map((leader, index) => (
              <div key={index} className="space-y-6">
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg">
                  <img
                    src={leader.image}
                    alt={leader.names}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                <div className="text-center">
                  <h2 className="font-serif text-2xl mb-2">{leader.names}</h2>
                  <p className="text-xs uppercase tracking-widest text-gold mb-4">
                    {leader.role}
                  </p>
                </div>

                <p className="leading-relaxed text-gray-700">{leader.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-section-bg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl mb-8">What Does This Mean For You?</h2>
          <p className="text-lg leading-relaxed">
            The Way is locally led by Noel and Geraldine alongside Heath and Leah, while joyfully walking in apostolic relationship and accountability with trusted leaders. Together with Chris and Meryl and Rob and Linda, they provide wisdom, prayerful covering, and shared discernment as the church is formed. The Way is not built on one couple alone, but is supported, prayed for, and walked with by trusted leaders who help keep the church healthy, accountable, and faithful to Jesus.
          </p>
        </div>
      </section>
    </div>
  );
}
