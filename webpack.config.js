module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname+"/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "dist/"
  }
}
