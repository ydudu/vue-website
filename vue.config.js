const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const BASE_URL = process.env.NODE_ENV === 'prodution' ? './' : './';

module.exports = {
    lintOnSave: false,
    baseUrl: BASE_URL,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) //
            .set('_c', resolve('src/components'))
    },
    // 打包时不生成.map文件
    productionSourceMap: false,

    devServer: {
        proxy: {
            '/apiHotSong': {
                target: 'https://api.itooi.cn/music/tencent',
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apiHotSong': ''  // rewrite path
                },
            },
            '/apiMusic': {
                target: 'https://v1.itooi.cn/tencent',
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apiMusic': ''  // rewrite path
                },
            },
            '/api': {
                target: 'http://wallpaper.apc.360.cn',
                ws: true,  // proxy websockets
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': ''  // rewrite path
                },
            },
        }
    }
}
