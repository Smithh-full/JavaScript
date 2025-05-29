// Animación de brillo para las frutas al aparecer
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.personaje').forEach((el, i) => {
    el.addEventListener('animationend', () => {
      el.style.boxShadow = '0 0 24px 8px #fff7, 0 0 8px #2228';
      el.style.transition = 'box-shadow 0.5s';
      setTimeout(() => {
        el.style.boxShadow = '0 0 8px #2228';
      }, 800);
    });
  });
});
