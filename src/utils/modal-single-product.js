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
  precioSpan.textContent = `${producto.price}€`;
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


  // Botón eliminar

  const deleteButton = modalContent.querySelector("button.bg-gray-200");
  deleteButton.dataset.id = producto.id;

  deleteButton.addEventListener("click", async () => {
  const productId = deleteButton.dataset.id;

  try {
    // Aquí asumo que estás usando JSON Server
    const response = await fetch(`http://localhost:8000/products/${productId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("✅ Producto eliminado correctamente.");
      modal.close();

      // Opcional: eliminar el producto del DOM si es necesario
      const productCard = document.getElementById(`product-${productId}`);
      if (productCard) productCard.remove();
    } else {
      alert("❌ Error al eliminar el producto.");
    }
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    alert("⚠️ Ocurrió un error al intentar eliminar el producto.");
  }
});
}