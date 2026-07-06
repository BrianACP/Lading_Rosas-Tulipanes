import './styles/main.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initNav } from './scripts/modules/nav.js';
import { initHeroAnimation } from './scripts/modules/heroAnimation.js';
import { initServices } from './scripts/modules/services.js';
import { initGallery } from './scripts/modules/gallery.js';
import { initTestimonials } from './scripts/modules/testimonials.js';
import { initDividers } from './scripts/modules/dividers.js';
import { initScrollReveal } from './scripts/modules/scrollReveal.js';
import { initAboutParallax } from './scripts/modules/parallax.js';

initNav();
initHeroAnimation();
initServices();
initGallery();
initTestimonials();
initDividers();
initAboutParallax();
initScrollReveal();

window.addEventListener('load', () => ScrollTrigger.refresh());
