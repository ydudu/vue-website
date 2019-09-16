import Home from "@/views/home.vue";
export default [
    {
        path: "/",
        name: "home",
        component: Home,
        children: [
            {
                path:"/",
                name: "mainPage",
                component: () => import('@/views/mainPage.vue'),
                meta: {
                    title: '主页'
                }
            },
            {
                path:"/about",
                name: "about",
                component: () => import('@/views/about.vue'),
                meta: {
                    title: '关于本站'
                }
            },
            {
                path:"/oneArticle",
                name: "oneArticle",
                component: () => import('@/views/oneArticle.vue'),
                meta: {
                    title: '文章'
                }
            },
            {
                path: "/wallpaper",
                name: "wallpaper",
                component: () => import('@/views/wallpaper.vue'),
                meta: {
                    title: '图片'
                }
            },
            {
                path: "/message",
                name: "message",
                component: () => import('@/views/message.vue'),
                meta: {
                    title: '留言'
                }
            },
            {
                path: "/perCenter",
                name: "perCenter",
                component: () => import('@/views/perCenter.vue'),
                meta: {
                    title: '个人中心'
                },
                children: [
                    {
                        path: "/OneMenus",
                        name: "OneMenus",
                        component: () => import('@/views/perChild/OneMenus.vue')
                    },
                    {
                        path: "/changeMenus",
                        name: "changeMenus",
                        component: () => import('@/views/perChild/changeMenus.vue')
                    }
                ]
            },
        ],
    },
    // {
    //     path: "/about",
    //     name: "about",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
]

