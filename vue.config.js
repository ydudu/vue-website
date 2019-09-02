const path = require('path');
const resolve = dir => path.join(__dirname, dir);
const BASE_URL = process.env.NODE_ENV === 'prodution' ? './' : './';
<<<<<<< HEAD
// const PrerenderSPAPlugin = require('prerender-spa-plugin');
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
=======
>>>>>>> d2fd02b525bce03a4af91a1c16cfc8539181fde2

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
<<<<<<< HEAD
    // devServer: {
    //     proxy: {
    //         '/apiHotSong': {
    //             target: 'https://api.itooi.cn/music/tencent',
    //             ws: true,  // proxy websockets
    //             changeOrigin: true,  // needed for virtual hosted sites
    //             pathRewrite: {
    //                 '^/apiHotSong': ''  // rewrite path
    //             },
    //         },
    //         '/apiMusic': {
    //             target: 'https://v1.itooi.cn/tencent',
    //             ws: true,  // proxy websockets
    //             changeOrigin: true,  // needed for virtual hosted sites
    //             pathRewrite: {
    //                 '^/apiMusic': ''  // rewrite path
    //             },
    //         },
    //         '/api': {
    //             target: 'http://wallpaper.apc.360.cn',
    //             ws: true,  // proxy websockets
    //             changeOrigin: true,  // needed for virtual hosted sites
    //             pathRewrite: {
    //                 '^/api': ''  // rewrite path
    //             },
    //         },
    //     }
    // },
    // configureWebpack: {
    //     // if (process.env.NODE_ENV !== 'production') return;
    //         plugins: [
    //             new PrerenderSPAPlugin({
    //                 // 生成文件的路径，也可以与webpakc打包的一致。
    //                 // 下面这句话非常重要！！！
    //                 // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
    //                 staticDir: path.join(__dirname, 'dist'),

    //                 // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
    //                 routes: ['/', '/about', '/oneArticle', '/wallpaper', '/message'],

    //                 // 这个很重要，如果没有配置这段，也不会进行预编译  
    //                 renderer: new Renderer({
    //                     inject: {
    //                         foo: 'bar'
    //                     },
    //                     headless: false,
    //                     // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
    //                     renderAfterDocumentEvent: 'render-event'
    //                 })
    //             })
    //         ]
    // }
 }
=======

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
>>>>>>> d2fd02b525bce03a4af91a1c16cfc8539181fde2
