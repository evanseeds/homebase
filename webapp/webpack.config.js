const webpack = require('webpack');
const path = require('path');

module.exports = () => {
    return {
        entry: {
            main: './main.ts'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader'
                }
            ]
        },
        devtool: 'inline-source-map',
				plugins: [
					new webpack.ContextReplacementPlugin(
					  /(.+)?angular(\\|\/)core(.+)?/,
					  path.resolve(__dirname, '../src')
					)
				]
    };
};
