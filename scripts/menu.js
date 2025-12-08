// Simple toggle para menú móvil. Coloca este archivo en /scripts/menu.js y enlázalo con defer.
document.addEventListener('DOMContentLoaded', function() {
  const btn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.nav .menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function() {
    const isOpen = menu.classList.toggle('menu--open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
});
