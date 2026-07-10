import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { galleryItems } from '../data/gallery.js';

gsap.registerPlugin(ScrollTrigger);

export function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  grid.innerHTML = galleryItems
    .map(
      (item) => `
        <figure class="gallery-tile" data-gallery-tile data-categoria="${item.categoria}">
          <img src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" />
        </figure>
      `
    )
    .join('');

  const tiles = grid.querySelectorAll('[data-gallery-tile]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (reduceMotion) return;

  tiles.forEach((tile, index) => {
    gsap.fromTo(
      tile,
      { opacity: 0, y: 26, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: (index % 6) * 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: tile,
          start: 'top 92%'
        }
      }
    );
  });
}
