const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // production development
  entry: './src/index.js',
  output: {
    filename: "bundle.[hash:8].js",
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    port: 3000,
    compress: true,
    open: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '测试title',
      filename: 'index.html',
      template: './index.html',
      inject: true,
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ],
  module:{
    rules:[
      {
        test: /.css$/,
        loader:['style-loader', 'css-loader']
      }
    ]
  }
};