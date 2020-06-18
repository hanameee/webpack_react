const path = require("path");

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
                test: /\.png$/,
                loader: "file-loader",
                options: {
                    publicPath: "./dist/",
                    name: "[name].[ext]?[hash]",
                },
            },
        ],
    },
};
