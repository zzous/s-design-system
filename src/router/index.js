import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import projectRouter from './project'

const router = createRouter({
  //TODO: router 분리
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
      path: '/serviceGroups/:serviceGroupId/console',
      children: [...projectRouter]
    }
    /*//build
    {
      path: '/serviceGroups/:serviceGroupId/console/projects/:projectId/builds',
      name: 'projectBuildList',
      component: () => import('@/views/project/build/ProjectBuildListView.vue')
    },
    {
      path: '/serviceGroups/:serviceGroupId/console/projects/:projectId/builds/new',
      name: 'projectNewBuild',
      component: () => import('@/views/project/build/NewBuildView.vue')
    },
    {
      path: '/serviceGroups/:serviceGroupId/console/projects/:projectId/builds/detail/:buildId',
      name: 'projectBuildDetail',
      component: () => import('@/views/project/build/ProjectBuildDetailView.vue')
    },
    //deploy
    {
      path: '/serviceGroups/:serviceGroupId/console/projects/:projectId/deploy',
      name: 'projectDeployList',
      component: () => import('@/views/project/deploy/DeployListView.vue')
    },
    {
      path: '/serviceGroups/:serviceGroupId/console/projects/:projectId/deploy/new',
      name: 'projectNewDeploy',
      component: () => import('@/views/project/deploy/NewDeployView.vue')
    }*/
  ]
})

export default router
