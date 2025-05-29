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

// Lógica para mostrar/ocultar escenas y navegación
const escenas = [
  document.getElementById('escena1'),
  document.getElementById('escena2'),
  document.getElementById('escena3')
];
let actual = 0;

function mostrarEscena(idx) {
  escenas.forEach((esc, i) => {
    esc.style.display = (i === idx) ? '' : 'none';
  });
}

document.getElementById('prevBtn').onclick = () => {
  if (actual > 0) {
    actual--;
    mostrarEscena(actual);
  }
};
document.getElementById('nextBtn').onclick = () => {
  if (actual < escenas.length - 1) {
    actual++;
    mostrarEscena(actual);
  }
};
mostrarEscena(actual);
