import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAboutParallax() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const visual = document.querySelector('[data-about-visual]');

  if (!visual || reduceMotion) return;

  gsap.to(visual, {
    y: -30,
    ease: 'none',
    scrollTrigger: {
      trigger: visual.closest('.about'),
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
}
