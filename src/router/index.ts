import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes:RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('../components/container/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('../views/Home.vue')
      },{
        path: 'chooseIcon',
        component: () => import('../views/chooseIcon/index.vue')
      },{
        path: 'areaChoose',
        component: () => import('../views/areaChoose/index.vue')
      },{
        path: 'notification',
        component: () => import('../views/notification/index.vue')
      },{
        path: 'menu',
        component: () => import('../views/menu/index.vue')
      },{
        path: 'chooseCity',
        component: () => import('../views/chooseCity/index.vue')
      },{
        path: 'table',
        component: () => import('../views/table/index.vue')
      }
    ]
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})