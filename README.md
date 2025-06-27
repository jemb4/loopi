# 🛍️ Loopi - Marketplace CRUD

Una aplicación web que permite **crear**, **visualizar**, **buscar** y **gestionar productos** de manera intuitiva. Integra funcionalidades modernas como subida de imágenes con **Cloudinary**, filtrado por categorías y búsqueda en tiempo real.

---

## 📦 Características principales

- 🖼️ Subida de imágenes con [Cloudinary](https://cloudinary.com/)
- 🔍 Búsqueda de productos por nombre o descripción
- 🗂️ Visualización de productos por categoría
- 🛒 Modal interactivo con detalle de producto y sistema de valoración
- ➕ Crear productos nuevos desde un formulario
- 📋 Proyecto organizado con arquitectura clara y escalable

---

## ⚙️ Tecnologías utilizadas

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON--Server-333?style=flat-square&logo=json&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white)

---

## 🗂️ Estructura del proyecto

```
loopi/
├── index.html # Página principal
├── main.js # Script principal que renderiza productos
├── server/
│ ├── db.json # Base de datos local con productos
│ └── img # Imágenes mostradas desde el servidor
├── src/
│ ├── components/ # Componentes HTML reutilizables
│ ├── controllers/ # Lógica de negocio (formularios, productos)
│ ├── img/ # Imágenes (logos, íconos)
│ ├── services/ # Comunicación con JSON Server y Cloudinary
│ ├── styles/ # Archivos CSS
│ ├── utils/ # Funciones auxiliares (buscador, modal, etc.)
│ └── views/ # Vistas HTML (formulario de creación, modal)
```

---

## 🚀 Cómo ejecutar el proyecto

### 1. Clonar repositorio

```bash
git clone https://github.com/tuusuario/loopi
cd loopi
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Iniciar servidor JSON

```bash
npm run api
```

### 4. Abrir la app

Abre `index.html` en tu navegador usando una extensión como **Live Server** de VS Code o cualquier servidor local (por ejemplo, Vite, http-server, etc.).

---

## 📌 Funcionalidades por módulo

| Módulo                    | Descripción                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `index.html`              | Página principal con búsqueda, categorías y productos        |
| `singleProduct.html`      | Estructura del modal con detalles de producto                |
| `form.html`               | Formulario para crear nuevos productos                       |
| `productController.js`    | Lógica para manejo CRUD de productos                         |
| `modal-single-product.js` | Carga dinámica del modal con producto clicado                |
| `ProductServices.js`      | Comunicación con JSON Server (`GET`, `POST`, `DELETE`, etc.) |
| `buscador.js`             | Filtro en tiempo real de productos por texto                 |
| `modal-categorias.js`     | Abre/cierra el menú lateral de categorías                    |

---

## 🧪 Estado del proyecto

✅ Crear producto  
✅ Ver producto en detalle (modal)  
✅ Buscar productos  
✅ Filtrar por categoría  
✅ Subida de imágenes  
🚧 Filtro por precio, orden o valoraciones (en desarrollo)

---

## 📧 Equipo de Desarrollo

- [**Efrén** - _@EfrenTC_](https://github.com/EfrenTC)
- [**Jesús** - _@jemb4_](https://github.com/jemb4)
- [**Milca** - _@milcaponce_](https://github.com/milcaponce)
- [**Paula** - _@Kenhya12_](https://github.com/Kenhya12)
- [**Pablo** - _@Pablo-web-05_](https://github.com/Pablo-web-05)

---
