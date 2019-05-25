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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
