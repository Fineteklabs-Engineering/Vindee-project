// AboutHero.jsx
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import '../styles/about-hero.css';

const bgImages = [
  '/images/about-hero-image.png',
  '/images/vindee-image3.jpeg',
  '/images/vindee-hero-photo2.jpg',
];

const ROTATE_MS = 5000;

const AboutHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % bgImages.length);
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="aboutHero">
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