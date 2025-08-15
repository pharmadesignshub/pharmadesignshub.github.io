// main.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  if (btn) {
    btn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  }
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
