import { useEffect, useState } from 'react';
import { useTheme } from './ThemeContext';
import '../styles/hero-section.css';

const partners = ['NESCAFE', 'SAFARICOM', 'CHAPA DIMBA', 'AFRICAN FORWARD SUMMIT', 'YOUTUBE'];

const HeroSection = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="bgVideoWrap">
        <video
          className="bgVideo"
          autoPlay
          muted
          loop
          playsInline
         
        >
          <source src="/videos/vindee-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay" />

      <header className={`navbar ${scrolled ? 'navbarScrolled' : ''}`}>
        <img
          src={scrolled ? '/images/vindee-logo2.png' : '/images/vindiee-logo.png'}
          alt="Vindee Official"
          className="logo"
        />

        <div className="navbarActions">
          <button
            className={`themeToggle ${scrolled ? 'themeToggleScrolled' : ''}`}
            onClick={toggleTheme}
            aria-label="Toggle light/dark mode"
          >
            {theme === 'dark' ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

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
        </div>
      </header>

    <div className="content">
  <p className="vindeeName">
    Vindee
    <svg className="vindeeSpark" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
    </svg>
  </p>
  <h1 className="headline">
    THE FACE OF<br />KENYA IRL LIVESTREAMING
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