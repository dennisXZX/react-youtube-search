const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// create a Webpack config file
const config = {
	entry: {
    main: './src/index.js'
  },
	output: {
		filename: 'bundle.js',
		// the output will be generated in the build folder of the current directory
		path: path.resolve(__dirname, 'build'),
		publicPath: 'build/'
	},
  module: {
    rules: [
	    {
	    	test: /\.js$/,
		    // handle js files, babel-loader will look at the .babelrc for Babel config on how to deal with js files
		    use: 'babel-loader'
			},
			{
				test: /\.scss$/,
        use: ExtractTextPlugin.extract({
					use: [{
							loader: "css-loader"
					}, {
							loader: "sass-loader"
					}],
					// use style-loader in development
					fallback: "style-loader"
				})
			}
    ]
  },
	plugins: [
		new ExtractTextPlugin("styles.css")
	]
};

module.exports = config;