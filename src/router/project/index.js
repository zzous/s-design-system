import buildRouter from '@/router/project/build'
import deployRouter from '@/router/project/deploy'
import repositoryRouter from '@/router/project/repository'
/*import buildRouter from './build'
import deployRouter from './deploy'
import repositoryRouter from './repository'*/

export default [
  {
    path: 'projects',
    redirect: (to) => `${to.path}/builds`,
    children: [...buildRouter, ...deployRouter, ...repositoryRouter]
  }
]
