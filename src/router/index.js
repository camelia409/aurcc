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
    },
    {
      path: '/aicte&moe/',
      name: 'aicte&moe',
      component: ()=> import('../views/Aicte&moe.vue')
    },
    {
      path: '/antiragging/',
      name: 'antiragging',
      component: ()=> import('../views/Antiragging.vue')
    },
    {
      path: '/VC/',
      name: 'VC',
      component: ()=> import('../views/VC.vue')
    },
    {
      path: '/Registrar/',
      name: 'Registrar',
      component: ()=> import('../views/Registrar.vue')
    },
    {
      path: '/HOD/',
      name: 'HOD',
      component: ()=> import('../views/HOD.vue')
    },
    {
      path: '/contact/',
      name: 'contact',
      component: ()=> import('../views/contact.vue')
    },
    {
      path: '/regulation/',
      name: 'regulation',
      component: ()=> import('../views/regulation.vue')
    },
    {
      path: '/programs_offered/',
      name: 'programs_offered',
      component: ()=> import('../views/programs_offered.vue')
    },
    {
      path: '/curriculum_syllabus/',
      name: 'curriculum_syllabus',
      component: ()=> import('../views/curriculum_syllabus.vue')
    },
    {
      path: '/student_affairs/',
      name: 'student_affairs',
      component: ()=> import('../views/student_affairs.vue')
    },
    {
      path: '/COD/',
      name: 'COD',
      component: ()=> import('../views/COD.vue')
    },
    {
      path: '/administrator/',
      name: 'administrator',
      component: ()=> import('../views/Registrar.vue')
    },
    {
      path: '/EstateOff/',
      name: 'Estate Office',
      component: ()=> import('../views/EstateOff.vue')
    }
  ]
})

export default router
