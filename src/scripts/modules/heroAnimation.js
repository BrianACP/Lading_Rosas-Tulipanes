import { gsap } from 'gsap';

export function initHeroAnimation() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const logo = hero.querySelector('[data-hero-logo]');
  const eyebrow = hero.querySelector('[data-hero-eyebrow]');
  const title = hero.querySelector('[data-hero-title]');
  const subtitle = hero.querySelector('[data-hero-subtitle]');
  const cta = hero.querySelector('[data-hero-cta]');
  const scrollLine = hero.querySelector('[data-hero-scroll-line]');

  if (reduceMotion) return;

  gsap
    .timeline({ defaults: { ease: 'power3.out', duration: 0.9 } })
    .from(logo, { opacity: 0, y: 24 })
    .from(eyebrow, { opacity: 0, y: 16 }, '-=0.6')
    .from(title, { opacity: 0, y: 24 }, '-=0.55')
    .from(subtitle, { opacity: 0, y: 20 }, '-=0.55')
    .from(cta, { opacity: 0, y: 16 }, '-=0.5');

  if (scrollLine) {
    gsap.to(scrollLine, {
      scaleY: 0.35,
      transformOrigin: 'top center',
      duration: 1.4,
      ease: 'sine.inOut',
      repeat: -1,
      yoyo: true
    });
  }
}
