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
            /* cacheDirectory: Default false. When set, the given directory will be used to cache the results of the loader. Future webpack builds will attempt to read from the cache to avoid needing to run the potentially expensive Babel recompilation process on each run. If the value is set to true in options ({cacheDirectory: true}), the loader will use the default cache directory in node_modules/.cache/babel-loader or fallback to the default OS temporary file directory if no node_modules folder could be found in any root directory. */
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