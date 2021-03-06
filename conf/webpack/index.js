const withPlugins = require('next-compose-plugins');
const plugins = require('./plugins');
const aliases = require('./aliases');
const rules = require('./rules');

const webpack = (config) => {
  // Fixes npm packages that depend on `fs` module
  config.node = {
    net: 'empty',
    fs: 'empty',
    tls: 'empty',
  };

  // Setting Custom Rules
  config.module.rules.push(
    ...rules(config),
  );

  // Resolve paths ROOT and Config
  config.resolve.alias = {
    ...config.resolve.alias,
    ...aliases,
  };

  // Plugins
  config = plugins.defaults(config);

  return config;
};

// NEXT CONFIG
const nextConfig = {
  distDir: '../build',
  webpack,
};

exports.webpack = webpack;
exports.configs = withPlugins([
  ...plugins.next,
], nextConfig);
