const path = require('path');

module.exports = [
    {
        mode: "development",
        entry: './src/index.js',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: [
                path.join(__dirname, "dist"),
                path.join(__dirname, "input_examples"),
                path.join(__dirname, "static")
            ],
            port: 9000
        }
    }, {
        mode: "development",
        target: "node",
        entry: './src/index_node.js',
        output: {
            filename: 'bundle_node.js',
            path: path.resolve(__dirname, 'dist')
        }
    }
];
