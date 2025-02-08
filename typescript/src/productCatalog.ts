interface Product {
  productname: string;
  price: number;
  isAvailable: boolean;
  category: category;
}

enum category {
  Electronics,
  Clothing,
  Grocery,
}

let products: Product[] = [
  {
    productname: "Smartphone",
    price: 699,
    isAvailable: true,
    category: category.Electronics,
  },
  {
    productname: "Dress",
    price: 500,
    isAvailable: true,
    category: category.Clothing,
  },
];

products.forEach((product) => {
  console.log(`Product Name: ${product.productname}`);
  console.log(`Price: $${product.price}`);
  console.log(`Available: ${product.isAvailable ? "Yes" : "No"}`);
  console.log(`Category: ${category[product.category]}`);
  console.log("");
});
