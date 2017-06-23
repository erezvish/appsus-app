import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import AppMail from '@/components/email/AppMail'
import AppMap from '@/components/map/AppMap'
import AppBooks from '@/components/books/AppBooks'


import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)
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
