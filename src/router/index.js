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
      redirect: '/project/list',
    },
    {
      path: '/project',
      name: 'Project',
      redirect: '/project/list',
      children: [
        {
          path: 'list',
          name: 'projectList',
          component: () => import('@/views/project/ProjectListView.vue'),
        },
      ],
    },
    {
      path: '/console',
      children: [...projectRouter],
    },
  ],
})

beforeEach(router)
beforeResolve(router)

export default router
