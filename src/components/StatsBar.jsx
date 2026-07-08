// StatsBar.jsx
import { useEffect, useRef, useState } from 'react';
import '../styles/stats-bar.css'

const stats = [
  { value: 927, suffix: 'K+', label: 'TikTok followers' },
  { value: 329, suffix: 'K+', label: 'Facebook followers' },
  { value: 182, suffix: 'K+', label: 'Instagram followers' },
  { value: 133, suffix: 'K+', label: 'YouTube subscribers' },
  { value: 18, suffix: 'K+', label: 'Peak concurrent viewers' },
];

const useCountUp = (target, shouldStart, duration = 1500) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef(null);

  useEffect(() => {
    if (!shouldStart) {
      cancelAnimationFrame(frameRef.current);
      setCount(0); // reset so it can animate again next time
      return;
    }

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCount(Math.round(eased * target));

      if (progress < 1) frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frameRef.current);
  }, [shouldStart, target, duration]);

  return count;
};

const StatBlock = ({ stat, shouldStart }) => {
  const count = useCountUp(stat.value, shouldStart);

  return (
    <div className="statBlock">
      <p className="statValue">{count}{stat.suffix}</p>
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
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="statsBar" ref={sectionRef}>
      <div className="statsInner">
        {stats.map((stat) => (
          <StatBlock stat={stat} shouldStart={inView} key={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;