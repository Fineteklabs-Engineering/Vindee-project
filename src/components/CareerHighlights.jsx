// CareerHighlights.jsx
import { useEffect, useRef, useState } from 'react';
import '../styles/career-highlights.css'

const highlights = [
  {
    title: '30-Day IRL Marathon',
    description: 'A historic 30-day consecutive livestream, trending daily with Kenya\'s biggest celebrities.',
    image: '/images/vindee-30day.png',
  },
  {
    title: 'Global Collaborations',
    description: 'Cross-cultural streams with Italian streamer Giulia Mazza and road streams across Tanzania.',
    image: '/images/vindee-and-italian.png',
  },
  {
    title: 'Chapa Dimba Season 5',
    description: 'Selected among Kenya\'s top influencers for the Safaricom Chapa Dimba Season 5 launch.',
    image: '/images/vindee-image3.jpeg',
  },
  {
    title: 'African Forward Summit',
    description: 'Invited as a premier creator to the continental summit hosted by President Ruto and President Macron.',
    image: '/images/vindee-africansummit.png',
  },
];

const AUTO_ROTATE_MS = 4000;

const CareerHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, AUTO_ROTATE_MS);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    startTimer(); // reset the auto-rotate clock on manual pick
  };

  return (
    <section className="highlightsWrap">
      <p className="highlightsEyebrow">— CAREER HIGHLIGHTS</p>
      <h2 className="highlightsTitle">Marathons, milestones and mega streams</h2>

      <div className="highlightsGrid">
        {highlights.map((item, index) => (
          <button
            key={item.title}
            className={`highlightCard ${activeIndex === index ? 'highlightCardActive' : ''} card-${index}`}
            onClick={() => handleCardClick(index)}
          >
            <p className="highlightCardTitle">{item.title}</p>
            <p className="highlightCardDesc">{item.description}</p>
          </button>
        ))}

        <div className="highlightImageWrap">
          {highlights.map((item, index) => (
            <img
              key={item.title}
              src={item.image}
              alt={item.title}
              className={`highlightImage ${activeIndex === index ? 'highlightImageActive' : ''}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerHighlights;