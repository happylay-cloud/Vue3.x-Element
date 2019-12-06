import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'

Vue.use(Router)

// 路由
const router = new Router({
  routes: [
    {
      // 重定向
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
