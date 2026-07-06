import './styles/main.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initNav } from './scripts/modules/nav.js';
import { initHeroAnimation } from './scripts/modules/heroAnimation.js';
import { initGallery } from './scripts/modules/gallery.js';
import { initTestimonials } from './scripts/modules/testimonials.js';
import { initDividers } from './scripts/modules/dividers.js';
import { initScrollReveal } from './scripts/modules/scrollReveal.js';
import { initAboutParallax } from './scripts/modules/parallax.js';
import { services } from './scripts/data/services.js';

const serviceIcons = {
  flower:
    '<path d="M12,15 C9.4,11.8 8.9,4.9 12,1.5 C15.1,4.9 14.6,11.8 12,15 Z"/>' +
    '<path d="M12,15 C9.4,11.8 8.9,4.9 12,1.5 C15.1,4.9 14.6,11.8 12,15 Z" transform="rotate(120 12 15)"/>' +
    '<path d="M12,15 C9.4,11.8 8.9,4.9 12,1.5 C15.1,4.9 14.6,11.8 12,15 Z" transform="rotate(240 12 15)"/>' +
    '<circle cx="12" cy="15" r="1" fill="currentColor" stroke="none"/>',
  leaf: '<path d="M4 20c8-1 12-6 12-14 0 0-9 0-12 8-1.5 3.7-1 6-0 6z"/><path d="M6 18c2-3 4-6 10-12"/>'
};

function renderServices() {
  const grid = document.querySelector('[data-services-grid]');
  if (!grid) return;

  grid.innerHTML = services
    .map(
      (service) => `
        <article class="service-card" data-reveal>
          <span class="service-card__icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              ${serviceIcons[service.icon] || ''}
            </svg>
          </span>
          <h3>${service.title}</h3>
          <p>${service.description}</p>
          <ul class="service-card__list">
            ${service.features.map((feature) => `<li>${feature}</li>`).join('')}
          </ul>
        </article>
      `
    )
    .join('');
}

initNav();
initHeroAnimation();
renderServices();
initGallery();
initTestimonials();
initDividers();
initAboutParallax();
initScrollReveal();

window.addEventListener('load', () => ScrollTrigger.refresh());
