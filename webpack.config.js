const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // production development
  entry: './src/index.js',
  output:{
    filename: "bundle[hash:8].js",
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer:{
    contentBase: './dist',
    hot: true,
    port: 6666,
    compress: true,
    open: true
  },
  plugins:[
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '测试title',
      filename: 'index.html',
      template: './index.html',
      inject: true,
      hash: true
    })
  ]
};