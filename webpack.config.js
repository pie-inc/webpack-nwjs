const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBar = require('webpackbar');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const exec = require('child_process').exec;
const distFolder = "./docs";

const stats = {
  all: false,
  assets: true,
  cachedAssets: true,
  children: false,
  chunks: false,
  entrypoints: true,
  errorDetails: true,
  errors: true,
  hash: true,
  modules: false,
  performance: true,
  publicPath: true,
  timings: true,
  warnings: false,
  exclude: [
    'node_modules'
  ]
};

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, distFolder)
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js" ]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              import: true,
              localIdentName: '[local]__[emoji:4]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new WebpackBar(),
    new HtmlWebpackPlugin({
      template: 'src/index.ejs',
      title: 'Hello world',
      meta: {
        viewport: 'width=device-width, initial-scale=1'
      }
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets', to: 'docs/assets' },
    ])
  ],
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [
      new OptimizeCSSAssetsPlugin(),
      new TerserPlugin({
        parallel: true,
        terserOptions: {
          ecma: 6,
        },
      })
    ]
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  stats: stats,
  devtool: 'inline-source-map',
  devServer: {
    contentBase: distFolder,
    port: 4000,
    after: function(app, server) {
      exec('nw ./src/dev');
    }
  }
};