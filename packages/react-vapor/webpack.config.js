const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const isTravis = !!process.env.TRAVIS;
const keysTransformer = require('ts-transformer-keys/transformer').default;

/**
 * Config file for the documentation project
 */
module.exports = {
    entry: {
        main: './docs/Index.tsx',
    },
    mode: isTravis ? 'production' : 'development',
    output: {
        path: path.join(__dirname, '/docs/dist'),
        filename: '[name].bundle.js',
        chunkFilename: 'assets/[name].bundle.js',
    },
    devtool: isTravis ? 'source-map' : 'eval-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Vapor Design System',
            favicon: 'docs/favicon.ico',
            chunks: ['main'],
            template: 'docs/index.html',
        }),
        new webpack.DefinePlugin({
            WEBPACK_DEFINED_VERSION: JSON.stringify(require('./package.json').version),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /en-ca/),
    ],
    stats: 'minimal',
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts(x?)$/i,
                exclude: [/node_modules/],
                use: {
                    loader: 'tslint-loader',
                    options: {
                        configFile: '../../tslint.json',
                        tsConfigFile: './tsconfig.demo.json',
                        emitErrors: true,
                        failOnHint: isTravis,
                    },
                },
            },
            {
                /**
                 *  Transform let and const to var in js files below to make them ES5 compatible
                 *  Target only problematic files to prevent compilation from hanging
                 */
                include: [path.resolve(__dirname, 'node_modules/unidiff/hunk.js')],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            configFile: 'tsconfig.demo.json',
                        },
                    },
                ],
            },
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            getCustomTransformers: (program) => ({
                                before: [keysTransformer(program)],
                            }),
                            configFile: 'tsconfig.demo.json',
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, 'src/components'),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'typings-for-css-modules-loader',
                        options: {
                            modules: true,
                            scss: true,
                            namedExport: true,
                            localIdentName: '[name]-[local]-[hash:base64]',
                        },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.scss$/,
                exclude: path.join(__dirname, 'src/components'),
                loader: 'style-loader!css-loader!postcss-loader!sass-loader',
            },
            {
                test: /\.css$/,
                exclude: path.join(__dirname, 'src/components'),
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(ttf|eot|woff|svg|png|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },

            // Provide jQuery=require('jquery') to use the same jquery instance.
            // See http://reactkungfu.com/2015/10/integrating-jquery-chosen-with-webpack-using-imports-loader/ for more infos.
            {
                test: require.resolve('chosen-js'),
                loader: 'imports-loader?jQuery=jquery',
            },
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        host: '0.0.0.0',
        disableHostCheck: true,
        compress: true,
        hot: true,
        inline: true,
        progress: true,
    },
};
