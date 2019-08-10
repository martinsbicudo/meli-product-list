const withPlugins = require('next-compose-plugins');
const plugins = require('./plugins');
const aliases = require('./aliases');
const rules = require('./rules');

// NEXT CONFIG
const nextConfig = {
  distDir: '../build',
  webpack: (config) => {
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

    // RESOLVE EXTENSIONS
    config.resolve.extensions.push(
      '.scss',
    );

    // Resolve paths ROOT and Config
    config.resolve.alias = {
      ...config.resolve.alias,
      ...aliases,
    };

    // Plugins
    config = plugins.defaults(config);

    return config;
  },
};

module.exports = withPlugins([
  ...plugins.next,
], nextConfig);
