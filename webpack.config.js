var path = require('path');
var webpack = require('webpack');
var CompressionPlugin = require('compression-webpack-plugin');

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
        }),

    new CompressionPlugin({
        asset: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.html$/,
        threshold: 10240,
        minRatio: 0.8
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