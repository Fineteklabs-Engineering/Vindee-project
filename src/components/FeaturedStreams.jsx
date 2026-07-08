import { useEffect, useRef, useState } from 'react';
import '../styles/featured-streams.css';

const categories = ['All', 'Celebrity', 'Street & Guest', 'Desktop'];

const streams = [
  {
    title: 'IRL Stream ft. Prezzo El Presidente',
    description: 'Prezzo gifts Vindee a custom bulletproof vest live, honoring his street streaming grit.',
    image: '/images/vindee-prezo.png',
    link: '#',
    category: 'Celebrity',
  },
  {
    title: 'IRL Stream ft. Harmonize & China Town',
    description: 'A high-profile crossover with Bongo Flava megastar Harmonize and a tour of Nairobi\'s China Town.',
    image: '/images/vindee-harmonize.png',
    link: '#',
    category: 'Celebrity',
  },
  {
    title: 'Nairobi Street Tour ft. Sumeeya',
    description: 'A fan-favorite journey through Eastleigh tasting camel meat and Somali dishes.',
    image: '/images/vindee-sumeya.png',
    link: '#',
    category: 'Street & Guest',
  },
  {
    title: 'Let\'s Explore Nairobi ft. Thickyy Sandra',
    description: 'Over 112K views highlighting urban Kenyan lifestyle and elite social circles.',
    image: '/images/vindee-thicksandra.png',
    link: '#',
    category: 'Street & Guest',
  },
  {
    title: 'Who is Going Crazy? ft. IssaTravels',
    description: 'An explosive desktop stream packed with chaotic comedic timing and cross-cultural commentary.',
    image: '/images/vindee-whoisgoingcrazy.png',
    link: '#',
    category: 'Desktop',
  },
  {
    title: 'International OmeTV Desktop Stream',
    description: 'Bringing global audiences together via spontaneous desktop interactions.',
    image: '/images/vindee-ome.png',
    link: '#',
    category: 'Desktop',
  },
];

const FeaturedStreams = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredStreams = activeCategory === 'All'
    ? streams
    : streams.filter((stream) => stream.category === activeCategory);

  return (
    <section className="streamsWrap" ref={sectionRef}>
      <p className="streamsEyebrow">Featured streams</p>
      <p className="streamsSubtitle">High-profile IRL broadcasts and celebrity collabs</p>

      <div className="streamsTabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`streamsTab ${activeCategory === category ? 'streamsTabActive' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="streamsGrid">
        {filteredStreams.map((stream, index) => (
          <div
            className={`streamCard ${inView ? 'streamCardVisible' : ''}`}
            key={stream.title}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            <div className="streamImageWrap">
              <img src={stream.image} alt={stream.title} className="streamImage" />
              <a href={stream.link} className="streamLinkBtn" aria-label={`Watch ${stream.title}`}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </a>
            </div>
            <p className="streamTitle">{stream.title}</p>
            <p className="streamDescription">{stream.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedStreams;