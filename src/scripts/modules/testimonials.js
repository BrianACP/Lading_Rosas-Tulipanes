import { testimonials } from '../data/testimonials.js';

export function initTestimonials() {
  const track = document.getElementById('testiTrack');
  const dotsWrap = document.getElementById('testiDots');
  if (!track || !dotsWrap) return;

  track.innerHTML = testimonials
    .map(
      (item, index) => `
        <blockquote class="testi-slide${index === 0 ? ' active' : ''}" data-testi-slide>
          <p class="testi-slide__quote">&ldquo;${item.quote}&rdquo;</p>
          <cite class="testi-slide__autor">${item.autor}</cite>
        </blockquote>
      `
    )
    .join('');

  dotsWrap.innerHTML = testimonials
    .map(
      (_, index) => `
        <button
          class="testi-dot${index === 0 ? ' active' : ''}"
          data-testi-dot
          data-index="${index}"
          aria-label="Ver testimonio ${index + 1}"
        ></button>
      `
    )
    .join('');

  const slides = track.querySelectorAll('[data-testi-slide]');
  const dots = dotsWrap.querySelectorAll('[data-testi-dot]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let current = 0;
  let timer = null;

  function showTestimonial(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function startAutoplay() {
    if (reduceMotion) return;
    if (timer) window.clearInterval(timer);
    timer = window.setInterval(() => showTestimonial(current + 1), 5500);
  }

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      showTestimonial(Number(dot.dataset.index));
      startAutoplay();
    });
  });

  startAutoplay();
}
