
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './example/index.js',
    output: {
        filename: 'js/[name]_[hash:8].js',
        path: path.resolve(process.cwd(), 'dist'),
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(process.cwd(), './example'),
            '@packages': path.resolve(process.cwd(), './packages'),
        },
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['@babel/plugin-syntax-export-default-from']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: 'vue-loader',
                    },
                    {
                        loader: path.resolve(process.cwd(), './example/plugins/md-loader/index.js'),
                    }
                ],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'W-UI',
            filename: 'index.html',
            template: path.resolve(process.cwd(), 'example/pages/template.html')
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(process.cwd(), 'CNAME')},
            ],
        }),
    ],
};
