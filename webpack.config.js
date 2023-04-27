// webpack.config.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = (env) => {
  let entry
  const appName = 'React App';
  return ({
    entry: entry || {
      main: path.join(__dirname, '/src/index.tsx')
    },
    output: {
      path: path.join(__dirname, '/build'),
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].bundle.js',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }, {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader'
        }, {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          reactVendor: {
            test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
            name: 'vendor-react',
            chunks: 'all'
          }
        }
      }
    },
    resolve: {
      alias: {
        'styled-components': path.resolve(__dirname, 'node_modules', 'styled-components')
      },
      extensions: ['.tsx', '.ts', '.js']
    },
    plugins: [
      new HtmlWebpackPlugin({
        templateContent: `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700">
              <base href="/" />
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
              <title>React App</title>
            </head>
            <body>
              <div id="root"></div>
            </body>
          </html>
        `,
        title: appName,
        inject: true
      }),
      new webpack.EnvironmentPlugin(['NODE_ENV']),
      new webpack.ProvidePlugin({
        process: 'process/browser'
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      })
    ]
  })
}
