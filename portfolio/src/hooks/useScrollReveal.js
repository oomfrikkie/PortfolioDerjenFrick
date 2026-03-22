import { useEffect } from 'react';

export default function useScrollReveal() {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    if (!revealElements.length) return;

    const observer = new window.IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('active');
            obs.unobserve(el);
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    revealElements.forEach((el, i) => {
      // Support for staggered delay via data-delay or fallback to 0
      const delay = el.dataset.delay || 0;
      el.style.transitionDelay = `${delay}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
