const Router = require('koa-router');
const bookHandler = require('../handlers/books/bookHandler');
const productHandler = require('../handlers/products/productHandler');
const { productInputMiddleware, productUpdateMiddleware } = require('../middleware/productMiddleware');
router = new Router({
  prefix: '/api',
});

router.get('/books', bookHandler.getBooks);
router.get('/books/:id', bookHandler.getBook);
router.post('/books', bookHandler.save);

router.get('/product', productHandler.getProducts);
router.get('/product/:id', productHandler.getProduct);
router.post('/product', productInputMiddleware, productHandler.save);
router.put('/product/:id', productUpdateMiddleware, productHandler.update)
router.delete('/product/:id', productHandler.remove);
module.exports = router;
