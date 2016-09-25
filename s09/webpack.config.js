var path = require('path');

module.exports = {
    content: path.resolve('js'),

    entry: ['./js/plugin', './js/app.js'], 
    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/', // replace for path 
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'public'
    },

    module:{
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /\node_modules/,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.es6$/,
                exclude: /\node_modules/,
                loader: 'babel-loader',
                query: {
                   presets: ['es2015']
                }
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}