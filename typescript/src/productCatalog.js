"use strict";
var category;
(function (category) {
    category[category["Electronics"] = 0] = "Electronics";
    category[category["Clothing"] = 1] = "Clothing";
    category[category["Grocery"] = 2] = "Grocery";
})(category || (category = {}));
let products = [
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
