var path = require('path');

module.exports = {
    content: path.resolve('js'),

    entry: ['./js/app'], 

    output: {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/', 
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
                test: /\.scss$/,
                exclude: /\node_modules/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(ttf|eot|svg)(\?[\s\S]+)?$/,
                loader: 'file-loader'
            },
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
}