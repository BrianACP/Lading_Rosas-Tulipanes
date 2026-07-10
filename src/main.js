import './styles/main.css';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { initNav } from './scripts/modules/nav.js';
import { initMobileMenu } from './scripts/modules/mobileMenu.js';
import { initHeroAnimation } from './scripts/modules/heroAnimation.js';
import { initServices } from './scripts/modules/services.js';
import { initGallery } from './scripts/modules/gallery.js';
import { initGalleryFilter } from './scripts/modules/galleryFilter.js';
import { initTestimonials } from './scripts/modules/testimonials.js';
import { initDividers } from './scripts/modules/dividers.js';
import { initAboutParallax } from './scripts/modules/parallax.js';
import { initFooter } from './scripts/modules/footer.js';
import { initScrollReveal } from './scripts/modules/scrollReveal.js';

initNav();
initMobileMenu();
initHeroAnimation();
initServices();
initGallery();
initGalleryFilter();
initTestimonials();
initDividers();
initAboutParallax();
initFooter();
initScrollReveal();

window.addEventListener('load', () => ScrollTrigger.refresh());
