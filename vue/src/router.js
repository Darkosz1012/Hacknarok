import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import HomePage from './views/HomePage'
import Mapa from './components/Map'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/mapa',
      name: 'Mapa',
      component: Mapa
    },
  ]
})
