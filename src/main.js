import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/my-theme/index.less';
import './assets/reset/reset.css'
import './assets/ScssRem/ScssRem.js'
import animated from 'animate.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
import axios from 'axios'
import VueLazyload from 'vue-lazyload' //懒加载插件
import './assets/iconFont/iconfont' //svg图标引用js

Vue.use(Viewer,{
    defaultOptions: {
        zIndex: 9999
    }
});

Vue.use(VueLazyload)

Vue.prototype.$ajax = axios;

Vue.use(animated);
Vue.config.productionTip = false;
Vue.use(iView);

//添加script标签
Vue.prototype.$loadScript = (url, callback) => {
    let script = document.createElement('script');
    if (script.readyState) {
        // IE浏览器
        script.onreadystatechange = function () {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
                script.onreadystatechange = null;
                callback();
            }
        }
    } else {
        // 其他浏览器
        script.onload = function () {
            callback();
        }
    }
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}
//百度统计
var _hmt = _hmt || [];
window._hmt = _hmt; // 必须把_hmt挂载到window下，否则找不到
(function () {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?48d3edd529a897ea91c67accb02fa93d";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
