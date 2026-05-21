import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — fires when element enters viewport
 * @param {Object} options
 * @param {number} options.threshold - 0–1, how much must be visible (default 0.15)
 * @param {string} options.rootMargin - IntersectionObserver rootMargin (default '0px 0px -60px 0px')
 * @param {boolean} options.once - only trigger once (default true)
 * @returns {{ ref, isVisible }}
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '0px 0px -60px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(node);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.unobserve(node);
  }, [threshold, rootMargin, once]);

  return { ref, isVisible };
}

/**
 * useCountUp — animates a number from 0 to target when triggered
 * @param {number} target - the final number
 * @param {boolean} trigger - when true, start counting
 * @param {number} duration - ms duration of the animation (default 2000)
 * @returns {number} current count value
 */
export function useCountUp(target, trigger, duration = 2000) {
  const [count, setCount] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;

    const num = parseInt(target, 10);
    if (isNaN(num)) { setCount(target); return; }

    const start = performance.now();

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * num));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [trigger, target, duration]);

  return count;
}
