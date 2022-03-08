const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada
    output: { // Hacia donde vamos a enviar lo que va a preparar webpack
        path: path.resolve(__dirname, 'dist'), // Nombre del directorio
        filename: 'main.js' // Nombre del archivo
    },
    resolve: {
        extensions: ['.js']
    },
    module:[
        rules[
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                } 
            }
        ]
    ]
  }