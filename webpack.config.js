var webpack = require('webpack');

var LOGGING_LEVELS = {
    ERROR: 0,
    WARN: 1,
    INFO: 2,
    DEBUG: 3
};

module.exports = {
    resolve: {
        alias: {
            utils: __dirname + "/src/app/utils",
            logger: __dirname + "/src/app/utils/logger"
        }
    },

    entry: {
        vendors: [
          'react',
          'rx/dist/rx.lite',
          'immutable',
          'keymirror'
        ],
        app: __dirname + '/src/client'
    },

    output: {
        path: __dirname + '/public/assets/js/dist/',
        filename: "[name].bundle.js"
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            { test: /\.jsx$/, loader: "jsx-loader" },
            { test: /\.css$/, loader: "style!css" }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin( "vendors", "vendors.bundle.js" ),
        new webpack.DefinePlugin({
            LOGGING_LEVEL: LOGGING_LEVELS.DEBUG,
            ENV: JSON.stringify( 'development' )
        })
    ]
};