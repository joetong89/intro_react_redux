const path = require('path');

module.exports = {
    // entry: './src/app.js',    // the entry point of the application
    entry: './src/redux/redux-freeagenttracker.js',    // the entry point of the application
    output: {
        path: path.join(__dirname, 'public'),   // output to public folder
        filename: 'bundle.js'                   // output bundled JavaScript as bundle.js
    },
    module: {
        rules: [{
            loader: 'babel-loader',     // the specific loader
            test: /\.js$/,              // the file types to convert
            exclude: /node_modules/     // we don't need to convert anything in this folder!
        }, {
            test: /\.s?css$/,
            use: [                      // for multiple rules on a test case, 
                'style-loader',         // use 'uses' instead of 'loader'
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};

/* 
    NOTE: the above test and exclude property values are what are known as 
          REGULAR EXPRESSIONS.
*/



