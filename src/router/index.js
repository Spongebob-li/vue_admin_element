import Vue from 'vue'
import Router from 'vue-router'
import Login from "../components/Login/index.vue"
import home from "@/view/Home/index"

Vue.use(Router)

const router = new Router({
  routes: [
    {path:'/', redirect:'/login'},
    {path: '/Login', component: Login},
    {path: '/home', component: home},

  ]
})

// 挂载路由导航守卫控制访问权限
// 如果用户没有登录，但是直接通过URL访问特定页面，需要重新导航到登录页面
router.beforeEach((to, from,next) => {
  // to 将要访问的路径
  // from 代表从那个路径跳转而来
  // next 放行
  if(to.path === '/login') return next(); // 如果访问的是登录页，直接放行
  const tokenStr = window.sessionStorage.getItem('token')
  if(!tokenStr) return next('/login')// 如果没有token 就跳转登录页面
  next() // 如果有就放行
})

export default router
