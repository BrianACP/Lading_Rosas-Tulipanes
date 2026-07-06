export function initMobileMenu() {
  const toggle = document.querySelector('[data-nav-toggle]');
  const panel = document.querySelector('[data-nav-mobile]');
  if (!toggle || !panel) return;

  function openMenu() {
    toggle.classList.add('is-open');
    panel.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Cerrar menú');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    toggle.classList.remove('is-open');
    panel.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('no-scroll');
  }

  toggle.addEventListener('click', () => {
    if (toggle.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  panel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('click', (event) => {
    if (!panel.classList.contains('is-open')) return;
    if (toggle.contains(event.target)) return;
    // El panel ocupa toda la pantalla, así que "fuera del panel" se traduce
    // como "fuera de los links": un click en el fondo también cierra.
    if (event.target.closest('a')) return;
    closeMenu();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && panel.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });
}
