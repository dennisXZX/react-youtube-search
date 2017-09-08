const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: {
    main: './src/index.js'
  },
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build'),
		publicPath: 'build/'
	},
  module: {
    rules: [
	    {
	    	test: /\.js$/,
		    use: 'babel-loader'
			},
			{
				test: /\.scss$/,
        use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader'
						}, 
						{
							loader: 'sass-loader'
						}
					],
					fallback: 'style-loader'
				})
			},
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
						use: [
							{
								loader: 'css-loader'
							}
						],
						fallback: 'style-loader'
				})
			},
			{
				test: /\.(ttf|eot|svg|otf|woff|woff2)$/,
				loader: 'file-loader',
				options: {
					name: 'fonts/[name].[ext]',
				}
			},			
    ]
  },
	plugins: [
		new ExtractTextPlugin('styles.css')
	]
};

module.exports = config;