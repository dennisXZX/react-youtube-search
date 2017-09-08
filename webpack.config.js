const path = require('path');
// extract CSS code into a separate file
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
	    	test: /\.css$/,
		    // handle css code, extract it to a separate file instead of injecting all CSS into bundle.js
		    // loaders will be applied from right to left
		    use: ExtractTextPlugin.extract({
			    fallback: 'style-loader',
			    use: 'css-loader'
		    })
	    }
    ]
  },
	plugins: [
		new ExtractTextPlugin('styles.css')
	]
};

module.exports = config;