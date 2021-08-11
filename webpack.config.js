const path = require('path');

module.exports = {
  entry: './client/static/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js',
  },
};