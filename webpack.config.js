const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
	entry: {
		main: "./script",
		style: "./style",
		second: "./2"
	},
	module: {
		rules: [
			//ts
			{
				test: [
					/\.tsx?$/,
				],
				use: [
					'ts-loader',
				],
				exclude: /node_modules/,
			},
			// less
			{
				test: [
					/\.less$/i,
				],
				use: [
					"style-loader",
					"css-loader",
					"less-loader",
				],
				exclude: /node_modules/,
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.less'],
	},

	output: {
		filename: "[name]_[contenthash]_bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
	watch: true,
};

