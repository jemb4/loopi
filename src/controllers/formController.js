import { ProductServices } from "../services/ProductServices.js";
import { CloudinaryService } from "../services/cloudinaryServices.js";

const form = document.getElementById('product-form')

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  e.stopPropagation();
  if (!form) {
    console.error('No se encontró el formulario en el DOM');
}

  const fileInput = document.getElementById('image');
  const fileImage = fileInput.files[0];
  
  try {
    const imageUrl = fileImage 
    ? await CloudinaryService.uploadImage(fileImage)
    : 'https://www.mdvacationclub.com/wp-content/uploads/2018/12/Placeholder.png';
    
    console.log( 'TEEEEST')

    const data = {
      title: document.getElementById('title').value,
      category: selectCategory(document.getElementById('category').value),
      price: Number(document.getElementById('price').value),
      image: imageUrl,
      condition: document.getElementById('condition').value,
      year: Number(document.getElementById('year').value),
      description: document.getElementById('description').value,
      rating: 0
    }

    await ProductServices.postProduct(data);
    console.log("Producto creado, redirigiendo...");
     window.location.href = '/index.html';

  } catch (error) {
    console.error('Error al crear el producto', error);
    alert('Ha ocurrido un error al guardar el producto');
  }
})

const selectCategory = (category) => {
  if (category === 'Smartwatch') return 'smartwatches'
  if (category === 'Laptops') return 'laptops'
  if (category === 'Smartphone') return 'mobiles'
}