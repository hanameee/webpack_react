const path = require("path");
const MyPlugin = require("./src/myplugin");

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
    plugins: [new MyPlugin()],
};
