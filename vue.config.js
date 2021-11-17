const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: process.env.VUE_APP_BASE_URL,
  pwa: {
    msTileColor: '#fff',
    manifestOptions: {
      name: 'contractSign',
      short_name: 'contractSign',
      background_color: '#fff',
      theme_color: '#fff',
      start_url: '/?type=pwa',
      display: 'standalone',
      description: '个人签名',
      orientation: 'portrait',
      scope: '/',
      icons: [
      ]
    },
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    },
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'white'
  },
  lintOnSave: false,
  configureWebpack: config => {
    const newPlugins = [
      new CompressionPlugin({
        algorithm: 'gzip',
        test: /\.(js|css)$/, // 匹配文件名
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 不删除源文件
        minRatio: 0.8 // 压缩比
      })
    ]
    config.plugins = [...config.plugins, ...newPlugins]
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [{ analyzerMode: 'static' }])
    }
    config.resolve.alias.set('@', resolve('src'))
  },
  devServer: {
    // proxy: {
    //   '^/api': {
    //     target: 'http://127.0.0.1:7001', // 目标代理接口地址
    //     secure: false,
    //     changeOrigin: true // 开启代理，在本地创建一个虚拟服务端
    //   }
    // }
  },
  productionSourceMap: false
}
