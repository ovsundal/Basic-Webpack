//handled by nodeJs runtime
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    //first file webpack looks for, relative filepath reference
    entry: './src/index.js',
    output: {
        //absolute reference to the directory the output file should be saved to
        path: path.resolve(__dirname, 'build'),  //__dirname is a nodeJs reference to current working directory
        //what webpack should call the actual file that gets created
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    //pipeline
    module: {
        rules: [
            {
                //transpile code 
                use: 'babel-loader',
                //regex: if file ends with .js, babel will be applied
                test: /\.js$/
            },
            {
                //tells webpack how to handle css files
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader'
                }),
                test: /\.css$/
            },
            {
                //image compression
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        //if image is larger than 40000 bytes, save as separate file
                        //otherwise include into bundle.js
                        options: {limit: 40000}
                    },
                    'image-webpack-loader'
                ]

            }
        ]
    },
    plugins: [
        //add a separate file for css instead of adding css to bundle.js
        new ExtractTextPlugin('style.css')
    ]
};

module.exports = config;