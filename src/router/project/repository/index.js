export default [
  {
    path: 'repository',
    name: 'projectRepository',
    component: () => import('@/views/project/file/RepositoryView.vue'),
    children: [
      {
        path: 'file',
        name: 'projectRepositoryFile',
        component: () => import('@/views/project/file/RepositoryFileView.vue')
      },
      {
        path: 'commit',
        name: 'projectRepositoryCommit',
        component: () => import('@/views/project/file/RepositoryCommitView.vue')
      },
      {
        path: 'branch',
        name: 'projectRepositoryBranch',
        component: () => import('@/views/project/file/RepositoryBranchView.vue')
      },
      {
        path: 'merge-request',
        name: 'projectRepositoryMergeRequest',
        component: () => import('@/views/project/file/RepositoryMergeRequestView.vue')
      }
    ]
  }
]
