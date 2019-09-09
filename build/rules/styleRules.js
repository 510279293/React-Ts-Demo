const path = require('path')
const {resolve} = require('./../utils')
const theme = require('./../../theme')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = [
  {
    test: /\.(jpe?g|png|gif)$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
                name: 'img/[name].[hash:8].[ext]'
            }
          }
        }
      }
    ]
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'media/[name].[hash:8].[ext]'
            }
          }
        }
      }
    ]
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 4096,
          fallback: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name].[hash:8].[ext]'
            }
          }
        }
      }
    ]
  },
  {
    test: /\.(css|less)$/,
    include: [resolve('node_modules')],
    use: [
      // 'style-loader',
      MiniCssExtractPlugin.loader,
      'css-loader',
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
          modifyVars: theme,
          includePaths: ['./node_modules/normalize.css']
        }
      }
    ]
  },
  {
    test: /\.scss$/,
    include: [resolve('src')],
    exclude: /node_modules/,
    use: [
      // 'style-loader',
      MiniCssExtractPlugin.loader,
      {
        loader: 'cache-loader',
        options: {
          cacheDirectory: resolve('.cache-loader')
        }
      },
      {
        loader: 'typings-for-css-modules-loader',
        options: {
          modules: true,
          // 类名导出
          namedExport: true,
          camelCase: true,
          sass: true
        }
      },
      {
        loader: 'sass-loader',
        options: {
          includePaths: [resolve('src/assets/styles')]
        }
      }
    ]
  },
]