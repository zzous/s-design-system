import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/serviceGroups/:serviceGroupId/project/list',
      name: 'projectList',
      component: () => import('../views/project/ProjectListView.vue')
    }
  ]
})

export default router
