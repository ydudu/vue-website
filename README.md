# vue-website

### Vue做的个人网站，欢迎访问 http://www.shine20.com
### 描述
本站采用iview开发，兼容移动端，目的是为了提升自己
### 技术
vuex vue-router axios vue-lazyload sass v-viewer webpack 等

### 更新
* 由于音乐接口来自第三方网站，已经停用了，暂时无法展示o(╥﹏╥)o
* 增加登录注册，注册还在开发，买的虚拟主机不支持nodejs,只好用php操作下数据库了
* 由于主页打开速度有点慢，去除了请求整个iview，使用iview按需加载，用到哪个组件调用哪个
```
import {Row,Col,Icon,Form,Input,Button} from 'iview'

components: {
    Row,Col,Icon,Form,Input,Button
  }
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
