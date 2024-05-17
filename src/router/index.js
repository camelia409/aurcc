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
    },
    {
      path: '/ed-cell/',
      name: 'ED-cell',
      component: ()=> import('../views/EDcell.vue')
    },
    {
      path: '/dgate/',
      name: 'DGATE-cell',
      component: ()=> import('../views/DGATE.vue')
    },
    {
      path: '/placement-cell/',
      name: 'plaement-cell',
      component: ()=> import('../views/PlacementCell.vue')
    },
    {
      path: '/research-cell/',
      name: 'research-cell',
      component: ()=> import('../views/Reseach.vue')
    },
    {
      path: '/about/',
      name: 'about',
      component: ()=> import('../views/About.vue')
    },
    {
      path: '/academics/',
      name: 'academics',
      component: ()=> import('../views/Academics.vue')
    },
    {
      path: '/exam-cell/',
      name: 'examcell',
      component: ()=> import('../views/Examcell.vue')
    },
    {
      path: '/hostel/',
      name: 'hostel',
      component: ()=> import('../views/Hostel.vue')
    },
    {
      path: '/nss/',
      name: 'nss',
      component: ()=> import('../views/NSSview.vue')
    },
    {
      path: '/tamilmandram/',
      name: 'tamilmandram',
      component: ()=> import('../views/Tamilmandram.vue')
    },
    {
      path: '/sports/',
      name: 'sports',
      component: ()=> import('../views/Sports.vue')
    }
  ]
})

export default router
