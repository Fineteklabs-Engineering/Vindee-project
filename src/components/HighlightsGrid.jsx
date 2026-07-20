import { useState } from 'react';
import { motion } from 'motion/react';
import '../styles/highlights-grid.css';

const allHighlights = [
  {
    tag: 'Marathon',
    title: '30-Day IRL Marathon',
    description: 'A historic 30-day consecutive livestream, trending daily with Kenya\'s biggest celebrities and creators.',
    image: '/images/vindee-30day.png',
    link: 'https://www.youtube.com/watch?v=8f1qh1bYYJw',
  },
  {
    tag: 'The Pivot',
    title: 'Pioneering IRL Streaming',
    description: 'Brought high-stakes, high-energy IRL livestreaming to East Africa for the very first time.',
    image: '/images/vindee-image3.jpeg',
    link: 'https://www.youtube.com/@vindee_official.',
  },
  {
    tag: 'Milestone',
    title: 'First Past 100K on YouTube',
    description: 'Became the first Kenyan streamer to cross the 100,000 subscriber milestone on YouTube.',
    image: '/images/vindee-image2.png',
    link: 'https://www.youtube.com/@vindee_official.',
  },
  {
    tag: 'Global Collabs',
    title: 'Global Collaborations',
    description: 'Crossover livestreams with international creators from Japan to Italy, plus road streams across Tanzania.',
    image: '/images/vindee-and-italian.png',
    link: 'https://www.youtube.com/watch?v=MTN5s8uxpx4&t=10s',
  },
  {
    tag: 'Sponsorship',
    title: 'Chapa Dimba Season 5',
    description: 'Selected among Kenya\'s top influencers for the Safaricom Chapa Dimba Season 5 launch.',
    image: '/images/vindee-image3.jpeg',
    link: 'https://www.youtube.com/watch?v=RdlIlXJJ4C0',
  },
  {
    tag: 'Record Broken',
    title: 'Majembe vs. Mbavu Fight Night',
    description: 'Smashed regional streaming records for concurrent live viewers on an independent Kenyan digital feed.',
    image: '/images/vindee-shouting.png',
    link: 'https://www.youtube.com/watch?v=h62bWFaC9aQ&t=12s',
  },
  {
    tag: 'Diplomacy',
    title: 'African Forward Summit',
    description: 'Invited as a premier creator to the continental summit hosted by President Ruto and President Macron.',
    image: '/images/vindee-africansummit.png',
    link: 'https://www.youtube.com/watch?v=kF_wPCWJWks&t=11s',
  },
  {
    tag: 'Recognition',
    title: '3rd in Africa',
    description: 'Ranked the 3rd Most Influential Streamer in Africa, elevating Kenyan content to a global stage.',
    image: '/images/vindee-image2.png',
    link: '',
  },
];

// Parent variant: staggers children, but staggerDirection: -1 means the
// LAST child in the array starts its animation first, then it works
// backwards toward the first — matches "start with the last one".
const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      staggerDirection: -1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const HighlightsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="highlightsGridWrap">
      <p className="highlightsGridEyebrow">— ALL HIGHLIGHTS</p>
      <h2 className="highlightsGridHeading">Every milestone, in one place</h2>

      <motion.div
        className="highlightsGridInner"
        variants={gridVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {allHighlights.map((item, index) => (
          <motion.a
            key={item.title}
            href={item.link || '#'}
            target={item.link ? '_blank' : undefined}
            rel={item.link ? 'noopener noreferrer' : undefined}
            className={`expandCard ${activeIndex === index ? 'expandCardActive' : ''}`}
            variants={cardVariants}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={(e) => {
              if (!item.link) e.preventDefault();
            }}
          >
            <img src={item.image} alt={item.title} className="expandCardImage" />
            <div className="expandCardOverlay" />

            <span className="expandCardNumber">{String(index + 1).padStart(2, '0')}</span>

            <div className="expandCardContent">
              <span className="expandCardTag">{item.tag}</span>
              <h3 className="expandCardTitle">{item.title}</h3>
              <p className="expandCardDesc">{item.description}</p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default HighlightsGrid;