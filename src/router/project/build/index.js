export default [
  {
    path: 'build/list',
    name: 'projectBuildList',
    component: () => import('@/views/project/build/ProjectBuildListView.vue')
  },
  {
    path: 'build/new',
    name: 'projectNewBuild',
    component: () => import('@/views/project/build/NewBuildView.vue')
  },
  {
    path: 'build/detail/:buildId',
    name: 'projectBuildDetail',
    component: () => import('@/views/project/build/ProjectBuildDetailView.vue')
  }
]
