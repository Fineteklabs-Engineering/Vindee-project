// AboutHero.jsx
import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import '../styles/about-hero.css';

const bgImages = [
  '/images/about-hero-image.png',
  '/images/vindee-image3.jpeg',
  '/images/vindee-hero-photo2.jpg',
];

const ROTATE_MS = 5000;

const heroStats = [
  { value: 927, suffix: 'K+', label: 'TikTok' },
  { value: 182, suffix: 'K+', label: 'Instagram' },
  { value: 329, suffix: 'K+', label: 'Facebook' },
  { value: 133, suffix: 'K+', label: 'YouTube' },
];

const useCountUp = (target, shouldStart, duration = 1500) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) {
      cancelAnimationFrame(frameRef.current);
      setCount(0);
      return;
    }

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameRef.current);
  }, [shouldStart, target, duration]);

  return count;
};

const HeroStatItem = ({ stat, shouldStart }) => {
  const count = useCountUp(stat.value, shouldStart);

  return (
    <div className="aboutHeroStatItem">
      <p className="aboutHeroStatValue">{count}{stat.suffix}</p>
      <p className="aboutHeroStatLabel">{stat.label}</p>
    </div>
  );
};

const AboutHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [statsInView, setStatsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bgImages.length);
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setStatsInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="aboutHero" ref={sectionRef}>
      <div className="aboutHeroBgWrap">
        {bgImages.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`aboutHeroBg ${index === activeIndex ? 'aboutHeroBgActive' : ''}`}
          />
        ))}
      </div>
      <div className="aboutHeroOverlay" />

      <Navbar />

      <div className="aboutHeroContent">
        <p className="aboutHeroEyebrow">ENTERTAINER</p>
        <h1 className="aboutHeroTitle">
          Vindee<span className="aboutHeroDot">.</span>
        </h1>
        <p className="aboutHeroSubtext">
          Meet the man behind Kenya's IRL streaming movement - from viral
          street pranks to becoming the 3rd Most Influential Streamer in Africa.
        </p>
      </div>

      <div className="aboutHeroStats">
        {heroStats.map((stat) => (
          <HeroStatItem stat={stat} shouldStart={statsInView} key={stat.label} />
        ))}
      </div>

      <div className="aboutHeroDots">
        {bgImages.map((_, index) => (
          <button
            key={index}
            className={`aboutHeroDot2 ${index === activeIndex ? 'aboutHeroDot2Active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutHero;