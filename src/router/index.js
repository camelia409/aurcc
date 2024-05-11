import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/departments/:departmentName',
      name: 'department',
      component: ()=> import('../views/DepartmentsView.vue')
    },
    {
      path: '/admissions/',
      name: 'admissions',
      component: ()=> import('../views/AdmissionView.vue')
    }
  ]
})

export default router
