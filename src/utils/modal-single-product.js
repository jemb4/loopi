export function openProductModal(producto) {
  const modal = document.getElementById("single-product");
  const modalContent = document.getElementById("product-modal-content");

  // Asegúrate de que el contenido ya esté en el HTML
  const modalImg = modalContent.querySelector("#modal-img");
  const modalTitulo = modalContent.querySelector("#modal-titulo");
  const precioSpan = modalContent.querySelector("p span");
  const modalDescripcion = modalContent.querySelector("#modal-descripcion");
  const modalEstado = modalContent.querySelector("#modal-estado");
  const modalAnio = modalContent.querySelector("#modal-anio");

  if (!modalImg || !modalTitulo || !precioSpan) {
    console.error("⚠️ No se encontraron elementos dentro del modal.");
    return;
  }

  // Asignar los datos del producto
  modalImg.src = producto.image;
  modalImg.alt = producto.title;
  modalTitulo.textContent = producto.title;
  precioSpan.textContent = `$${producto.price}`;
  modalDescripcion.textContent = producto.description;
  modalEstado.textContent = producto.state ?? "Nuevo";
  modalAnio.textContent = producto.year ?? "2024";

  // Establecer la puntuación de estrellas
  const ratingValue = Math.round(producto.rating);
  const ratingInput = modalContent.querySelector(`#star${ratingValue}`);
  if (ratingInput) ratingInput.checked = true;

  // Mostrar el modal
  modal.showModal();

  // Agregar listeners de cierre solo si aún no están
  const cerrarBtn = modalContent.querySelector("#cerrar");
  const cerrarIcon = document.getElementById("close-modal");

  cerrarBtn?.addEventListener("click", () => modal.close());
  cerrarIcon?.addEventListener("click", () => modal.close());
}