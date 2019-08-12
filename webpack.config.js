var path = require('path');  
// No need to install path because it's part of Node


module.exports = {
    entry: "./app/assets/scripts/App.js",
    output: {
        // path: "./app/temp/scripts", webpack does not understand relative path
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "App.js"    
    },
    module: {
        // 'loaders' in the originla code was replaced with 'rules' 
        // because of module format error 
        rules: [
            {
                loader: 'babel-loader', 
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/, 
                exclude: /node_modules/
            }
        ]
    }
}