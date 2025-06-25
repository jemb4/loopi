document.addEventListener("DOMContentLoaded", () => {
  const abrirBtn = document.getElementById('abrir-categorias');
  const modal = document.getElementById('modal-categorias');
  const cerrarBtn = document.getElementById('cerrar-categorias');

  if (!abrirBtn || !modal || !cerrarBtn) return;

  abrirBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
  });

  cerrarBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.add('hidden');
    }
  });
});
