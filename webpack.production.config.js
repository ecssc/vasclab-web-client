var path = require('path');
var webpack = require('webpack');

var config = {
    target: 'web',
    devTool: 'cheap-module-source-map',
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }]
    },
    plugins: [
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
                unused: true,
                dead_code: true,
                warnings: false,
                screw_ie8: true
            },
            compressor: {
                warnings: false
            }
        })
    ],
};

module.exports = config;
