var path = require('path'),
    webpack = require('webpack'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin'),
    DotenvPlugin = require('webpack-dotenv-plugin');

var globals = {
    React: 'react',
    ReactDom: 'react-dom',
    ReactRouter: 'react-router'
};

var config = {
    target: 'web',
    devTool: 'cheap-module-source-map',
    entry: {
        app: path.resolve(__dirname, 'src/index.jsx'),
        libs: Object.keys(globals).map(function(k){ return globals[k]; })
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '/js/bundle.[hash].js',
        chunkFilename: '/js/bundle.[chunkhash].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass'),
                exclude: /flexboxgrid/
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
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
        }),
        new DotenvPlugin({
            sample: './.env.sample',
            path: './.env'
        }),
        new InlineEnviromentVariablesPlugin()
    ],
};

module.exports = config;
