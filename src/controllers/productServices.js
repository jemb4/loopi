import { ProductServices } from "../services/productServices.js";

const productController = async (id) => {
  return await ProductServices.getSingleProduct(id);
}

productController(1)