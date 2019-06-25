const path = require('path')
const plugins = require('./plugins')
const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const styleRules = require('./rules/styleRules')
const fileRules = require('./rules/fileRules')
const optimization = require('./optimization')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  entry: {
    app: path.join(__dirname, '../', 'src/index.tsx')
  },
  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [...jsRules, ...styleRules, ...fileRules]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    // alias: {
    //   '@components': resolve('src/components')
    // }
    plugins: [
      new TsconfigPathsPlugin({
        configFile: resolve('tsconfig.json')
      })
    ]
  },
  plugins: [
    ...plugins
  ],
  optimization
}
