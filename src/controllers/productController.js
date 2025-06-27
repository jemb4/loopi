import { ProductServices } from "../services/ProductServices.js";

const productController = async (id) => {
  return await ProductServices.getSingleProduct(id);
}