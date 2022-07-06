const Router = require('koa-router');
const render = require('koa-ejs');
const {
  getAll: getAllProducts,
  getOne: getOneProduct,
} = require('../database/productReposity');
const bookHandler = require('../handlers/books/bookHandler');
const productHandler = require('../handlers/products/productHandler');
const { productInputMiddleware, productUpdateMiddleware } = require('../middleware/productMiddleware');


router = new Router();


router.get('/products', async (ctx) => {
  const products = getAllProducts() 
  await ctx.render('products', {
    products: products
  })
})

router.get('/products/:id', async (ctx) => {
  const { id } = ctx.params;
  const product = getOneProduct(id)
  await ctx.render('singleProduct', {
    product
  })
})

router.get('/api/books', bookHandler.getBooks);
router.get('/api/books/:id', bookHandler.getBook);
router.post('/api/books', bookHandler.save);

router.get('/api/product', productHandler.getProducts);
router.get('/api/product/:id', productHandler.getProduct);
router.post('/api/product', productInputMiddleware, productHandler.save);
router.put('/api/product/:id', productUpdateMiddleware, productHandler.update)
router.delete('/api/product/:id', productHandler.remove);
module.exports = router;
