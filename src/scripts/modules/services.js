import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { services } from '../data/services.js';

gsap.registerPlugin(ScrollTrigger);

export function initServices() {
  const grid = document.querySelector('.services-grid');
  if (!grid) return;

  grid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card">
          <span class="service-card__numero">${service.numero}</span>
          <h3>${service.titulo}</h3>
          <p>${service.descripcion}</p>
          <svg class="service-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            ${service.icono}
          </svg>
        </article>
      `
    )
    .join('');

  const cards = grid.querySelectorAll('.service-card');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) return;

  gsap.fromTo(
    cards,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power2.out',
      stagger: 0.12,
      scrollTrigger: {
        trigger: grid,
        start: 'top 82%'
      }
    }
  );
}
