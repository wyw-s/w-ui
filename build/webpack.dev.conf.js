
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: './example/index.js',
    output: {
        filename: 'js/[name]_[hash:8].js',
        path: path.resolve(process.cwd(), 'dist'),
    },
    resolve: {
        alias: {
            '@': path.resolve(process.cwd(), './example'),
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    'less-loader'
                ],
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                path.resolve(process.cwd(), 'dist'),
            ],
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'W-UI',
            filename: 'index.html',
            template: path.resolve(process.cwd(), 'example/pages/template.html')
        }),
    ],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        open: true,
    },
}
