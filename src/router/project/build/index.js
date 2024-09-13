export default [
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
  }
]
