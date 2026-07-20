// HighlightsGrid.jsx
import { useEffect, useRef, useState } from 'react';
import '../styles/highlights-grid.css';

const allHighlights = [
  {
    tag: 'Marathon',
    title: '30-Day IRL Marathon',
    description: 'A historic 30-day consecutive livestream, trending daily with Kenya\'s biggest celebrities and creators.',
    image: '/images/vindee-30day.png',
  },
  {
    tag: 'The Pivot',
    title: 'Pioneering IRL Streaming',
    description: 'Brought high-stakes, high-energy IRL livestreaming to East Africa for the very first time.',
    image: '/images/vindee-image3.jpeg',
  },
  {
    tag: 'Milestone',
    title: 'First Past 100K on YouTube',
    description: 'Became the first Kenyan streamer to cross the 100,000 subscriber milestone on YouTube.',
    image: '/images/vindee-image2.png',
  },
  {
    tag: 'Global Collabs',
    title: 'Global Collaborations',
    description: 'Crossover livestreams with international creators from Japan to Italy, plus road streams across Tanzania.',
    image: '/images/vindee-and-italian.png',
  },
  {
    tag: 'Sponsorship',
    title: 'Chapa Dimba Season 5',
    description: 'Selected among Kenya\'s top influencers for the Safaricom Chapa Dimba Season 5 launch.',
    image: '/images/vindee-image3.jpeg',
  },
  {
    tag: 'Record Broken',
    title: 'Majembe vs. Mbavu Fight Night',
    description: 'Smashed regional streaming records for concurrent live viewers on an independent Kenyan digital feed.',
    image: '/images/vindee-shouting.png',
  },
  {
    tag: 'Diplomacy',
    title: 'African Forward Summit',
    description: 'Invited as a premier creator to the continental summit hosted by President Ruto and President Macron.',
    image: '/images/vindee-africansummit.png',
  },
  {
    tag: 'Recognition',
    title: '3rd in Africa',
    description: 'Ranked the 3rd Most Influential Streamer in Africa, elevating Kenyan content to a global stage.',
    image: '/images/vindee-image2.png',
  },
];

const GridCard = ({ item, index }) => {
  const [inView, setInView] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`gridCard ${inView ? 'gridCardVisible' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 0.08}s` }}
    >
      <div className="gridCardImageWrap">
        <img src={item.image} alt={item.title} className="gridCardImage" />
        <span className="gridCardTag">{item.tag}</span>
      </div>
      <h3 className="gridCardTitle">{item.title}</h3>
      <p className="gridCardDesc">{item.description}</p>
    </div>
  );
};

const HighlightsGrid = () => {
  return (
    <section className="highlightsGridWrap">
      <p className="highlightsGridEyebrow">— ALL HIGHLIGHTS</p>
      <h2 className="highlightsGridHeading">Every milestone, in one place</h2>

      <div className="highlightsGridInner">
        {allHighlights.map((item, index) => (
          <GridCard item={item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default HighlightsGrid;