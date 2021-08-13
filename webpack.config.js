var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base')
module.exports = {
    ...base,
      mode: "development",

  module: {

    rules: [
      ...base.module.rules,
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}

