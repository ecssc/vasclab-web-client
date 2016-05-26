var path = require('path');

var config = {
    target: 'web',
    devTool: 'source-map',
    entry: path.resolve(__dirname, 'app/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react', 'stage-2']
            }
        }]
    }
};

module.exports = config;
