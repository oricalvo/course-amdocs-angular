const path = require("path");

module.exports = {
    devtool: "inline-source-map",
    entry: "./main.ts",
    resolve: {extensions: [".ts", ".js"]},
    module: {
        rules: [
            {
                test: /\.html$/,
                use: "raw-loader",
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                ]
            },
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader"
                    },
                ]
            },
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
