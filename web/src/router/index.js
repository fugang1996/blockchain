/*
 * @Descripttion: no
 * @version: 1.0.0
 * @Author: fugang
 * @Date: 2021-06-02 11:56:31
 * @LastEditors: fugang
 * @LastEditTime: 2021-06-02 13:53:02
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // 首页
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  // 抽奖页
  {
    path: '/luckDraw',
    name: 'luckDraw',
    component: () => import('../views/Luckdraw.vue')
  },
  // 文本说明
  {
    path: '/testname',
    name: 'Testname',
    component: () => import('../views/Textname.vue')
  },
  //邀请
  {
    path: '/invitation',
    name: 'Invitation',
    component: () => import('../views/Invitation.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
