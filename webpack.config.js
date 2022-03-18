const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/index.jsx',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@components': path.resolve(__dirname, './src/components'),
			'@containers': path.resolve(__dirname, './src/containers'),
			'@core': path.resolve(__dirname, './src/core'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@routes': path.resolve(__dirname, './src/routes'),
		},
	},
	output: {
		filename: 'bundle.js',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public/'),
		},
		port: 3000,
		devMiddleware: {
			publicPath: 'https://localhost:3000/dist/',
		},
		hot: 'only',
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devtool: 'eval-source-map',
};
