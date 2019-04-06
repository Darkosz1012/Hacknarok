import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Login from './views/homePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
  ]
})
