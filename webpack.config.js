const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: [
        './assets/js/main.js', './assets/scss/main.scss'
],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, './')
    },
    optimization: {
        minimizer: [
          new UglifyJSPlugin({
            cache: true,
            parallel: true,
            sourceMap: true // set to true if you want JS source maps
          }),
          new OptimizeCssAssetsPlugin({})
        ]
      },
      plugins: [
        new MiniCssExtractPlugin({
          filename: "css/mystyles.css"
        })
      ],
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        minimize: {
                            safe: true
                        }
                    }
                },
                {
                    loader: 'sass-loader'
                }
            ]
        }]
    },
    devtool: 'source-map',
    // plugins: [
    //     new MiniCssExtractPlugin({
    //         // Options similar to the same options in webpackOptions.output
    //         // both options are optional
    //         filename: "css/mystyles.css",
    //         chunkFilename: "[id].css"
    //     })
        // new ExtractTextPlugin('css/mystyles.css'),
        // new UglifyJSPlugin(),
        // new OptimizeCssAssetsPlugin({
        //     assetNameRegExp: /\.optimize\.css$/g,
        //     cssProcessor: require('cssnano'),
        //     cssProcessorPluginOptions: {
        //         preset: ['default', {
        //             discardComments: {
        //                 removeAll: true
        //             }
        //         }],
        //     },
        //     canPrint: true
        // })
    // ],
    // module: {
    //     rules: [{ // sass / scss loader for webpack
    //             test: /\.(sass|scss)$/,
    //             loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
    //         },
    //         {
    //             test: /\.(png|jpg|gif|svg)$/,
    //             use: [{
    //                 loader: 'url-loader',
    //             }]
    //         },
    //         {
    //             test: /\.(ttf|eot|woff|woff2)$/,
    //             loader: "url-loader",
    //           },
    //     ]
    // },
    // plugins: [
    //     new ExtractTextPlugin({ // define where to save the file
    //         filename: './css/main.bundle.css',
    //         allChunks: true,
    //     }),
    // ],
    // Automatically compile when files change.
    watch: true,
    // Automatically reload the page when compilation is done.

    devServer: {
        inline: true,
        //contentBase: 'http://127.0.0.1:8000',
        proxy: {
            "*": 'http://127.0.0.1:8000'
        }
        // proxy: [{
        //     target: 'http://127.0.0.1:8000',
        //     secure: false
        // }]
    },
};