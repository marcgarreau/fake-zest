module.exports = {
  entry: './index',
  output: {
    filename: 'zest.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  }
};
