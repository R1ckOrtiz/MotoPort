// Ano no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// Tema com persistência
const themeBtn = document.getElementById('themeToggle');
const applyTheme = (mode) => {
  document.documentElement.classList.toggle('dark', mode === 'dark');
};
const stored = localStorage.getItem('theme');
const preferred = stored || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(preferred);
if (themeBtn) themeBtn.addEventListener('click', () => {
  const next = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
  localStorage.setItem('theme', next);
  applyTheme(next);
});

// Menu mobile
const menuBtn = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryNav');
if (menuBtn && primaryNav) menuBtn.addEventListener('click', () => primaryNav.classList.toggle('open'));

// Scroll reveal (opcional)
const io = 'IntersectionObserver' in window ? new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
  });
}, { threshold: .15 }) : null;
if (io) document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));
