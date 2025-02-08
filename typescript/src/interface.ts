interface Products {
  id: number;
  name: string;
  price: number;
}
let product: Products[] = [
  { id: 1, name: "Product A", price: 100 },
  { id: 2, name: "Product B", price: 200 },
];

function displayDetails(product: Products): void {
  console.log(`id:${product.id}, name:${product.name}, price:${product.price}`);
}

displayDetails(product[0]);
