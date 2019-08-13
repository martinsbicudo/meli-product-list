const ProductService = require('../services');
const logger = require('../utils/logger');

const Product = new ProductService();
const Logger = logger('Routes');

module.exports = (router) => [
  router.get('/health-check', (req, res) => {
    res.sendStatus(200);
  }),

  router.get('/search/:search', (req, res) => {
    const { search } = req.params;
    Logger.debug(`Search Product with query=${search}`);

    Product.searchProduct({
      search,
      resolve: (results) => res.status(200).json(results),
      reject: () => res.sendStatus(404),
    });
  }),

  router.get('/items/:id', (req, res) => {
    const { id } = req.params;
    Logger.debug(`Get Product Details with id=${id}`);

    Product.getProductDetails({
      id,
      resolve: (result) => res.status(200).json(result),
      reject: () => res.sendStatus(404),
    });
  }),
];
