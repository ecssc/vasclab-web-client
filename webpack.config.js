var path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    InlineEnviromentVariablesPlugin = require('inline-environment-variables-webpack-plugin'),
    DotenvPlugin = require('webpack-dotenv-plugin');

var config = {
    target: 'web',
    devTool: 'source-map',
    entry: path.resolve(__dirname, 'src/index.jsx'),
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
                loaders: ['style', 'css', 'sass'],
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
        new HtmlWebpackPlugin({
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
    externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
    },
    devServer: {
        open: true,
        progress: true,
        colors: true,
        historyApiFallback: true,
        contentBase: 'build'
    }
};

module.exports = config;
