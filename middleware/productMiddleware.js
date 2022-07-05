const yup = require('yup');

async function productInputMiddleware(ctx, next) {
  try {
    const postData = ctx.request.body;
    let schema = yup.object().shape({
      id: yup.number().positive().integer().required(),
      name: yup.string().required(),
      price: yup.number().positive().required(),
      description: yup.string().required(),
      product: yup.string().required(),
      color: yup.string().required(),
      image: yup.string().required(),
    });
    await schema.validate(postData);
    next();
  } catch (e) {
    ctx.status = 400;
    return (ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name,
    });
  }
}

async function productUpdateMiddleware(ctx, next) {
  try {
    const postData = ctx.request.body;
    let schema = yup.object().shape({
      id: yup.number().positive().integer(),
      name: yup.string(),
      price: yup.number().positive(),
      description: yup.string(),
      product: yup.string(),
      color: yup.string(),
      image: yup.string(),
    });
    await schema.validate(postData);
    next();
  } catch (e) {
    ctx.status = 400;
    return (ctx.body = {
      success: false,
      errors: e.errors,
      errorName: e.name,
    });
  }
}
module.exports = {productInputMiddleware, productUpdateMiddleware};
