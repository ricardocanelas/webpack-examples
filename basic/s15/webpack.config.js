var path = require('path');

module.exports = {
    content: path.resolve('js'),

    entry: ['./js/app'], 

    output: {
        path: path.resolve('build/'),
        publicPath: '/public/assets/', 
        filename: 'bundle.js'
    },

    devServer: {
        contentBase: 'public'
    },

    module:{
        loaders: [
            {
                test: /\.css$/,
                exclude: /\node_modules/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.(woff|woff2|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.(png|jpg|eot|ttf)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}