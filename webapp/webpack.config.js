const webpack = require('webpack');
const path = require('path');

module.exports = () => {
    return {
				context: __dirname,
        entry: {
            main: './main.ts'
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].bundle.js'
        },
        resolve: {
            extensions: ['.js', '.ts', '.html']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    loaders: [
                        'awesome-typescript-loader?{configFileName: "webapp/tsconfig.json"}',
                        'angular2-template-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
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
