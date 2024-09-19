import buildRouter from './build'
import deployRouter from './deploy'
export default [
  {
    path: 'projects/:projectId',
    children: [...buildRouter, ...deployRouter]
  }
]
