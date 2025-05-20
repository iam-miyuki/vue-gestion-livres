import { createRouter, createWebHistory } from 'vue-router'
import ClientBooksList from '@/views/ClientBooksList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ClientBooksList,
    },
    {
      path: '/books/:id',
      name: 'detail',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/ClientBookDetail.vue'),
    },
    {
      path: '/admin/books',
      name: 'admin-home',
      component: () => import('@/views/AdminBooksList.vue'),
    },
    {
      path: '/admin/books/create',
      name: 'create',
      component: () => import('@/views/AdminBookCreate.vue'),
    },
    {
      path: '/admin/books/update/:id',
      name: 'update',
      component: () => import('@/views/AdminBookUpdate.vue'),
    },
  ],
})

export default router
