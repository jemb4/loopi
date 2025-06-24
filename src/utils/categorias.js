document.addEventListener("DOMContentLoaded", async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoria = urlParams.get("categoria"); // e.g. "mobiles"
  const container = document.getElementById("productos-container");

  if (!categoria) {
    container.innerHTML = `<p class="text-center text-gray-500">Categoría no especificada.</p>`;
    return;
  }

  try {
    const res = await fetch("http://localhost:8000/products");
    const productos = await res.json();

    const filtrados = productos.filter(p => p.category === categoria);

    if (filtrados.length === 0) {
      container.innerHTML = `<p class="text-center text-gray-500">No hay productos en esta categoría.</p>`;
      return;
    }

    // Renderizado de productos
    let html = `
      <section class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    `;

    filtrados.forEach(p => {
      html += `
        <div class="bg-white border border-gray-200 rounded-lg shadow-lg">
          <a href="#">
            <img class="p-8 rounded-t-lg w-full object-contain h-60" src="${p.image}" alt="${p.title}" />
          </a>
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
    container.innerHTML = html;

  } catch (error) {
    container.innerHTML = `<p class="text-red-500 text-center">Error cargando productos</p>`;
    console.error(error);
  }
});

function renderStars(rating) {
  const fullStar = `<svg class="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927..."/></svg>`;
  const emptyStar = `<svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927..."/></svg>`;
  const stars = Math.floor(rating);
  const empty = 5 - stars;
  return fullStar.repeat(stars) + emptyStar.repeat(empty);
}
