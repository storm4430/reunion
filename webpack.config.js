var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./dist/App.js'],
    output: {
        path: __dirname,
        filename: './public/js/bundle.min.js'},
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: true,
            compress: {
                warnings: false
            }
        })
    ],

    module : {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: 'node_modules',
                query:{
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
};