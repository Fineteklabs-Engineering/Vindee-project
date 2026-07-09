
import { useEffect, useState } from 'react';
import '../styles/hero-section.css';

const partners = ['NESCAFE', 'SAFARICOM', 'CHAPA DIMBA', 'AFRICAN FORWARD SUMMIT', 'YOUTUBE'];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <picture>
  <source media="(max-width: 560px)" srcSet="/images/vindee-mobile-photo3.jpg" />
  <img src="/images/vindee-hero-photo2.jpg" alt="" className="bgImage" />
</picture>
      <div className="overlay" />

      <header className={`navbar ${scrolled ? 'navbarScrolled' : ''}`}>
          <img
    src={scrolled ? '/images/vindee-logo2.png' : '/images/vindiee-logo.png'}
    alt="Vindee Official"
    className="logo"
  />
        <button
          className={`menuBtn ${menuOpen ? 'open' : ''} ${scrolled ? 'menuBtnScrolled' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

   <div className="content">
  <p className="vindeeName">Vindee</p>
  <h1 className="headline">
    THE FACE OF<br />KENYAN IRL LIVE
  </h1>
  <p className="subtext">
    High-energy, raw, and authentic multi-hour broadcasts exploring
    street culture, food, and high-profile collabs across the globe.
  </p>
  <button
    className="cta"
    onClick={() => {
      document.getElementById('contact-booking')?.scrollIntoView({ behavior: 'smooth' });
    }}
  >
    BOOK VINDEE
  </button>
</div>

      {/*<img src="/images/vindee-image1.png" alt="Vindee Official" className="portrait" />  */}

      <div className="featuredWrap">
        <p className="featuredLabel">FEATURED IN</p>
        <div className="featuredRow">
          {partners.map((p) => (
            <span key={p} className="featuredItem">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;