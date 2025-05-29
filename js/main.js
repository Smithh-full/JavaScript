import mojs from '@mojs/core';

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
window.addEventListener('DOMContentLoaded', () => {
  const escenas = [
    document.getElementById('escena1'),
    document.getElementById('escena2'),
    document.getElementById('escena3')
  ];
  let actual = 0;

  function mostrarEscena(idx) {
    escenas.forEach((esc, i) => {
      if (esc) esc.style.display = (i === idx) ? '' : 'none';
    });
    // Animaciones creativas Mo.js por escena
    if (idx === 0) animarEscena1();
    if (idx === 1) animarEscena2();
    if (idx === 2) animarEscena3();
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

  // --- Animaciones Mo.js creativas por escena ---
  function animarEscena1() {
    // Efecto burst para cada personaje al aparecer
    ['manzana', 'pina', 'pera', 'naranja'].forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      new mojs.Burst({
        parent: el,
        radius:   { 0: 60 },
        count: 8,
        angle: 45,
        children: {
          shape: 'polygon',
          points: 6,
          fill: [ '#ffb6b6', '#ffe066', '#b5ead7', '#c3a6e8' ],
          duration: 1200,
          delay: i * 200,
          easing: 'cubic.out',
          opacity: { 1: 0 },
          scale: { 0.7: 1.2 },
        }
      }).play();
      new mojs.Html({
        el,
        scale: { 0: 1.1, 1.1: 1 },
        opacity: { 0: 1 },
        duration: 900,
        delay: i * 200,
        easing: 'elastic.out',
      }).play();
    });
  }

  function animarEscena2() {
    // Caperucita salta y deja un rastro de flores
    const cap = document.getElementById('manzana2');
    if (cap) {
      new mojs.Html({
        el: cap,
        y: { 0: -30, '-30': 0 },
        duration: 1200,
        repeat: 2,
        easing: 'sin.inout',
      }).play();
      // Ráfaga de flores
      new mojs.Burst({
        parent: cap,
        radius: { 0: 80 },
        count: 6,
        angle: 0,
        children: {
          shape: 'circle',
          fill: [ '#ffb6b6', '#ffe066', '#b5ead7', '#c3a6e8', '#fffbe8' ],
          duration: 1200,
          easing: 'cubic.out',
          opacity: { 1: 0 },
          scale: { 0.7: 1.2 },
        }
      }).play();
    }
  }

  function animarEscena3() {
    // Diálogo: burbujas y destellos
    const cap = document.getElementById('manzana3');
    const lobo = document.getElementById('pina3');
    const dialogos = [
      document.getElementById('dialogo-caperucita'),
      document.getElementById('dialogo-lobo')
    ];
    [cap, lobo].forEach((el, i) => {
      if (!el) return;
      new mojs.Html({
        el,
        scale: { 0: 1.2, 1.2: 1 },
        opacity: { 0: 1 },
        duration: 900,
        delay: i * 200,
        easing: 'elastic.out',
      }).play();
      new mojs.Burst({
        parent: el,
        radius: { 0: 50 },
        count: 7,
        angle: 30,
        children: {
          shape: 'circle',
          fill: [ '#ffe066', '#c3a6e8', '#fffbe8' ],
          duration: 1000,
          delay: i * 100,
          opacity: { 1: 0 },
          scale: { 0.7: 1.2 },
        }
      }).play();
    });
    dialogos.forEach((el, i) => {
      if (!el) return;
      new mojs.Html({
        el,
        scale: { 0: 1.1, 1.1: 1 },
        opacity: { 0: 1 },
        duration: 800,
        delay: 400 + i * 200,
        easing: 'elastic.out',
      }).play();
    });
  }
});
