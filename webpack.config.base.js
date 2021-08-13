var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    entry: "./src/index.js", //默认的入口就是 index.js
    output: {
        path: path.resolve(__dirname, "dist"), //默认生成 dist 文件夹
        filename: "[name].[contenthash].js", //打包后的文件名
    },
    plugins: [new HtmlWebpackPlugin({
        title: '飞飞的 webpack-demo-2',
        template: 'src/assets/test.html' //用我给你的模板来生成 html
    }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // 将 JS 字符串生成为 style 节点
                    'style-loader',
                    // 将 CSS 转化成 CommonJS 模块
                    'css-loader',
                    // 将 Sass 编译成 CSS
                    {
                        loader: "sass-loader",
                        options: {
                            implementation:require('dart-sass')
                        }
                    }
                ],
            },
        ],
    },
};

