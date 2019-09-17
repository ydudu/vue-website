import Vue from "vue";
import Router from "vue-router";
import routes from "./router"

Vue.use(Router);
const router = new Router({
    // mode: 'history',
    routes
})
//路由title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    //每个路由跳转时都将其跳转的路由推给百度。
    if (_hmt) {
        if (to.path) {
            _hmt.push(['_trackPageview', '/#' + to.fullPath]);
        }
    }
    next()
    if(to.meta.requireAuth) {
        next()
    }else{
        
    }
});
export default router