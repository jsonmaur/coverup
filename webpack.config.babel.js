export default {
  entry: './src/index',
  output: {
    path: __dirname,
    filename: 'mask.min.js',
    libraryTarget: 'umd',
    library: 'Mask',
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ],
  },
}
