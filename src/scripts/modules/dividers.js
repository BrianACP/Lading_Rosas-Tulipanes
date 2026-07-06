import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Anima cada divisor de línea ondulada (motivo de marca) para que se
 * "dibuje a sí mismo" mientras entra al viewport, usando
 * stroke-dasharray/stroke-dashoffset sobre la longitud real del path.
 */
export function initDividers() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const paths = document.querySelectorAll('[data-divider] .divider__path');

  paths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;

    if (reduceMotion) {
      path.style.strokeDashoffset = '0';
      return;
    }

    path.style.strokeDashoffset = `${length}`;

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: path.closest('[data-divider]'),
        start: 'top 85%',
        end: 'bottom 65%',
        scrub: 0.6
      }
    });
  });
}
