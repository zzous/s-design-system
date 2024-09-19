export default [
  {
    path: 'builds',
    name: 'projectBuildList',
    component: () => import('@/views/project/build/ProjectBuildListView.vue')
  },
  {
    path: 'builds/new',
    name: 'projectNewBuild',
    component: () => import('@/views/project/build/NewBuildView.vue')
  },
  {
    path: 'builds/detail/:buildId',
    name: 'projectBuildDetail',
    component: () => import('@/views/project/build/ProjectBuildDetailView.vue')
  }
]
