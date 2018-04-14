const path = require('path');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: [path.join(__dirname, "dist"),path.join(__dirname, "input_examples")],
        port: 9000
    }

};
