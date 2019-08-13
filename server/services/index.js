const rp = require('request-promise');
const logger = require('../utils/logger');

class ProductService {
  constructor() {
    this.logger = logger;
    this.rp = rp;
  }

  searchProduct({
    search,
    resolve,
    reject,
  }) {
    const Logger = this.logger('Search Product');
    const message = 'Searching Products';
    Logger.debug('Searching Products');

    this.rp(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`)
      .then((response) => {
        Logger.info(`${message} | SUCCESS`);
        let { results } = JSON.parse(response);
        results = results.map(({
          id,
          title,
          price,
          thumbnail,
        }) => ({
          id,
          title,
          price,
          thumbnail,
        }));
        resolve(results);
      })
      .catch((error) => {
        Logger.error(`${message} | ERROR=${JSON.stringify(error)}`);
        reject();
      });
  }

  getProductDetails({
    id: productId,
    resolve,
    reject,
  }) {
    const Logger = this.logger('Product Details');
    const message = 'Getting Product Details';
    Logger.debug(message);

    const getProduct = this.rp(`https://api.mercadolibre.com/items/${productId}`);
    const getDetails = this.rp(`https://api.mercadolibre.com/items/${productId}/description`);

    Promise.all([getProduct, getDetails])
      .then((response) => {
        Logger.info(`${message} | SUCCESS`);
        const {
          id,
          title,
          price,
          pictures,
        } = JSON.parse(response[0]);
        const { plain_text: description } = JSON.parse(response[1]);

        resolve({
          id,
          title,
          price,
          pictures,
          description,
        });
      })
      .catch((error) => {
        Logger.error(`${message} | ERROR=${JSON.stringify(error)}`);
        reject();
      });
  }
}

module.exports = ProductService;
