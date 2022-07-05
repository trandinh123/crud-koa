const {
  getAll: getAllBooks,
  getOne: getOneBook,
  add: addBook,
} = require('../../database/bookRepository');

async function getBooks(ctx) {
  try {
    const books = getAllBooks();

    ctx.body = {
      data: books,
    };
  } catch (err) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      message: err.message,
    };
  }
}

async function getBook(ctx) {
  try {
    const { id } = ctx.params;
    const book = getOneBook(id);
    if (book) {
      return (ctx.body = {
        data: book,
      });
    }

    ctx.status = 404;
    return (ctx.body = {
      success: false,
      message: `No book with id ${id}`,
    });
  } catch (err) {
    ctx.body = {
      success: false,
      message: err.message,
    };
  }
}

async function save(ctx) {
  try {
    const postData = ctx.request.body;
    addBook(postData);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
    });
  } catch (err) {
    return (ctx.body = {
      success: false,
      error: err.message,
    });
  }
}
module.exports = { getBooks, getBook, save };
