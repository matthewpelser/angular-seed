const webpack = require('webpack');
const helpers = require('./helpers');

module.exports = {
	entry: {
		'integration': ['./test/e2e/main.ts']
	},
	watch: true,
	mode: 'development',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.ts$/,
				loaders: [
					'awesome-typescript-loader',
					'angular2-template-loader',
					'tslint-loader',
				]
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			{
				test: /\.scss$/,
				use: [
					'css-loader', 
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'css-loader'
				]
			}
		]
	},
	output: {
		filename: '[name].js',
		path: helpers.root('./bundle/e2e/integration')
	},
	resolve: {
		extensions: [ '.ts', '.js' ]
	},
	plugins: [
		// Workaround for angular/angular#11580, Fix for warnings;
		new webpack.ContextReplacementPlugin(
			/@angular(\\|\/)core(\\|\/)(@angular|esm5)/,
			helpers.root('./src')
		)
	]
};