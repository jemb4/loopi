import { openProductModal } from "./modal-single-product.js";

document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoria = urlParams.get("categoria");
  const container = document.getElementById("productos-container");

  container.innerHTML = `<p class="text-center text-gray-500">Cargando productos...</p>`;

  try {
    const res = await fetch("http://localhost:8000/products");
    const productos = await res.json();

    let html = "";

    if (categoria) {
      // Mostrar solo la categoría filtrada
      const filtrados = productos.filter(p => p.category === categoria);
      if (filtrados.length === 0) {
        container.innerHTML = ""; 
        return;
      }
      html += renderSection(categoria, filtrados);

    } else {
      // Mostrar solo las primeras 3 categorías únicas
      const categoriasUnicas = [...new Set(productos.map(p => p.category))].slice(0, 3);

      categoriasUnicas.forEach(cat => {
        const filtrados = productos.filter(p => p.category === cat);
        if (filtrados.length > 0) {
          html += renderSection(cat, filtrados);
        }
      });
    }

    container.innerHTML = html;

  } catch (error) {
    container.innerHTML = `<p class="text-red-500 text-center">Error cargando productos</p>`;
    console.error(error);
  }
});

function renderSection(categoria, productos) {
  let html = `
    <h2 class="text-2xl font-bold mb-6 capitalize">${categoria}</h2>
    <section class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
  `;

  productos.forEach(p => {
    html += `
      <div class="bg-white border border-gray-200 rounded-lg shadow-lg producto" data-id="${p.id}">
        
          <img class="p-8 cursor-pointer rounded-t-lg w-full object-contain h-60" src="${p.image}" alt="${p.title}" />
        
        <div class="px-5 pb-5">
          <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900">${p.title}</h5>
          </a>
          <div class="flex items-center mt-2.5 mb-5">
            <div class="flex items-center space-x-1">
              ${renderStars(p.rating)}
            </div>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm ml-3">${p.rating}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900">$${p.price}</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Añadir al carrito
            </a>
          </div>
        </div>
      </div>
    `;
  });

  html += `</section>`;

        setTimeout(() => {
          document.querySelectorAll(".producto").forEach(el => {
            console.log(el.getAttribute('data-id'))
            el.addEventListener("click", () => {
              const id = el.getAttribute('data-id');
              console.warn(id)
              const producto = productos.find(p => p.id == id);
              if (producto) openProductModal(producto);
            });
          });
        }, 0);

  return html;
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
