var path = require('path');
var webpack = require('webpack');

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    content: path.resolve('js'),

    entry: {
        home: './js/home',
        products: './js/products'    
    }, 

    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/', 
        filename: '[name].js'
    },

    plugins: [commonsPlugin],

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