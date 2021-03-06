import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index.vue'
import nav1 from '../components/content/nav1.vue'
import nav2 from '../components/content/nav2.vue'
import nav3 from '../components/content/nav3.vue'
import nav4 from '../components/content/nav4.vue'
import nav5 from '../components/content/nav5.vue'
import nav6 from '../components/content/nav6.vue'
import top1 from '../components/content/top1.vue'
import top2 from '../components/content/top2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: nav6,
      hidden: true,
      meta: {
          requireAuth: false
      }
    },
    {
      path: '/nav6',
      name: 'nav6',
      component: nav6
    },
    {
      path: '/index',
      name: '首页',
      component: index,
      children:[
        {
          path: '/nav1',
          name: 'nav1',
          component: nav1
        },
        {
          path: '/nav2',
          name: 'nav2',
          component: nav2
        },
        {
          path: '/nav3',
          name: 'nav3',
          component: nav3
        },
        {
          path: '/nav4',
          name: 'nav4',
          component: nav4
        },
        {
          path: '/nav5',
          name: 'nav5',
          component: nav5
        },
        {
          path: '/top1',
          name: 'top1',
          component: top1
        },
        {
          path: '/top2',
          name: 'top2',
          component: top2
        }
      ]
    },
  ]
})
