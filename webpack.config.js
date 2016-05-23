var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
	entry: [
	    path.resolve(__dirname, 'src/js/main.js')
	],  
	output: {
		publicPath: '',
        path: path.resolve('dist'),
        filename: 'js/[name].min.js'
	},  
	module: {  
		loaders:[
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url?limit=3072&name=img/[hash:8].[name].[ext]' // 小于3k base64
            },
            {
            	test: /\.css$/, 
            	loader: ExtractTextPlugin.extract("style", "css")
            },
            {
            	test: /\.less$/, 
            	loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
            }
        ]
	},
	plugins: [
        new HtmlWebpackPlugin({
	        template: './src/a.html',
	        filename: '../dist/index.html',
	        inject: 'head'
	    }),
	    new ExtractTextPlugin("style/[name].css")
	]
}; 
