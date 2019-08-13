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
}

module.exports = ProductService;
