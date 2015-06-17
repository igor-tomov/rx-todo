module.exports = {
    entry: __dirname + '/src/client',

    output: {
        path: __dirname + '/public/js/bundles/',
        filename: "todomvc.bundle.js"
    },

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel-loader" },
            { test: /\.jsx$/, loader: "jsx-loader" },
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};