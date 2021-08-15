
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    module: {
        rules: [
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
    plugins: [],
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(process.cwd(), 'dist'),
        open: true,
    },
})
