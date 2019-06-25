const tsImportPluginFactory = require('ts-import-plugin')
const {resolve} = require('./../utils')

module.exports = [
  {
    test: /\.ts(x?)$/,
    include: [resolve('src')],
    exclude: /node_modules/,
    use: [
      {
        loader: 'awesome-typescript-loader',
        options: {
          transpileOnly: true,
          useCache: true,
          // cacheDirectory: resolve('.cache-loader'),
          babelOptions: {
            babelrc: false,
            plugins: [
              'react-hot-loader/babel',
              ['import',[{
                libraryName: 'antd',
                libraryDirectory: 'es',
                style: true
              }]]
            ]
          },
          // getCustomTransformers: () => ({
          //   before: [
          //     tsImportPluginFactory({
          //       libraryName: 'antd',
          //       libraryDirectory: 'es',
          //       // 填写true 的话使用组件的less 文件
          //       // 填写 css 的话使用css文件，但同时不能定制主题
          //       style: true
          //     })
          //   ]
          // })
        }
      }
    ]
  },
]