import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import linkedSingle from '@/components/链表/单链表.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'linked_list',
          name: 'linkedSingle',
          component: linkedSingle
        }
      ]
    }
  ]
})
