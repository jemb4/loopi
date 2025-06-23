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
export class ProductServices {
  static async deleteProduct(id) {
    try {
      const res = await fetch(`http://localhost:8000/products/${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) throw new Error('Error al eliminar producto');

      console.log(`Producto con ID ${id} eliminado correctamente.`);
      return true;
    } catch (error) {
      console.error('Error al eliminar producto:', error);
      throw error;
    }
  }
}



