import '../styles/footer.css'
import { Link } from 'react-router-dom';


const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Streams', path: '/streams' },
  { name: 'Highlights', path: '/career-highlights' },
  { name: 'Book', path: '/book' },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footerWrap">
      <div className="footerLeft">
        <h3 className="footerTitle">Contact us</h3>

        <div className="footerContactItem">
          <span className="footerIconCircle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </span>
          <span>Nairobi, Kenya</span>
        </div>

        <div className="footerContactItem">
          <span className="footerIconCircle">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
           
          </span>
          <a href="mailto:vindeeofficialmarketing@gmail.com" className="footerContactLink">
             {/* vindeeofficialmarketing@gmail.com */}
             marketing@vindeeofficial.com
            
          </a>
        </div>

        <div className="footerContactItem">
          <span className="footerIconCircle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </span>
          <span>+254705225797, +254740202159</span>
        </div>

        <img src="/images/vindee-footer.jpeg" alt="Vindee Official" className="footerPhoto" />

        <div className="footerLegal">
          <a href="" className="footerLegalLink">Terms &amp; conditions</a>
          <span className="footerDivider">|</span>
          <a href="" className="footerLegalLink">Sitemap</a>
          <span className="footerDivider">|</span>
          <a href="" className="footerLegalLink">Privacy policy</a>
        </div>
      </div>

      <div className="footerRight">
        <h3 className="footerTitle">Our social channels</h3>
        <p className="footerSubtext">
          Multi-hour IRL broadcasts, celebrity collabs, and street culture
          from Nairobi to the world.
        </p>

        <div className="footerSocials">
          <a href="https://www.tiktok.com/@vindee_official" className="footerSocialBtn" aria-label="TikTok">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/vindee_official/" className="footerSocialBtn" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100063672132006#" className="footerSocialBtn" aria-label="Facebook">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-.97.2-1.3 1.14-1.3H18V0h-3.8C10.5 0 9 1.5 9 4.3V8z" />
            </svg>
          </a>
          <a href="https://www.youtube.com/@vindee_official./streams" className="footerSocialBtn" aria-label="YouTube">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.34z" />
              <path d="M9.75 15.02l5.75-3.27-5.75-3.27z" fill="#0A0A0A" />
            </svg>
          </a>
        </div>

        <div className="footerBottomRow">
         <nav className="footerNav">
  {navLinks.map((link) => (
    <Link
      key={link.name}
      to={link.path}
      className="footerNavPill"
    >
      {link.name}
    </Link>
  ))}
</nav>

          <p className='powered'>Powered by <a href="https://magical.africa/">magical.africa</a></p>

          <button className="footerScrollTop" onClick={scrollToTop} aria-label="Scroll to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>

          
        </div>
      </div>
    </footer>
  );
};

export default Footer;