import { createRouter, createWebHistory } from 'vue-router'
//import HomeView from '../views/HomeView.vue'
import projectRouter from './project'
import { useTokenStore } from '@/stores/login-user/token'

const router = createRouter({
  //TODO: router 분리
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/project/list',
      name: 'projectList',
      component: () => import('@/views/project/ProjectListView.vue')
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

router.beforeEach((to, from, next) => {
  // to.query 를 구조분해
  const { token, ...restQuery } = to.query;

  //token 이 있을경우
  if(token) {
    //TODO : 토큰 저장
    //쿼리스트링에서 토큰 제거하고 원래 시도한 경로로 리다이렉트
    next({ path: to.path, query: restQuery, replace: true });
  }else{
    //진행
    next()
  }
})

export default router
