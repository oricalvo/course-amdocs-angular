const path = require("path");

module.exports = {
    devtool: "inline-source-map",
    entry: "./app.module.ts",
    resolve: {extensions: [".ts", ".js"]},
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "ts-loader"
                    },
                    {
                        loader: "angular2-template-loader",
                    }
                ]
            },
            {
                test: /\.html$/,
                use: "raw-loader",
            },
        ]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
