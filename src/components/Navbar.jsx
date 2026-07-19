
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Highlights', path: '/highlights' },
  { label: 'Streams', path: '/streams' },
  { label: 'Book', path: '/book' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (path) => {
    setMenuOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbarScrolled' : ''}`}>
        <img
          src={scrolled ? '/images/vindee-logo2.png' : '/images/vindiee-logo.png'}
          alt="Vindee Official"
          className="logo"
          onClick={() => handleNavClick('/')}
        />

        <div className="navbarActions">
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

      <div className={`navOverlay ${menuOpen ? 'navOverlayOpen' : ''}`} onClick={() => setMenuOpen(false)} />

      <nav className={`sideMenu ${menuOpen ? 'sideMenuOpen' : ''}`}>
        <div className="sideMenuHeader">
          <img src="/images/vindiee-logo.png" alt="Vindee Official" className="sideMenuLogo" />
          <button className="sideMenuClose" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <ul className="sideMenuList">
          {navLinks.map((link, index) => (
            <li
              key={link.path}
              className="sideMenuItem"
              style={{ transitionDelay: menuOpen ? `${0.1 + index * 0.06}s` : '0s' }}
            >
              <button onClick={() => handleNavClick(link.path)} className="sideMenuLink">
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <p className="sideMenuFooter">@vindee_official</p>
      </nav>
    </>
  );
};

export default Navbar;