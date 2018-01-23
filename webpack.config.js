const webpack = require('webpack');

module.exports = {
	entry: './components/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						compact: false,
						presets: ['babel-preset-metal-jsx']
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			}
		]
	},
	output: {
		library: 'metal',
		libraryTarget: 'this',
		filename: './index.js'
	},
	plugins: [new webpack.optimize.ModuleConcatenationPlugin()]
};
