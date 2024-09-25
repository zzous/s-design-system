// /console/projects/
export default [
  {
    path: 'deploy/list',
    name: 'projectDeployList',
    component: () => import('@/views/project/deploy/DeployListView.vue')
  },
  {
    path: 'deploy/new',
    name: 'projectNewDeploy',
    component: () => import('@/views/project/deploy/NewDeployView.vue')
  }
]
