module.exports = {
  entry: './src/index',
  output: {
    path: __dirname,
    filename: 'coverup.min.js',
    libraryTarget: 'umd',
    library: 'Coverup',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ],
  },
}
