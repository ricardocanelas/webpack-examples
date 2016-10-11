var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

const config =  {

    entry: './assets/js/main.jsx',

    output: {
        // path: A place where you store bundle.js and index.html
        path: path.resolve(__dirname, './dist'),

        // publicPath: Used by plugins(url-loader, file-loader, HtmlWebpackPlugin etc)
        // to generate url paths for images, stylesheets etc.
        // e.g:
        // .image{ background-image: url('./test.png');
        // will become:
        // .image{ background-image: url('/dist/test.png');
        publicPath: '/dist/',
        filename: 'main-build.js'
    },

    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /\node_modules/,
                loader: 'babel'
            },
            // {
            //     test: /\.(woff|woff2|ttf|eot)$/,
            //     loader: 'url?limit=10000'
            // },
            {
                test: /\.obj|\.mtl|\.html|\.dae|\.txt/,
                loader: "raw"
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader'
            },
            {
                test: /\.(png|jpg|gif)$/,
                exclude: /\node_modules/,
                loader: 'file',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                //loader: 'style-loader!css-loader?sourceMap!sass-loader'
                loader: 'style!css!sass!resolve-url!sass?sourceMap'
                // 1 sass-loader: converts scss files to files
                // 2 resolver-url-loader: resolve all problem with url
                // 2 css-loader: loads up the css
                //               irá carregar todoo o arquivo CSS e suas dependências
                // 3 style-loader: converts the css into inline stylesheets
                //                 e injetar automáticamente no seu arquivo HTML.
            },
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract({
            //         fallbackLoader: "style-loader",
            //         loader: "css-loader!sass-loader"
            //     })
            // }
        ]
    },



    devServer: {
        historyApiFallback: true,
        noInfo: true
    },



    sassLoader: {
        includePaths: [ 'assets/scss' ]
    },



    devtool: 'source-map',


    // externals: {
    //     "jquery": "jQuery"
    // }



    // Use the plugin to specify the resulting
    // filename (and add needed behavior to the compiler)
    // plugins: [
    //     new ExtractTextPlugin("style-build.css")
    // ],


    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ],


    // resolve: irá resolver caminhos de importação
    //          sem precisar saber a extensão do arquivo, tais como
    resolve: {
        extensions: ['', '.js', '.jsx']
    }

};


module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ])
}


