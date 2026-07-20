
import { useState } from 'react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async';
import '../styles/stream-page.css';


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
    image: '/images/vindee-omeTv.png',
    link: '#',
    category: 'Desktop',
  },
];

const recentStreams = streams.slice(0, 3);

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const sideListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const sideItemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const gridItemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const StreamsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const recentReveal = useScrollReveal(0.15);
  const allSectionReveal = useScrollReveal(0.05);

  const filteredStreams = streams.filter((stream) => {
    const matchesCategory = activeCategory === 'All' || stream.category === activeCategory;
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      query === '' ||
      stream.title.toLowerCase().includes(query) ||
      stream.description.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const [recentFeature, ...recentSide] = recentStreams;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    
    document.querySelector('.streamsAllSection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    
    <div className="streamsPageWrap">
      <Helmet>
      <title>Career Highlights</title>
    </Helmet>
      <Navbar forceLight />

      <header className="streamsPageHeader">
        <h1 className="streamsPageTitle">Inside Streams: Broadcasts and Replays</h1>
        <p className="streamsPageSubtitle">
          Every marathon, collab, and street tour - catch up on what's been live.
        </p>

        <form className="streamsSearchForm" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="streamsSearchInput"
            placeholder="Search streams..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="streamsSearchBtn">Search</button>
        </form>
      </header>

      <section className="streamsRecentSection" ref={recentReveal.ref}>
        <p className="streamsSectionLabel">Recent streams</p>

        <div className="streamsRecentGrid">
          <motion.a
            href={recentFeature.link}
            className="streamsRecentFeature"
            variants={featureVariants}
            initial="hidden"
            animate={recentReveal.controls}
          >
            <div className="streamsRecentFeatureImageWrap">
              <img src={recentFeature.image} alt={recentFeature.title} className="streamsRecentFeatureImage" />
            </div>
            <span className="streamsRecentTag">{recentFeature.category}</span>
            <h2 className="streamsRecentFeatureTitle">{recentFeature.title}</h2>
            <p className="streamsRecentFeatureDesc">{recentFeature.description}</p>
          </motion.a>

          <motion.div
            className="streamsRecentSide"
            variants={sideListVariants}
            initial="hidden"
            animate={recentReveal.controls}
          >
            {recentSide.map((stream) => (
              <motion.a
                href={stream.link}
                key={stream.title}
                className="streamsRecentSideCard"
                variants={sideItemVariants}
              >
                <div className="streamsRecentSideImageWrap">
                  <img src={stream.image} alt={stream.title} className="streamsRecentSideImage" />
                </div>
                <div className="streamsRecentSideBody">
                  <span className="streamsRecentTag">{stream.category}</span>
                  <h3 className="streamsRecentSideTitle">{stream.title}</h3>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="streamsAllSection" ref={allSectionReveal.ref}>
        <p className="streamsSectionLabel">All streams</p>

        <div className="streamsAllTabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`streamsAllTab ${activeCategory === category ? 'streamsAllTabActive' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {filteredStreams.length === 0 ? (
          <p className="streamsNoResults">No streams match "{searchTerm}".</p>
        ) : (
          <motion.div
            className="streamsAllGrid"
            key={`${activeCategory}-${searchTerm}`}
            variants={gridVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredStreams.map((stream) => (
              <motion.a
                href={stream.link}
                key={stream.title}
                className="streamsAllCard"
                variants={gridItemVariants}
              >
                <div className="streamsAllCardImageWrap">
                  <img src={stream.image} alt={stream.title} className="streamsAllCardImage" />
                </div>
                <span className="streamsRecentTag">{stream.category}</span>
                <h3 className="streamsAllCardTitle">{stream.title}</h3>
                <p className="streamsAllCardDesc">{stream.description}</p>
              </motion.a>
            ))}
          </motion.div>
        )}
      </section>

       <Footer />
    </div>

   
  );
};

export default StreamsPage;