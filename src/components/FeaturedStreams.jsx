// FeaturedStreams.jsx
import { useEffect, useRef, useState } from 'react';
import '../styles/featured-streams.css';

const categories = ['All', 'Celebrity', 'Street & Guest', 'Desktop'];

const streams = [
  {
    title: 'IRL Stream ft. Prezzo El Presidente',
    description: 'Prezzo gifts Vindee a custom bulletproof vest live, honoring his street streaming grit.',
    image: '/images/vindee-prezo3.png',
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

const AUTO_ROTATE_MS = 5000;

const FeaturedStreams = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const filteredStreams = activeCategory === 'All'
    ? streams
    : streams.filter((stream) => stream.category === activeCategory);

  const startTimer = (count) => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, AUTO_ROTATE_MS);
  };

  useEffect(() => {
    startTimer(filteredStreams.length);
    return () => clearInterval(timerRef.current);
  }, [filteredStreams.length]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveIndex(0);
  };

  const handleDotSelect = (index) => {
    setActiveIndex(index);
    startTimer(filteredStreams.length);
  };

  return (
    <section className="streamsWrap">
      <p className="streamsEyebrow">Featured streams</p>
      <p className="streamsSubtitle">High-profile IRL broadcasts and celebrity collabs</p>

      <div className="streamsTabs">
        {categories.map((category) => (
          <button
            key={category}
            className={`streamsTab ${activeCategory === category ? 'streamsTabActive' : ''}`}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="streamsCarousel">
        {filteredStreams.map((stream, index) => (
          <div
            className={`streamsSlide ${index === activeIndex ? 'streamsSlideActive' : ''}`}
            key={stream.title}
          >
            <img src={stream.image} alt={stream.title} className="streamsSlideImage" />
            <div className="streamsSlideOverlay" />

            <span className="streamsCategoryTag">{stream.category}</span>

            <div className="streamsContentCard">
              <h3 className="streamsSlideTitle">{stream.title}</h3>
              <p className="streamsSlideDescription">{stream.description}</p>
            </div>

            <p className="streamsSlideCaption">{stream.category}</p>

            <a href={stream.link} className="streamsLinkBtn" aria-label={`Watch ${stream.title}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
            </a>
          </div>
        ))}
      </div>

      <div className="streamsDots">
        {filteredStreams.map((stream, index) => (
          <button
            key={stream.title}
            className={`streamsDot ${activeIndex === index ? 'streamsDotActive' : ''}`}
            onClick={() => handleDotSelect(index)}
            aria-label={`Go to ${stream.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedStreams;