import { gsap } from 'gsap';

const FADE_DURATION = 0.25;

export function initGalleryFilter() {
  const filterBar = document.querySelector('[data-gallery-filter]');
  const grid = document.getElementById('galleryGrid');
  if (!filterBar || !grid) return;

  const buttons = Array.from(filterBar.querySelectorAll('[data-filter]'));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getTiles = () => Array.from(grid.querySelectorAll('[data-gallery-tile]'));

  function setActiveButton(activeBtn) {
    buttons.forEach((btn) => {
      if (btn === activeBtn) {
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.removeAttribute('aria-current');
      }
    });
  }

  function applyFilter(category) {
    getTiles().forEach((tile) => {
      const matches = category === 'all' || tile.dataset.categoria === category;

      if (reduceMotion) {
        tile.style.opacity = '';
        tile.style.display = matches ? '' : 'none';
        return;
      }

      if (matches) {
        tile.style.display = '';
        gsap.to(tile, { opacity: 1, duration: FADE_DURATION, ease: 'power1.out' });
      } else {
        gsap.to(tile, {
          opacity: 0,
          duration: FADE_DURATION,
          ease: 'power1.out',
          onComplete: () => {
            tile.style.display = 'none';
          }
        });
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.getAttribute('aria-current') === 'true') return;
      setActiveButton(btn);
      applyFilter(btn.dataset.filter);
    });
  });
}
