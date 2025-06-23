import { API_URL } from "./port.js";

export class ProductServices {
  static async getProduct() {
  try {
    const respuesta = await fetch(API_URL);
      const datos = await respuesta.json();
      console.log(datos);
    } catch (error) {
      console.error("Hubo un problema al obtener los datos", error);
    }
  };

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