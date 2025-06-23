import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const CloudinaryService = {
  async uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "loopi_unsigned"); // tu preset aquí

    const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudinary.config.cloud_name}/image/upload`, {
      method: "POST",
      body: formData,
    });

    console.log(res)
    if (!res.ok) throw new Error("Error al subir imagen a Cloudinary");

    const data = await res.json();
    return data.secure_url; // URL pública de la imagen
  },
};