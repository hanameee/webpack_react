const path = require("path");
const webpack = require("webpack");
const banner = require("./banner.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
    mode: devMode ? "development" : "production",
    entry: {
        main: "./src/App.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve("./dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    devMode ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            useRelativePath: true,
                            name: "[name].[ext]?[hash]",
                            limit: 5000, // 5kb 미만 파일만 data url로 처리
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new webpack.BannerPlugin(banner),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify("v.1.2.3"),
            PRODUCTION: JSON.stringify(false),
            MAX_COUNT: JSON.stringify(999),
            "api.domain": JSON.stringify("https://hanameee.github.io/"),
            TWO: "1+1",
            NAME: JSON.stringify("HANNAH"),
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            templateParameters: {
                env: process.env.NODE_ENV === "development" ? "(개발용)" : "",
            },
            minify:
                process.env.NODE_ENV === "production"
                    ? {
                          collapseWhitespace: true,
                          removeComments: true,
                      }
                    : false,
            hash: true,
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? `[name].css` : "[name].[hash].css",
            chunkFilename: devMode ? `[id].css` : "[id].[hash].css",
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        publicPath: "/",
        overlay: true,
        port: 8080,
        stats: "errors-only",
        historyApiFallback: true,
    },
};
