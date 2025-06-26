// modal-single-product.js

export function openProductModal(producto) {
  const modal = document.getElementById("single-product");
  const modalContent = document.getElementById("product-modal-content");

  // Cargar la estructura HTML de singleProduct.html dinámicamente
  fetch("/src/views/singleProduct.html")
    .then((res) => {
      res.text();
      console.warn(res.text())})
    .then((html) => {
      modalContent.innerHTML = html;

      // Ahora que el HTML está cargado, podemos modificar el contenido
      document.querySelector("#modal-img").src = producto.image;
      document.querySelector("#modal-img").alt = producto.title;
      document.querySelector("#modal-titulo").textContent = producto.title;

      const precioSpan = modalContent.querySelector("p span");
      if (precioSpan) precioSpan.textContent = `$${producto.price}`;

      document.querySelector("#modal-descripcion").textContent = producto.description;
      document.querySelector("#modal-estado").textContent = producto.state ?? "Nuevo";
      document.querySelector("#modal-anio").textContent = producto.year ?? "2024";

      // Establecer la puntuación de estrellas en el modal
      const ratingValue = Math.round(producto.rating);
      if (ratingValue) {
        const ratingInput = modalContent.querySelector(`#star${ratingValue}`);
        if (ratingInput) ratingInput.checked = true;
      }

      // Mostrar el modal
      modal.showModal();

      // Cerrar el modal
      document.getElementById("cerrar")?.addEventListener("click", () => {
        modal.close();
      });
      document.getElementById("close-modal")?.addEventListener("click", () => {
        modal.close();
      });
    })
    .catch((err) => {
      console.error("Error al cargar el modal:", err);
    });
}
