const IS_PROD = process.env.NODE_ENV === 'production';

module.exports = {
  IS_PROD,
  SERVER_PORT: process.env.PORT || '3000',
};
