import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/Layout/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/index'
  }
]

export const navList = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    name: '登录'
  },
  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Home/index'),
        name: '主页',
      }
    ]
  },
  {
    path: '/animation',
    component: Layout,
    children:[
      {
        path: 'index',
        component: () => import('@/views/Animation/index'),
        name: '动漫',
      }
    ]
  },
  {
    path: '/game',
    component: Layout,
    children:[
      {
        path: 'index',
        component: () => import('@/views/Game/index'),
        name: '游戏',
      }
    ]
  },
  {
    path: '/mine',
    component: Layout,
    children:[
      {
        path: 'index',
        component: () => import('@/views/Mine/index'),
        name: '我的',
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes.concat(navList)
})

export default router
