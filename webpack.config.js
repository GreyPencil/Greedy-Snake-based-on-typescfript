const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//all the config info of webpack is in module.exports
module.exports = {

    entry: "./src/index.ts",

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",

        environment: {
            arrowFunction: false
        }
    },

    mode: 'development',

    module: {

        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options:{
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets:{
                                            "chrome": "80",
                                            "ie": "11"
                                        },
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],

                exclude: /node-modules/
            },
            // set less
            {
                test: /\.less$/,
                use:[
                    "style-loader",
                    "css-loader",

                    // 引入postcss
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins:[
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },

                    "less-loader"
                ]
            }
        ]
    },



    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "custom title"
            template: "./src/index.html"
        }),
    ],

    //设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }

};