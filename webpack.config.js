module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname+"/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "dist/"
  }
}
