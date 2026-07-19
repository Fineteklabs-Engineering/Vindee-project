
import '../styles/hero-section.css';
import Navbar from './Navbar';

const partners = ['NESCAFE', 'SAFARICOM', 'CHAPA DIMBA', 'AFRICAN FORWARD SUMMIT', 'YOUTUBE'];

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="bgVideoWrap">
        <video className="bgVideo" autoPlay muted loop playsInline>
          <source src="/videos/vindee-hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="overlay" />

       <Navbar />

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