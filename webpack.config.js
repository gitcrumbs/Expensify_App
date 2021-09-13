//entry point of the application
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env) =>{
const isProduction = env.production ;

    return {        
        plugins:[new MiniCssExtractPlugin()],
        entry: ["regenerator-runtime/runtime.js",'./src/app.js' ],
        mode : 'development',  
        output:{
            path: path.join(__dirname,'public','dist'),
            filename : 'bundle.js'
        },
        module :{
            rules :
        [                
        {
            loader : 'babel-loader',
            test : /\.js$/,
            exclude: /node_modules/
        },
        {
            test:/\.css$/,            
            use: [MiniCssExtractPlugin.loader ,
            {
                loader: 'css-loader',
                options:{
                    sourceMap: true
                }
            }
        ]            
        }
        ]
        },
        devtool: isProduction?'source-map':'inline-source-map',
        devServer:{
            contentBase : path.join(__dirname,'public'),
            historyApiFallback: true,
            publicPath:'/dist/'
        }
    };
}
