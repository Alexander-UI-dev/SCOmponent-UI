const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
    return {
        mode: env.mode ?? "development",
        entry: {
            App: path.resolve(__dirname, 'src', 'App.js'),
            ui: path.resolve(__dirname, 'src', 'ui.js')
        },
        output: {
            path: path.resolve(__dirname, 'build'),
            filename: '[name].js',
            clean: true
        },
        plugins: [
            new MiniCssExtractPlugin({filename: "main.css"}),
            new HtmlWebpackPlugin({template: path.resolve(__dirname, 'public', 'index.html')}),
        ],
        module: {
            rules: [
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: [MiniCssExtractPlugin.loader, "css-loader"]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            ]
        }
    }
}