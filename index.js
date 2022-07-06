const Koa = require('koa');
const koaBody = require('koa-body');
const routes = require('./routes/routes.js');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();

render(app, {
    root: path.join(__dirname, 'views'),
    layout: 'layout',
    viewExt: 'html',
    cache: false,
    debug: false,
  });



app.use(koaBody());
app.use(routes.routes());
app.use(routes.allowedMethods());

app.listen(5000);