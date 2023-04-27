const path = require('path')
const getProdConfig = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env) => {
  const prodConfig = getProdConfig(env)
  return {
    ...prodConfig,
    devtool: 'source-map',
    mode: 'development',
    output: {
      filename: '[name].bundle.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, '/public/index.html'),
        inject: true,
        templateParameters: {
          REACT_APP_NAME: 'React App'
        }
      })
    ],
    devServer: {
      port: 3000,
      historyApiFallback: true,
      allowedHosts: ['all']
    },
    optimization: {
      minimize: false
    }
  }
}
