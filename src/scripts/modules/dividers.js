import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Anima cada divisor de línea ondulada (motivo de marca) para que se
 * "dibuje a sí mismo" conforme el usuario hace scroll, usando
 * stroke-dasharray/stroke-dashoffset sobre la longitud real del path.
 */
export function initDividers() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const svgs = document.querySelectorAll('.divider-svg');

  svgs.forEach((svg) => {
    const path = svg.querySelector('path');
    if (!path) return;

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
        trigger: svg,
        start: 'top 85%',
        end: 'top 55%',
        scrub: 1
      }
    });
  });
}
