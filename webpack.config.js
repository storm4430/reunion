var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./dist/App.js'],
    output: {
        path: __dirname,
        filename: './public/js/bundle.js'},

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