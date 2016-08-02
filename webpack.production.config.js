var path = require('path'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    target: 'web',
    devTool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '/js/app.[chunkhash].js'
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
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['js', 'css'], {
            root: path.resolve(__dirname, 'build'),
            verbose: false
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                mangle: true,
                unused: true,
                dead_code: true,
                warnings: false,
                screw_ie8: true
            },
            compressor: { warnings: false }
        }),
        new ExtractTextPlugin('css/app.[chunkhash].css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            hash: true,
            cache: true,
            minify: {
                html5: true,
                removeComments: true,
                collapseWhitespace: true,
            },
            template: 'src/assets/templates/index.ejs'
        })
    ],
};

module.exports = config;
