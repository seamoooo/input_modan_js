import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLocation from '@/pages/UserLocation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserLocation',
    component: UserLocation,
  }
]

const router = new VueRouter({
  routes
})

export default router
