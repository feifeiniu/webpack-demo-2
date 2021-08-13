var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require('./webpack.config.base')
module.exports = {
    ...base,
    mode: "production",
    plugins: [
        ...base.plugins,
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // all options are optional
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].[contenthash].css",
            ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            // you can specify a publicPath here
                            // by default it uses publicPath in webpackOptions.output
                            publicPath: "../",
                        },
                    },
                    "css-loader",
                ],//将 css 抽成文件的 use

            }
        ]
    }
}
