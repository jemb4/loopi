import { ProductServices } from "../services/ProductServices.js";

const productController = async (id) => {
  console.log('cualquier cosa')
  return await ProductServices.getSingleProduct(id);
}

productController(1)