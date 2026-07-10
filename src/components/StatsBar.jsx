
import { useEffect, useRef, useState } from 'react';
import '../styles/stats-bar.css';

const stats = [
  {
    value: 927,
    suffix: 'K+',
    label: 'TikTok followers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0115.54 3h-3.09v12.4a2.592 2.592 0 01-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 004.3 1.38V7.3s-1.88.09-3.24-1.48z" />
      </svg>
    ),
  },
  {
    value: 329,
    suffix: 'K+',
    label: 'Facebook followers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8H6v4h3v12h5V12h3.6l.4-4h-4V6.3c0-.97.2-1.3 1.14-1.3H18V0h-3.8C10.5 0 9 1.5 9 4.3V8z" />
      </svg>
    ),
  },
  {
    value: 182,
    suffix: 'K+',
    label: 'Instagram followers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    value: 133,
    suffix: 'K+',
    label: 'YouTube subscribers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33 2.78 2.78 0 001.94 2C5.12 19.5 12 19.5 12 19.5s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.33 29 29 0 00-.46-5.34z" />
      </svg>
    ),
  },
  {
    value: 18,
    suffix: 'K+',
    label: 'Peak concurrent viewers',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
];

const useCountUp = (target, shouldStart, duration = 1500) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) return undefined;

    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out for a natural deceleration into the final number
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(eased * target));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frameRef.current);
  }, [shouldStart, target, duration]);

  return count;
};

const StatCard = ({ stat, index, inView }) => {
  const count = useCountUp(stat.value, inView);

  return (
    <div
      className={`statCard ${inView ? 'statCardVisible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <span className="statAccent" />
      <div className="statIcon">{stat.icon}</div>
      <p className="statValue">
        {count}
        {stat.suffix}
      </p>
      <p className="statLabel">{stat.label}</p>
    </div>
  );
};

const StatsBar = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="statsBar" ref={sectionRef}>
      <div className="statsInner">
        {stats.map((stat, index) => (
          <StatCard key={stat.label} stat={stat} index={index} inView={inView} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;