module.exports = {
    entry: ['./plugin.js', './app.js'], 
    output: {
        filename: 'bundle.js'
    },

    watch: true, 

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