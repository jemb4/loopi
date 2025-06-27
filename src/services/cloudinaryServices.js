export const CloudinaryService = {
  async uploadImage(file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "loopi_images");

    formData.forEach((v, k) => console.log(k, v));

    const res = await fetch(`https://api.cloudinary.com/v1_1/dkeilrzir/image/upload`, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) throw new Error("Error al subir imagen a Cloudinary");

    const data = await res.json();
    return data.secure_url;
  },
};