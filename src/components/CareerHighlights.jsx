
import { useEffect, useRef, useState } from 'react';
import '../styles/career-highlights.css';

const highlights = [
  {
    tag: '30-Day Marathon',
    title: '30-Day IRL Marathon',
    description: 'A historic 30-day consecutive livestream, trending daily with Kenya\'s biggest celebrities.',
    image: '/images/vindee-30day.png',
    link: 'https://www.youtube.com/watch?v=8f1qh1bYYJw'
  },
  {
    tag: 'Global Collabs',
    title: 'Global Collaborations',
    description: 'A viral crossover livestream with Japanese creator Mokkun, blending Kenyan street culture with cross-continental comedy.',
    image: '/images/vindee-japanese.png',
    link: 'https://www.youtube.com/watch?v=MTN5s8uxpx4&t=10s'
  },
  {
    tag: 'Sponsorship',
    title: 'Chapa Dimba Season 5',
    description: 'Selected among Kenya\'s top influencers for the Safaricom Chapa Dimba Season 5 launch.',
    image: '/images/vindee-image3.jpeg',
    link: 'https://www.youtube.com/watch?v=RdlIlXJJ4C0'
  },
  {
    tag: 'Diplomacy',
    title: 'African Forward Summit',
    description: 'Invited as a premier creator to the continental summit hosted by President Ruto and President Macron.',
    image: '/images/vindee-africansummit.png',
    link: 'https://www.youtube.com/watch?v=kF_wPCWJWks&t=11s'
  },
];

const AUTO_ROTATE_MS = 4500;

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

  const handleSelect = (index) => {
    setActiveIndex(index);
    startTimer();
  };

  const active = highlights[activeIndex];

  
  const upNext = [1, 2, 3].map((offset) => {
    const index = (activeIndex + offset) % highlights.length;
    return { ...highlights[index], index };
  });

  const [topThumb, ...bottomThumbs] = upNext;

  return (
    <section className="highlightsWrap">
      <p className="highlightsEyebrow">— CAREER HIGHLIGHTS</p>
      <h2 className="highlightsTitle">Marathons, milestones and mega streams</h2>

      <div className="highlightsGrid">
        <div className="highlightMainCard">
          <div className="highlightMainImageWrap">
            <span className="highlightCounter">{activeIndex + 1}/{highlights.length}</span>
            <span className="highlightBadge">{active.tag}</span>
            <img src={active.image} alt={active.title} className="highlightMainImage" key={active.image} />
          </div>
          <div className="highlightMainBody">
            <h3 className="highlightMainTitle">{active.title}</h3>
            <p className="highlightMainDesc">{active.description}</p>
          <button
           className="highlightMainCta"
           onClick={() => window.open(active.link, "_blank")}
         >
          Learn more
         </button>
          </div>
        </div>

        <div className="highlightThumbCol">
          <button className="highlightThumb highlightThumbTop" onClick={() => handleSelect(topThumb.index)}>
            <img src={topThumb.image} alt={topThumb.title} className="highlightThumbImage" />
            <span className="highlightThumbNumber">{topThumb.index + 1}</span>
            <div className="highlightThumbOverlay">
              <p className="highlightThumbTag">{topThumb.tag}</p>
              <p className="highlightThumbTitle">{topThumb.title}</p>
            </div>
          </button>

          <div className="highlightThumbRow">
            {bottomThumbs.map((item) => (
              <button
                key={item.title}
                className="highlightThumb highlightThumbSmall"
                onClick={() => handleSelect(item.index)}
              >
                <img src={item.image} alt={item.title} className="highlightThumbImage" />
                <span className="highlightThumbNumber">{item.index + 1}</span>
                <div className="highlightThumbOverlay">
                  <p className="highlightThumbTag">{item.tag}</p>
                  <p className="highlightThumbTitle">{item.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="highlightDots">
        {highlights.map((item, index) => (
          <button
            key={item.title}
            className={`highlightDot ${activeIndex === index ? 'highlightDotActive' : ''}`}
            onClick={() => handleSelect(index)}
            aria-label={`Go to ${item.title}`}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerHighlights;