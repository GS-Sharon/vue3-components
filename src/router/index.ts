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
      }
    ]
  }
]

export default createRouter({
  routes,
  history: createWebHistory()
})