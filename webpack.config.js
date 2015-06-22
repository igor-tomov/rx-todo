module.exports = {
    entry: __dirname + '/src/client',

    output: {
        path: __dirname + '/public/assets/js/dist/',
        filename: "todomvc.bundle.js"
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.jsx$/, loader: "jsx-loader" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};