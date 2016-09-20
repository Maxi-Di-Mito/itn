/**
 * Created by maximiliano.dimito on 5/23/2016.
 */
var path = require('path');
var webpack = require('webpack');
const isProd = process.env.NODE_ENV === "production";

module.exports = {
    entry: [path.join(__dirname, './public/index.jsx')],
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'bundle.js'
    },
    resolve:{extensions:['','.js','.jsx','.css']},
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loaders: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style!css?modules',
                include: /flexboxgrid/
            }
        ]
    },
    plugins:isProd?[
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}),
        new webpack.optimize.DedupePlugin()
    ]:[]
};