const Dotenv = require('dotenv-webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new Dotenv(),
  ],
  watchOptions: {
    ignored: /node_modules/,
  },
}
