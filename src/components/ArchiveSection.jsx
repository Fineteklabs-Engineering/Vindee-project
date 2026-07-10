import { useEffect, useRef, useState } from 'react';
import '../styles/archive-section.css';

const ArchiveSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="archiveWrap" ref={sectionRef}>
      <img src="/images/vindee-archive.jpg" alt="" className="archiveBg" />
      <div className="archiveOverlay" />

      <div className={`archiveContent ${inView ? 'archiveContentVisible' : ''}`}>
        <p className="archiveEyebrow archiveAnimItem">
          <span className="archiveDot" /> Full broadcast archive
        </p>
        <h2 className="archiveHeadline archiveAnimItem">
          Every stream, every marathon<br />all in one place
        </h2>
        <p className="archiveSubtext archiveAnimItem">
          Direct access to the complete, uncut catalog of multi-hour
          live broadcasts and global interactive content.
        </p>
        <a href="https://www.youtube.com/@vindee_official./streams" className="archiveCta archiveAnimItem">
          Watch all replays
          <span className="archiveCtaIcon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
};

export default ArchiveSection;