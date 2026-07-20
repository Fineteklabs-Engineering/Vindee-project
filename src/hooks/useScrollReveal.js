// useScrollReveal.js
import { useEffect, useRef } from 'react';
import { useAnimation } from 'motion/react';

// Reusable scroll-reveal trigger: fires an animation controls object once,
// either via IntersectionObserver during normal scroll, or via a
// two-frame-deferred getBoundingClientRect() fallback for the case where
// the section is already in view on mount (e.g. reload landing mid-page).
export const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const triggeredRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const triggerOnce = () => {
      if (triggeredRef.current) return;
      triggeredRef.current = true;
      controls.start('visible');
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) triggerOnce();
        });
      },
      { threshold, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(node);

    let rafId1;
    let rafId2;
    rafId1 = requestAnimationFrame(() => {
      rafId2 = requestAnimationFrame(() => {
        const rect = node.getBoundingClientRect();
        const alreadyVisible = rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
        if (alreadyVisible) triggerOnce();
      });
    });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(rafId1);
      cancelAnimationFrame(rafId2);
    };
  }, [controls, threshold]);

  return { ref, controls };
};