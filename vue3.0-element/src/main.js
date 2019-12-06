import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import axios from 'axios'

// 导入全局样式表
import './assets/css/global.css'

// 导入字体图标
import './assets/fonts/iconfont.css'

// 原型链-挂载axios
Vue.prototype.$http = axios

// 配置请求的根路径
axios.defaults.baseURL = 'http://api.happylay.com:3000/mock/19/'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
