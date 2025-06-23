import { ProductServices } from "../services/productServices.js";

const form = document.getElementById('product-form')

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    title: document.getElementById('title').value,
    category: document.getElementById('category').value,
    price: Number(document.getElementById('price').value),
    image: document.getElementById('image').value 
      ? document.getElementById('image').value
      : 'https://www.mdvacationclub.com/wp-content/uploads/2018/12/Placeholder.png',
    condition: document.getElementById('condition').value,
    year: Number(document.getElementById('year').value),
    description: document.getElementById('description').value
  }

  console.log(data);

  try {
    await ProductServices.crearProducto(data);
    window.location.href = 'index.html';

  } catch (error) {
    console.error('Error al crear el producto', error);
    alert('Ha ocurrido un error al guardar el producto');
  }
})