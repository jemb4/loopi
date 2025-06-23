import { API_URL } from "./port.js";

export class ProductServices {
  static async getSingleProduct(id) {
    try {
      const res = await fetch(`${API_URL}/${id}`);
      if (!res.ok) throw new Error('Producto no encontrado');
      const product = await res.json();
      console.log(product);
      
      return product;
    } catch (error) {
      console.error('Error al obtener el producto:', error);
      throw error;
    }
  }
}


//Milca_ Función Delete
function deleteProduct(id) {
  fetch(`http://localhost:3000/products/${id}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al eliminar');
      }

      console.log(`Product with ID ${id} deleted successfully.`);
    })
    .catch(error => {
      console.error('Error al eliminar producto:', error);
    });
}

