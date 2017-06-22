import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AppMail from '@/components/email/AppMail'
import AppMap from '@/components/map/AppMap'
import AppBooks from '@/components/books/AppBooks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, 
    {
      path: '/mail',
      name: 'AppMail',
      component: AppMail
    }, 
    {
      path: '/map',
      name: 'AppMap',
      component: AppMap
    }, 
    {
      path: '/books',
      name: 'AppBooks',
      component: AppBooks
    }, 
  ]
})
