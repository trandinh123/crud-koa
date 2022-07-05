const { writeFileSync } = require('fs');
const { faker } = require('@faker-js/faker');

function generate() {
  let products = [];
  for (let i = 1; i < 1001; i++) {
    const name = faker.commerce.productName();
    const price = faker.commerce.price();
    const description = faker.commerce.productDescription();
    const product = faker.commerce.product();
    const color = faker.color.human();
    const createdAt = Date.now();
    const image = faker.image.business();
    const newProduct = {
      id: i,
      name,
      price,
      description,
      product,
      color,
      createdAt,
      image,
    };
    products = [...products, newProduct];
  }
  writeFileSync('./products.json', JSON.stringify({ data: products }));
}
generate();
