const webpack = require('webpack')
const path = require('path')
const babelConfig = require('./babel.config')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: __dirname + '/src/Demo.bs',
  target: 'node',
  output: {
    path: __dirname + '/build',
    filename: 'Demo.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: [__dirname + '/src'],
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              ...babelConfig,
              cacheDirectory: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
}