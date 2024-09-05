import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/serviceGroups/:serviceGroupId/project/list',
      name: 'projectList',
      component: () => import('@/views/project/ProjectListView.vue')
    },
    {
      path: '/serviceGroups/:serviceGroupId/project/:projectId/builds',
      name: 'projectBuild',
      component: () => import('@/views/project/ProjectBuildView.vue')
    }
  ]
})

export default router
