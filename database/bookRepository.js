const { data: books } = require('./books.json');
const { writeFileSync } = require('fs');
/**
 *
 * @returns {[{author: string, name: string, id: number}, {author: string, name: string, id: number}, {author: string, name: string, id: number}, {author: string, name: string, id: number}]}
 */
function getAll() {
  return books;
}

/**
 *
 * @param id
 * @returns {{author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number} | {author: string, name: string, id: number}}
 */
function getOne(id) {
  return books.find((book) => book.id === parseInt(id));
}

function add(data) {
  const updateBooks = [data, ...books];
  return writeFileSync(
    './books.json',
    JSON.stringify({
      data: updateBooks,
    })
  );
}
module.exports = {
  getOne,
  getAll,
  add,
};
