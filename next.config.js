const path = require('path');

module.exports = {
  trailingSlash: true,
  reactStrictMode: false,
 
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision'),
      redocx: path.resolve(__dirname, './node_modules/redocx')
    };

    return config;
  }
};