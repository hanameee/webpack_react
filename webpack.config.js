const path = require("path");
const webpack = require("webpack");
const banner = require("./banner.js");

module.exports = {
    mode: "development",
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
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: "url-loader",
                        options: {
                            publicPath: "./dist/",
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
    ],
};
