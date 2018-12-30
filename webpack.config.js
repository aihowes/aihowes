const webpack = require('webpack');
const path = require('path');

const config = {
    mode: 'production',
    entry: './src/index.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'bundle.js'
    }
}

module.exports = config;