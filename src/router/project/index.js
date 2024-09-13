import buildRouter from './build'
import deployRouter from './deploy'
export default [
  {
    path: '/serviceGroups/:serviceGroupId/project/list',
    name: 'projectList',
    component: () => import('@/views/project/ProjectListView.vue'),
    children: [...buildRouter, ...deployRouter]
  }
]
