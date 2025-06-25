const articulos = document.querySelectorAll('.articulo');
const modal = document.getElementById('modal');
const modalTitulo = document.getElementById('modal-titulo');
const modalDescripcion = document.getElementById('modal-descripcion');
const btnCerrar = document.getElementById('cerrar');

articulos.forEach(articulo => {
  articulo.addEventListener('click', () => {
    modalTitulo.textContent = articulo.getAttribute('data-titulo');
    modalDescripcion.textContent = articulo.getAttribute('data-descripcion');
    modal.showModal();
  });
});

btnCerrar.addEventListener('click', () => {
  modal.close();
});