export function initFooter() {
  const yearEl = document.getElementById('copyrightYear');
  if (!yearEl) return;

  yearEl.textContent = new Date().getFullYear();
}
