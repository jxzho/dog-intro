const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  lintOnSave: false,
  devServer: {
    hotOnly: false,
  },

  chainWebpack: (config) => {
    // config.plugins.delete('prefetch')
    // config.plugins.delete('preload')

    config.resolve.alias
      .set('@$', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('common', resolve('src/common'))

    config.module
      .rule('image')
      .test(/\.ico$/)
      .use('url-loader')
      .loader('url-loader')

    // Tree-Shaking
    config.optimization.usedExports = true

    // Code Splitting
    config.optimization.splitChunks({
      ...config.optimization.get('splitChunks'),
      chunks: 'all',
      automaticNameDelimiter: '~~',
      minSize: 0,
      minChunks: 1,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    })
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/assets/styles/theme.less'),
        path.resolve(__dirname, './src/assets/styles/mixins.less'),
      ],
    },
  },

  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico',
    },
  },
}
