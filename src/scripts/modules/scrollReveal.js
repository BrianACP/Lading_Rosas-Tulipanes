import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollReveal() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealEls = document.querySelectorAll('[data-reveal]');
  revealEls.forEach((el) => {
    if (reduceMotion) {
      el.style.opacity = 1;
      return;
    }

    gsap.from(el, {
      opacity: 0,
      y: 28,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      }
    });
  });

  const counters = document.querySelectorAll('[data-count-to]');
  counters.forEach((el) => {
    const target = Number(el.dataset.countTo);
    const suffix = el.dataset.countSuffix || '';

    if (reduceMotion) {
      el.textContent = `${target.toLocaleString('es-MX')}${suffix}`;
      return;
    }

    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        once: true
      },
      onUpdate: () => {
        el.textContent = `${Math.round(counter.value).toLocaleString('es-MX')}${suffix}`;
      }
    });
  });
}
