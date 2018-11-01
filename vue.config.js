const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,

    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            path.resolve(__dirname, './src/assets/styles/theme.less'),
        ]
      }
    }
}
