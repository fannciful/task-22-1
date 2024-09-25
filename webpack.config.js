const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './script.js', 
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle-[fullhash].js', 
        clean: true 
    },
    plugins: [
        new HtmlPlugin({
            template: './index.html' 
        }),
        new MiniCssExtractPlugin({
            filename: '[name]-[fullhash].css' 
        })
    ],
    devServer: {
        port: 5555,
        static: {
            directory: path.join(__dirname, 'build')
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    targets: {
                                        edge: '17',
                                        firefox: '60',
                                        chrome: '67',
                                        safari: '11.1'
                                    }
                                }
                            ] 
                        ]
                    }
                }
            }
        ]
    },
    optimization: {
        minimize: true, 
        minimizer: [new TerserPlugin()] 
    }
};
