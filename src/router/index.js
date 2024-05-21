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
    },
    {
      path: '/alumni/',
      name: 'alumni',
      component: ()=> import('../views/Alumni.vue')
    },
    {
      path: '/fine-arts/',
      name: 'fine-arts club',
      component: ()=> import('../views/FineArtsClub.vue')
    },
    {
      path: '/admission/',
      name: 'admission',
      component: ()=> import('../views/AdmissionView.vue')
    },
    {
      path: '/library/',
      name: 'library',
      component: ()=> import('../views/Library.vue')
    },
    {
      path: '/distance-education/',
      name: 'distamce-education',
      component: ()=> import('../views/DistanceEdu.vue')
    },
    {
      path: '/office-affiliation/',
      name: 'office-affiliation',
      component: ()=> import('../views/OfficeOfAffiliation.vue')
    },
    {
      path: '/zonal/',
      name: 'zonal',
      component: ()=> import('../views/Zonal.vue')
    },
    {
      path: '/pace-cell/',
      name: 'pace-cell',
      component: ()=> import('../views/Pace.vue')
    },
    {
      path: '/administration/',
      name: 'administration',
      component: ()=> import('../views/Admin.vue')
    }
  ]
})

export default router
