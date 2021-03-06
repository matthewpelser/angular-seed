const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');

// Note: some of these polys are dev deps; pull to dev config;
const polyfills = ['core-js/es6', 'core-js/es7/reflect', 'zone.js/dist/zone', 'zone.js/dist/long-stack-trace-zone'];

module.exports = {
	entry: {
		'app': [...polyfills, './src/main.ts']
	},
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
					'style-loader',
					'css-loader', 
					'sass-loader'
				]
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			}
		]
	},
	resolve: {
		extensions: [ '.ts', '.js' ]
	},
	output: {
		filename: '[name].js',
		path: helpers.root('./dist')
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					enforce: true
				},
			}
		} 
	},
	plugins: [
		// Workaround for angular/angular#11580, Fix for warnings;
		new webpack.ContextReplacementPlugin(
			/@angular(\\|\/)core(\\|\/)(@angular|esm5)/,
			helpers.root('./src')
		),
		new HtmlWebpackPlugin({
			template: 'src/index.html'
		})
	],
	devServer: {
		contentBase: helpers.root('./dist'),
		compress: true,
		port: 9000
	}
};