import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FaTiktok, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa6';
import { FiEye } from 'react-icons/fi';
import '../styles/stats-bar.css';

const stats = [
  {
    value: 927,
    suffix: 'K+',
    label: 'TikTok followers',
    icon: <FaTiktok size={18} />,
  },
  {
    value: 329,
    suffix: 'K+',
    label: 'Facebook followers',
    icon: <FaFacebookF size={18} />,
  },
  {
    value: 182,
    suffix: 'K+',
    label: 'Instagram followers',
    icon: <FaInstagram size={18} />,
  },
  {
    value: 133,
    suffix: 'K+',
    label: 'YouTube subscribers',
    icon: <FaYoutube size={18} />,
  },
  {
    value: 18,
    suffix: 'K+',
    label: 'Peak concurrent viewers',
    icon: <FiEye size={18} />,
  },
];

const useCountUp = (target, shouldStart, duration = 1500) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    if (!shouldStart) return;

    let startTime;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCount(Math.floor(target * eased));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [target, shouldStart, duration]);

  return count;
};

const StatItem = ({ stat, index, inView }) => {
  const count = useCountUp(stat.value, inView);

  return (
    <div
      className={`statItem ${inView ? 'statItemVisible' : ''}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
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
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.25,
  });

  return (
    <section className="statsBar" ref={ref}>
      <div className="statsInner">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            index={index}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default StatsBar;