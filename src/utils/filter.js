const products = [
  {
    id: 1,
    title: "iPhone 12",
    category: "mobiles",
    price: 390,
    description: "iPhone 12 usado",
    image: "iphone12.jpg",
    condition: "reacondicionado",
    year: 2020,
    rating: 4.5
  },
  {
    id: 2,
    title: "Samsung Galaxy S21",
    category: "mobiles",
    price: 420,
    description: "Samsung en buen estado",
    image: "galaxyS21.jpg",
    condition: "usado",
    year: 2021,
    rating: 4.2
  }
];

export const searchProduct = () => products;

export const searchProductForId = (id) => {
  return products.find(p => p.id === id);
};

export const searchProductForCategory = (category) => {
  return products.filter(p => p.category === category);
};

export const searchProductForCondition = (condition) => {
  return products.filter(p => p.condition === condition);
};

export const addProduct = (newProduct) => {
  products.push(newProduct); // ✅ 
};