import { createRouter, createWebHistory } from 'vue-router'
import projectRouter from './project'
import { beforeEach, beforeResolve } from './before-each'


const router = createRouter({
  //TODO: router 분리
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_URL),
  routes: [
    {
      path: '/',
      name: 'Root',
      redirect: '/project/list'
    },
    {
      path: '/project',
      name: 'Project',
      redirect: '/project/list',
      children: [
        {
          path: 'list',
          name: 'projectList',
          component: () => import('@/views/project/ProjectListView.vue')
        },
      ]
    },
    {
      path: '/console',
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

beforeEach(router)
beforeResolve(router)

export default router
