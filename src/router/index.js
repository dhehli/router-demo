import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    /* */
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: {
      // Inline declaration of a component that renders our <router-view>
      // TODO: Here i need to passthrough the SideBar component
      render: (c) => c('router-view'),
    },
    redirect: { name: 'contact' },
    children: [
      {
        path: 'contact',
        name: 'contact',
        meta: {
          layout: 'sidebar'
        },
        components: {
          /* Layout with no sideBar */
          sideBar: () => import('@/components/SideBar.vue'),
          default: () => import('@/views/sub_about/Contact.vue')
        }
      },
      {
        path: 'team',
        name: 'team',
        meta: {
          layout: 'sidebar'
        },
        components: {
          /* Layout with sideBar */
          default: () => import('@/views/sub_about/Team.vue')
        }
      },
      {
        path: 'history',
        name: 'history',
        meta: {
          layout: 'sidebar'
        },
        components: {
          /* Layout with sideBar */
          sideBar: () => import('@/components/SideBarSecond.vue'),
          default: () => import('@/views/sub_about/History.vue')
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
