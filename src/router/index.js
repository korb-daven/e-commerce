import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'dashboard',
      component: () => import('../view/Dashboard.vue')
    },
    // {
    //   path: '/categories/:categoryId',
    //   name: 'categories',
    //   component: () => import('../view/Category.vue')
    // },
    // {
    //   path: '/products/:productId',
    //   name: 'products',
    //   component: () => import('../view/Product.vue')
    // },
  ]
})

export default router
