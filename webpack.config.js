const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.ts',
    target: 'node',
    mode: "none",
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        // new webpack.ContextReplacementPlugin(/moment[\\\/]locale$/, /^\.\/(en-gb|zh-tw|zh-hk)$/),
        // new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            'hiredis': path.join(__dirname, 'aliases/hiredis.js')
        }
    },
    output: {
        filename: 'easyBot.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimize: false
    }
};