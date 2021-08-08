
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
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
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
    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        open: true,
    },
}
