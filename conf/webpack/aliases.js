const path = require('path');

module.exports = {
  '@Client': path.resolve('./client'),
  '@Hoc': path.resolve('./client/hoc'),
  '@Actions': path.resolve('./client/store/actions'),
  '@Components': path.resolve('./client/components'),
  '@Containers': path.resolve('./client/containers'),
};
