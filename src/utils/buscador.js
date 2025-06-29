import { openProductModal } from "./modal-single-product.js";

const input = document.querySelector("input[placeholder='Buscar productos...']");
const container = document.querySelector("#productos-container");



function renderProductoCard(p) {
  return `
    <div class="bg-white border border-gray-200 rounded-lg shadow-lg producto" data-id="${
       p.id
     }">
  <img class="p-8 cursor-pointer rounded-t-lg w-full object-contain h-60" src="${
    p.image
  }" alt="${p.title}" />

  
  <div class="px-5 pb-5 text-center">
    <a href="#">
      <h5 class="text-xl font-semibold tracking-tight text-gray-900">${
        p.title
      }</h5>
    </a>
    <div class="flex justify-center items-center mt-2.5 mb-5 space-x-3">
      <div class="flex items-center space-x-1">
        ${renderStars(p.rating)}
      </div>
      <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm">
        ${p.rating}
      </span>
    </div>
    <div>
      <span class="text-3xl font-bold text-gray-900">${p.price}€</span>
    </div>
  </div>
</div>
  `;
}

function renderStars(rating) {
  const fullStar = `
    <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.135a1 
      1 0 0 0 .95.69h4.356c.969 0 1.371 1.24.588 
      1.81l-3.522 2.56a1 1 0 0 0-.364 
      1.118l1.342 4.134c.3.922-.755 
      1.688-1.538 1.118L10 15.347l-3.523 
      2.56c-.782.57-1.837-.196-1.537-1.118l1.342-4.134a1 
      1 0 0 0-.364-1.118L2.396 
      9.562c-.783-.57-.38-1.81.588-1.81h4.356a1 
      1 0 0 0 .95-.69l1.342-4.135z"/>
    </svg>`;

  const halfStar = `
    <svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 2.5c-.31 0-.62.19-.73.57l-1.28 4.14a1 1 0 0 1-.95.69H2.5c-.47 0-.85.28-1 
      .68s-.07.91.3 1.22l3.52 2.56a1 1 0 0 1 .36 
      1.12l-1.34 4.13c-.14.45.02.91.38 
      1.19.35.26.85.3 1.25.05L10 15.35V2.5z"/>
    </svg>`;

  const emptyStar = `
    <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.342 4.135a1 
      1 0 0 0 .95.69h4.356c.969 0 1.371 1.24.588 
      1.81l-3.522 2.56a1 1 0 0 0-.364 
      1.118l1.342 4.134c.3.922-.755 
      1.688-1.538 1.118L10 15.347l-3.523 
      2.56c-.782.57-1.837-.196-1.537-1.118l1.342-4.134a1 
      1 0 0 0-.364-1.118L2.396 
      9.562c-.783-.57-.38-1.81.588-1.81h4.356a1 
      1 0 0 0 .95-.69l1.342-4.135z"/>
    </svg>`;

  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.25 && rating % 1 < 0.75;
  const empty = 5 - full - (hasHalf ? 1 : 0);

  return fullStar.repeat(full) + (hasHalf ? halfStar : '') + emptyStar.repeat(empty);
}


// Función para volver a mostrar los productos por categoría si el input está vacío
async function renderProductosPorCategoria(productos) {
  const categorias = ["laptops", "mobiles", "smartwatches", "monitors"];
  container.innerHTML = "";

  categorias.forEach(categoria => {
    const productosCategoria = productos
      .filter(p => p.category === categoria)
      .slice(0, 8);

    if (productosCategoria.length === 0) return;

    let html = `
      <section>
        <h2 class="text-3xl font-bold mb-6 text-blue-700 capitalize">${categoria}</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          ${productosCategoria.map(p => renderProductoCard(p)).join("")}
        </div>
      </section>
    `;

    container.innerHTML += html;
    activateProductListener(productos)
  });
}

input.addEventListener("input", async (e) => {
  const query = e.target.value.toLowerCase();

  const res = await fetch("http://localhost:8000/products");
  const productos = await res.json();

  if (query === "") {
    renderProductosPorCategoria(productos); // Restaurar vista original
    return;
  }

  const filtrados = productos.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );

  container.innerHTML = `
    <section>
      <h2 class="text-3xl font-bold mb-6 text-blue-700">Resultados de búsqueda</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        ${filtrados.map(p => renderProductoCard(p)).join("")}
      </div>
    </section>
  `;

  activateProductListener(filtrados);
});

const activateProductListener = (products) => {
    setTimeout(() => {
    document.querySelectorAll(".producto").forEach(el => {
      const id = el.getAttribute("data-id");
      const product = products.find(p => p.id == id);
      if (product) {
        el.addEventListener("click", () => openProductModal(product));
      }
    });
  }, 0);
}