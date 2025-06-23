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

  static async postProduct(data) {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert(`Añadido ${data.title} con éxito`)
  }
}