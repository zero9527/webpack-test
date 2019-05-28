const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkBoxPlugin = require('workbox-webpack-plugin');

module.exports = () => {
  return {
    entry: {
      app: './src/index.js',
    },
    output: {
      filename: '[name].[contentHash:8].js',
      path: path.resolve(__dirname, './dist'),
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          inludes: path.resolve(__dirname, './src'),
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.js$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader'
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          use: [
            'file-loader'
          ]
        }
      ]
    },
    optimization: {
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          }
        }
      }
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '渐进式网络应用程序PWA'
      }),
      new WorkBoxPlugin.GenerateSW({
        // 这些选项将快速创建 ServiceWorker
        // 不允许’旧的‘ServideWorkers
        clientsClaim: true,
        skipWaiting: true,
      })
    ]
  }
};