import { createRouter, createWebHistory } from 'vue-router'
import projectRouter from './project'
import { useTokenStore } from '@/stores/portal/token'
import { useUserStore } from '@/stores/portal/user'
import { useMenuStore } from '@/stores/portal/menu'


const router = createRouter({
  //TODO: router 분리
  history: createWebHistory(import.meta.env.VITE_BASE_PUBLIC_URL),
  routes: [
    {
      path: '/',
      redirect: '/project/list'
    },
    {
      path: '/project',
      redirect: '/project/list',
      children: [
        {
          path: '/project/list',
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

router.beforeEach((to, from, next) => {
  // to.query 를 구조분해
  const { token, ...restQuery } = to.query;

  //token 이 있을경우
  if(token) {
    try{
      //토큰 저장
      const tokenObj = JSON.parse(atob(token))
      useTokenStore().setToken(tokenObj)
      useUserStore().getUserDetail()
      useMenuStore().getAccessibleMenu()
      //TODO : 사용자 정보 요청
      //쿼리스트링에서 토큰 제거하고 원래 시도한 경로로 리다이렉트
      next({ path: to.path, query: restQuery, replace: true });
    }catch(e) {
      console.error(e)
      next()
    }
  }else{
    //진행
    next()
  }
})

export default router
