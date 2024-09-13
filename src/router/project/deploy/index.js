export default [
  {
    path: '/serviceGroups/:serviceGroupId/console/projects/:projectId/deploy',
    name: 'projectDeployList',
    component: () => import('@/views/project/deploy/DeployListView.vue')
  },
  {
    path: '/serviceGroups/:serviceGroupId/console/projects/:projectId/deploy/new',
    name: 'projectNewDeploy',
    component: () => import('@/views/project/deploy/NewDeployView.vue')
  }
]
