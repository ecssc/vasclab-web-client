var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    target: 'web',
    devTool: 'source-map',
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            cache: true,
            minify: {
                html5: true,
                removeComments: true,
                collapseWhitespace: true,
            },
            template: 'app/assets/templates/index.ejs'
        })
    ]
};

module.exports = config;
