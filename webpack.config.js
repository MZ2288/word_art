const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new Dotenv(),
  ],
  watchOptions: {
    ignored: /node_modules/
  },
}