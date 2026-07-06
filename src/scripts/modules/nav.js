export function initNav() {
  const nav = document.querySelector('[data-nav]');
  const hero = document.querySelector('[data-hero]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const mobilePanel = document.querySelector('[data-nav-mobile]');

  if (!nav) return;

  if (hero) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        nav.classList.toggle('is-scrolled', !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(hero);
  }

  if (toggle && mobilePanel) {
    const closeMenu = () => {
      toggle.classList.remove('is-open');
      mobilePanel.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
      const isOpen = toggle.classList.toggle('is-open');
      mobilePanel.classList.toggle('is-open', isOpen);
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    mobilePanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });
  }
}
