
import { useEffect, useRef, useState } from 'react';
import '../styles/timeline-section.css';

const milestones = [
  {
    label: 'The Break Out',
    title: 'Viral street pranks',
    description: 'The "Ntakushandaa" street prank series goes viral, laying the groundwork for Kenya\'s IRL streaming scene.',
  },
  {
    label: 'The Pivot',
    title: 'Pioneering IRL streaming',
    description: 'Vindee brings high-stakes, high-energy IRL livestreaming to East Africa for the first time.',
  },
  {
    label: 'The Marathon',
    title: '30-Day IRL Marathon',
    description: 'Completes a historic 30-day consecutive livestream, trending daily with Kenya\'s biggest celebrities.',
  },
  {
    label: 'The Sponsorship',
    title: 'Chapa Dimba Season 5',
    description: 'Selected among Kenya\'s top influencers for the Safaricom Chapa Dimba Season 5 launch.',
  },
  {
    label: 'The Crossover',
    title: 'Global collaborations',
    description: 'Cross-cultural streams with international creators, from Japan to Italy, plus road streams across Tanzania.',
  },
  {
    label: 'The Summit',
    title: 'African Forward Summit',
    description: 'Invited as a premier creator to the continental summit hosted by President Ruto and President Macron.',
  },
  {
    label: 'The Ranking',
    title: '3rd in Africa',
    description: 'Recognized as the 3rd Most Influential Streamer in Africa, elevating Kenyan content to a global stage.',
  },
];

const TimelineItem = ({ item, index }) => {
  const [inView, setInView] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (itemRef.current) observer.observe(itemRef.current);
    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <div
      ref={itemRef}
      className={`timelineItem ${isLeft ? 'timelineItemLeft' : 'timelineItemRight'} ${inView ? 'timelineItemVisible' : ''}`}
    >
      <div className="timelineCard">
        <p className="timelineLabel">{item.label}</p>
        <h3 className="timelineTitle">{item.title}</h3>
        <p className="timelineDesc">{item.description}</p>
      </div>
      <div className="timelineNode">
        <span className="timelineNodeInner" />
      </div>
    </div>
  );
};

const TimelineSection = () => {
  return (
    <section className="timelineWrap">
      <p className="timelineEyebrow">— THE TIMELINE</p>
      <h2 className="timelineHeading">From street corners to center stage</h2>

      <div className="timelineTrack">
        <div className="timelineLine" />
        {milestones.map((item, index) => (
          <TimelineItem item={item} index={index} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default TimelineSection;