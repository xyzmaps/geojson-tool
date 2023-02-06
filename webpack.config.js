/*
 * Copyright (C) 2019 HERE Europe B.V.
 * Licensed under MIT, see full license in LICENSE
 * SPDX-License-Identifier: MIT
 */

const webpack = require("webpack"),
		path = require("path"),
		HtmlWebpackPlugin = require("html-webpack-plugin"),
		MonacoWebpackPlugin = require('monaco-editor-webpack-plugin'),
		CopyWebpackPlugin = require('copy-webpack-plugin');

// Check if environment variables for keys are defined
if(process.env.APIKEY === undefined) {
	console.log('oops! APIKEY is not defined');
	console.log('Make sure to run "export APIKEY=<token>" before npm run start or npm run build');
	console.log('You can get the APIKEY at https://developer.here.com');
	process.exit(-1);
}

module.exports = {
	stats: 'errors-only',
	mode: 'development',
	entry: [
		"./src/index.js"
	],
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, 'dist')
	},
	devServer: {
		// inline: true,
		static: {
			directory: path.resolve(__dirname, 'dist')
		},
		port:3000
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: "babel-loader"
			},
			{
				test: /\.css$/,
				use: [
					{ loader:  "style-loader"},
					{ loader: "css-loader"}
				]
			},
			{
				test: /\.html$/,
				loader: require.resolve('html-loader'),
			}
			// {
			// 	test: /\.svg(\?.*)?$/,
			// 	issuer: /\.js$/,
			// 	loader: 'svg-inline-loader'
			// },
			// {
			// 	test:  /\.(jpe?g|png|gif)$/i,
			// 	loader: 'file-loader',
			// 	// options: {
			// 	// 	name: 'images/[name].[ext]',
			// 	// 	publicPath: '/'
			// 	// }
			// }
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			template: './src/index.html',
			favicon: './src/images/logo.svg'
		}),
		new webpack.DefinePlugin({
			'creds': {
				'APIKEY': JSON.stringify(process.env.APIKEY)
			}
		}),
		new MonacoWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{ from: "./src/images", to: "./images" },
			],
		})
	],
/*	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	},*/
	resolve: {
		fallback: {
			dgram: false,
			fs: false,
			net: false,
			tls: false,
			child_process: false
		},
		modules: ['node_modules'],
extensions: ['.js', '.scss', '.html', '.css']
}
}
