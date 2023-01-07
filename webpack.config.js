const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{  //Extensiones admintidas
        extensions: ['.js','.jsx']
    },
    module:{  //reglas loaders y plugins
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use:{
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/,
                use: [  //Le decimos que lo use con el loader que instalamos
                    {
                        laoder:'html-loader'
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html'
        })
    ]
}