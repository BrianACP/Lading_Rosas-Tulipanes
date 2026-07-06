import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryItems } from '../data/gallery.js';

gsap.registerPlugin(ScrollTrigger);

export function initGallery() {
  const grid = document.querySelector('[data-gallery-grid]');
  if (!grid) return;

  grid.innerHTML = galleryItems
    .map(
      (item) => `
        <figure class="gallery__item" data-gallery-item>
          <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" />
          <span class="gallery__tag">${item.category}</span>
        </figure>
      `
    )
    .join('');

  const items = grid.querySelectorAll('[data-gallery-item]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) return;

  gsap.set(items, { opacity: 0, y: 24 });

  ScrollTrigger.batch(items, {
    start: 'top 88%',
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: 'power2.out'
      })
  });
}
