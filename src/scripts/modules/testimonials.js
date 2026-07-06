import { testimonials } from '../data/testimonials.js';

export function initTestimonials() {
  const root = document.querySelector('[data-testimonial-carousel]');
  if (!root) return;

  const track = root.querySelector('[data-testimonial-track]');
  const dotsWrap = root.querySelector('[data-testimonial-dots]');
  if (!track || !dotsWrap) return;

  track.innerHTML = testimonials
    .map(
      (item, index) => `
        <blockquote class="testimonial-slide${index === 0 ? ' is-active' : ''}" data-testimonial-slide>
          <p class="testimonial-slide__quote">&ldquo;${item.quote}&rdquo;</p>
          <cite>
            <span class="testimonial-slide__author">${item.author}</span>
            <span class="testimonial-slide__role">${item.role}</span>
          </cite>
        </blockquote>
      `
    )
    .join('');

  dotsWrap.innerHTML = testimonials
    .map(
      (_, index) => `
        <button
          class="testimonial-dot${index === 0 ? ' is-active' : ''}"
          data-testimonial-dot
          data-index="${index}"
          aria-label="Ver testimonio ${index + 1}"
        ></button>
      `
    )
    .join('');

  const slides = track.querySelectorAll('[data-testimonial-slide]');
  const dots = dotsWrap.querySelectorAll('[data-testimonial-dot]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let current = 0;
  let timer = null;

  const goTo = (index) => {
    slides[current].classList.remove('is-active');
    dots[current].classList.remove('is-active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('is-active');
    dots[current].classList.add('is-active');
  };

  const stopAutoplay = () => {
    if (timer) window.clearInterval(timer);
    timer = null;
  };

  const startAutoplay = () => {
    if (reduceMotion) return;
    stopAutoplay();
    timer = window.setInterval(() => goTo(current + 1), 6000);
  };

  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      goTo(Number(dot.dataset.index));
      startAutoplay();
    });
  });

  root.addEventListener('mouseenter', stopAutoplay);
  root.addEventListener('mouseleave', startAutoplay);

  startAutoplay();
}
