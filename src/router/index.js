import Vue from 'vue'
import Router from 'vue-router'
import Hellow from '@/components/hellow'


import Enroll from '../views/enroll'
import Register from '../views/register'

Vue.use(Router)

const router = new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'hellow',
      component: Hellow
    },
    {
      path: '/enroll',
      name: 'enroll',
      component: Enroll
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})
export default router;
