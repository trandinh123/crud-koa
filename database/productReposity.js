const { data: products } = require('./products');
const { writeFileSync } = require('fs')
function getAll() {
  return products;
}

function getOne(id) {
  return products.find((product) => parseInt(id) === product.id);
}

function add(data) {
  const updateProducts = [data, ...products];
  return writeFileSync(
    './database/products.json',
    JSON.stringify({
      data: updateProducts,
    })
  );
}

function update(data, id) {
  let currentProduct = products.find(product => product.id === parseInt(id));
  let newProducts = products.filter((product) => parseInt(id) !== product.id);
  currentProduct = Object.assign(currentProduct, data);
  newProducts = [...newProducts, currentProduct];
  return writeFileSync(
    './database/products.json',
    JSON.stringify({
      data: newProducts,
    })
  );
}
function remove(id) {
  const updateProducts = products.filter((product) => product.id !== parseInt(id));
  return writeFileSync(
    './database/products.json',
    JSON.stringify({
      data: updateProducts,
    })
  );
}
module.exports = {
  getAll,
  getOne,
  add,
  remove,
  update
};
