const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry:'./src/index.js',
	output:{
		filename:'bundle.js',
		path: path.resolve(__dirname,'dist'),
		publicPath:'/'
	},
	devtool: 'inline-source-map',
    devServer: {
    	contentBase:"./dist"
    },
	plugins:[
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title:'zutor'
		})
	],
	module: {
		rules: [{
			test: /\.css$/,
			use: [
				'style-loader',
				'css-loader'
			]
		},{
			test: /\.(png|jpg|jpeg|gif)$/,
			use: [
				'file-loader'
			]
		}]
	}
};