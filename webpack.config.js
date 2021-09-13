//entry point of the application
const path = require('path')

module.exports={
    entry: ["regenerator-runtime/runtime.js",'./src/app.js' ],
    mode : 'development',  
    output:{
        path: path.join(__dirname,'public'),
        filename : 'bundle.js'
    },
    module :{
        rules :[{
            loader : 'babel-loader',
            test : /\.js$/,
            exclude: /node_modules/
        },
    {
        test:/\.css$/,
        use:[
            'style-loader',
            'css-loader'
        ]
    }]
    },
    devtool: 'cheap-module-source-map',
    devServer:{
        contentBase : path.join(__dirname,'public'),
        historyApiFallback: true
    }
};