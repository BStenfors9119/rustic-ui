const   merge = require('webpack-merge'),
        path = require('path'),
        common = require('./webpack.common');

module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "public/"),
        port: 1977,
        publicPath: "http://localhost:1977/dist/",
        hotOnly: true,
        historyApiFallback: true
    }
});