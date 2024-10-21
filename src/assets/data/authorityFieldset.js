export const serviceAuthorityFieldset = {
  name: 'Service 관리',
  transCode: 'authority.service.title',
  children: [
    {
      name: 'General',
      transCode: 'authority.service.general.title',
      items: [
        {
          name: 'Service 정보 관리 허용(등록, 조회, 수정, 삭제)',
          transCode: 'authority.service.general.all',
          code: -100,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Service 조회(목록,상세)',
          transCode: 'authority.service.general.list',
          code: 74,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        // {
        //     name: "Service 생성",
        //     transCode: "authority.service.general.register",
        //     code: 75,
        //     values: {
        //         group: false,
        //         service: false,
        //         project: false,
        //         developer: false
        //     }
        // },
        {
          name: 'Service 수정',
          transCode: 'authority.service.general.update',
          code: 76,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        // {
        //     name: "Service 삭제",
        //     transCode: "authority.service.general.delete",
        //     code: 77,
        //     values: {
        //         group: false,
        //         service: false,
        //         project: false,
        //         developer: false
        //     }
        // }
      ],
    },
  ],
}

export const connectionAuthorityFieldset = {
  name: 'Connection 관리',
  transCode: 'authority.connection.title',
  children: [
    {
      name: 'Connection',
      transCode: 'authority.connection.general.title',
      items: [
        {
          name: '관리 전체를 허용',
          transCode: 'authority.connection.general.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'OSS 목록',
          transCode: 'authority.connection.general.list',
          code: 90,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'OSS 생성',
          transCode: 'authority.connection.general.register',
          code: 49,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'OSS 수정',
          transCode: 'authority.connection.general.update',
          code: 50,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'OSS 삭제',
          transCode: 'authority.connection.general.delete',
          code: 51,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const clusterAuthorityFieldset = {
  name: 'Cluster 관리',
  transCode: 'authority.cluster.title',
  children: [
    {
      name: 'Cluster',
      transCode: 'authority.cluster.general.title',
      items: [
        {
          name: '관리 전체를 허용',
          transCode: 'authority.cluster.general.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Cluster 목록',
          transCode: 'authority.cluster.general.list',
          code: 86,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Cluster 생성',
          transCode: 'authority.cluster.general.register',
          code: 87,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Cluster 수정',
          transCode: 'authority.cluster.general.update',
          code: 88,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Cluster 삭제',
          transCode: 'authority.cluster.general.delete',
          code: 89,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const projectAuthorityFieldset = {
  name: 'Project 관리',
  transCode: 'authority.project.title',
  children: [
    {
      name: 'General',
      transCode: 'authority.project.general.title',
      items: [
        {
          name: 'General 정보 관리 허용(등록, 조회, 수정, 삭제)',
          transCode: 'authority.project.general.all',
          code: -100,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Project 조회(목록,상세)',
          transCode: 'authority.project.general.list',
          code: 5,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Project 생성',
          transCode: 'authority.project.general.register',
          code: 6,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Project 수정',
          transCode: 'authority.project.general.update',
          code: 7,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Project 삭제',
          transCode: 'authority.project.general.delete',
          code: 8,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
    {
      name: 'Repository',
      transCode: 'authority.project.repository.title',
      items: [
        {
          name: 'Repository 정보 관리 허용(등록, 조회, 수정, 삭제)',
          transCode: 'authority.project.repository.all',
          code: -100,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'File 폴더/파일 조회',
          transCode: 'authority.project.repository.fileList',
          code: 9,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        // {
        //     name: "File 폴더/파일 등록",
        //     transCode:"authority.project.repository.fileRegister",
        //     code: 10,
        //     values: {
        //         group: false,
        //         service: false,
        //         project: false,
        //         developer: false
        //     }
        // },
        {
          name: 'Commit 조회',
          transCode: 'authority.project.repository.commitList',
          code: 11,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        // {
        //     name: "branch 목록조회",
        //     transCode:"authority.project.repository.branchList",
        //     code: 12,
        //     values: {
        //         group: false,
        //         service: false,
        //         project: false,
        //         developer: false
        //     }
        // },
        {
          name: 'branch 생성',
          transCode: 'authority.project.repository.branchRegister',
          code: 13,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        // {
        //     name: "branch 삭제",
        //     transCode:"authority.project.repository.branchDelete",
        //     code: 14,
        //     values: {
        //         group: false,
        //         service: false,
        //         project: false,
        //         developer: false
        //     }
        // }
      ],
    },
    {
      name: 'MergeRequest',
      transCode: 'authority.project.mergeRequest.title',
      items: [
        {
          name: '관리 전체를 허용',
          transCode: 'authority.project.mergeRequest.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'MergeRequest 목록',
          transCode: 'authority.project.mergeRequest.list',
          code: 200,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'MergeRequest 생성',
          transCode: 'authority.project.mergeRequest.register',
          code: 201,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        //   {
        //     name: 'MergeRequest 수정',
        //     transCode: 'authority.project.mergeRequest.edit',
        //     code: 202,
        //     values: {
        //       group: false,
        //       project: false,
        //       developer: false
        //     }
        //   },
        {
          name: 'MergeRequest 삭제',
          transCode: 'authority.project.mergeRequest.delete',
          code: 203,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'MergeRequest merge',
          transCode: 'authority.project.mergeRequest.mergeBtn',
          code: 204,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'MergeRequest close',
          transCode: 'authority.project.mergeRequest.closeBtn',
          code: 205,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'MergeRequest reopen',
          transCode: 'authority.project.mergeRequest.reopenBtn',
          code: 206,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
    {
      name: 'ProjectRestore',
      transCode: 'authority.project.projectRestore.title',
      items: [
        {
          name: '관리 전체를 허용',
          transCode: 'authority.project.projectRestore.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: '프로젝트 복구 목록',
          transCode: 'authority.project.projectRestore.list',
          code: 208,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: '프로젝트 복구 버튼',
          transCode: 'authority.project.projectRestore.restoreBtn',
          code: 209,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}
export const memberAuthorityFieldset = {
  name: 'Member 관리',
  transCode: 'authority.member.title',
  children: [
    {
      name: 'Member',
      transCode: 'authority.member.general.title',
      items: [
        {
          name: 'Member 정보 관리 허용(등록, 조회, 수정, 삭제)',
          transCode: 'authority.member.general.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Member 조회(목록,상세)',
          transCode: 'authority.member.general.list',
          code: 37,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Member 생성',
          transCode: 'authority.member.general.register',
          code: 38,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        // {
        //     name: "Member 수정",
        //     transCode:"authority.member.general.update",
        //     code: 39,
        //     values: {
        //         group: false,
        //         project: false,
        //         developer: false
        //     }
        // },
        {
          name: 'Member 삭제',
          transCode: 'authority.member.general.delete',
          code: 40,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}
export const buildDeployAuthorityFieldset = {
  name: 'Build & Deploy',
  transCode: 'authority.buildAndDeploy.title',
  children: [
    {
      name: 'Build',
      transCode: 'authority.buildAndDeploy.build.title',
      items: [
        {
          name: 'Build 정보 관리 허용(등록, 조회, 수정, 삭제)',
          transCode: 'authority.buildAndDeploy.build.all',
          code: -100,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Build 조회(목록,상세)',
          transCode: 'authority.buildAndDeploy.build.list',
          code: 21,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Build 생성',
          transCode: 'authority.buildAndDeploy.build.register',
          code: 22,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Build 수정',
          transCode: 'authority.buildAndDeploy.build.update',
          code: 23,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Build 삭제',
          transCode: 'authority.buildAndDeploy.build.delete',
          code: 24,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Build History 내역 조회',
          transCode: 'authority.buildAndDeploy.build.historyList',
          code: 27,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Build 수행',
          transCode: 'authority.buildAndDeploy.build.run',
          code: 28,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
    {
      name: 'Deploy',
      transCode: 'authority.buildAndDeploy.deploy.title',
      items: [
        {
          name: 'Deploy 정보 관리 허용(등록, 조회, 수정, 삭제)',
          transCode: 'authority.buildAndDeploy.deploy.all',
          code: -100,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Deploy 조회(목록,상세)',
          transCode: 'authority.buildAndDeploy.deploy.list',
          code: 53,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Deploy 생성',
          transCode: 'authority.buildAndDeploy.deploy.register',
          code: 54,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Deploy 수정',
          transCode: 'authority.buildAndDeploy.deploy.update',
          code: 55,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Deploy 삭제',
          transCode: 'authority.buildAndDeploy.deploy.delete',
          code: 56,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Deploy History 내역 조회',
          transCode: 'authority.buildAndDeploy.deploy.historyList',
          code: 57,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Deploy 수행',
          transCode: 'authority.buildAndDeploy.deploy.run',
          code: 58,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const catalogDeploayAuthorityFieldset = {
  name: 'Catalog Deploy',
  transCode: 'authority.catalogDeploy.title',
  children: [
    {
      name: 'Deploy',
      transCode: 'authority.catalogDeploy.catalogDeploy.title',
      items: [
        {
          name: 'Catalog Deploy 정보 관리 허용(등록, 조회, 수정, 삭제)',
          transCode: 'authority.catalogDeploy.catalogDeploy.all',
          code: -100,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Catalog Deploy 조회(목록,상세)',
          transCode: 'authority.catalogDeploy.catalogDeploy.list',
          code: 80,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Catalog Deploy 생성',
          transCode: 'authority.catalogDeploy.catalogDeploy.register',
          code: 81,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Catalog Deploy 수정',
          transCode: 'authority.catalogDeploy.catalogDeploy.update',
          code: 82,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Catalog Deploy 삭제',
          transCode: 'authority.catalogDeploy.catalogDeploy.delete',
          code: 83,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Catalog Deploy History 내역 조회',
          transCode: 'authority.catalogDeploy.catalogDeploy.historyList',
          code: 84,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Catalog Deploy 수행',
          transCode: 'authority.catalogDeploy.catalogDeploy.run',
          code: 85,
          values: {
            group: false,
            service: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const authorityFieldset = {
  name: 'Authority 관리',
  transCode: 'authority.authority.title',
  children: [
    {
      name: 'Authority',
      transCode: 'authority.authority.general.title',
      items: [
        {
          name: 'Authority 설정',
          transCode: 'authority.authority.general.setting',
          code: 52,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const notificationsFieldset = {
  name: 'Notification 관리',
  transCode: 'authority.notifications.title',
  children: [
    {
      name: 'Notification',
      transCode: 'authority.notifications.general.title',
      items: [
        {
          name: 'Notification 설정',
          transCode: 'authority.notifications.general.setting',
          code: 73,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const statemachineFieldset = {
  name: 'Approval 관리',
  transCode: 'authority.statemachine.title',
  children: [
    {
      name: 'Statemachine',
      transCode: 'authority.statemachine.general.title',
      items: [
        {
          name: 'Approval 설정',
          transCode: 'authority.statemachine.general.setting',
          code: 67,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const messageFieldset = {
  name: 'Message 관리',
  transCode: 'authority.message.title',
  children: [
    {
      name: 'Message',
      transCode: 'authority.message.general.title',
      items: [
        {
          name: '관리 전체를 허용',
          transCode: 'authority.message.general.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Message 목록',
          transCode: 'authority.message.general.list',
          code: 69,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Message 수정',
          transCode: 'authority.message.general.edit',
          code: 71,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const pipelineAuthorityFieldset = {
  name: 'Pipeline 관리',
  transCode: 'authority.pipeline.title',
  children: [
    {
      name: 'Pipeline',
      transCode: 'authority.pipeline.general.title',
      items: [
        {
          name: '관리 전체를 허용',
          transCode: 'authority.pipeline.general.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Pipeline 목록',
          transCode: 'authority.pipeline.general.list',
          code: 210,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Pipeline 생성',
          transCode: 'authority.pipeline.general.register',
          code: 211,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Pipeline 수정',
          transCode: 'authority.pipeline.general.update',
          code: 212,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'Pipeline 삭제',
          transCode: 'authority.pipeline.general.delete',
          code: 213,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const sonarQubeAuthorityFieldset = {
  name: 'SonarQube 관리',
  transCode: 'authority.sonarQube.title',
  children: [
    {
      name: 'SonarQube',
      transCode: 'authority.sonarQube.general.title',
      items: [
        {
          name: '관리 전체를 허용',
          transCode: 'authority.sonarQube.general.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'SonarQube 목록',
          transCode: 'authority.sonarQube.general.list',
          code: 215,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'SonarQube 생성',
          transCode: 'authority.sonarQube.general.register',
          code: 216,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'SonarQube 복사',
          transCode: 'authority.sonarQube.general.copy',
          code: 217,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'SonarQube 수정',
          transCode: 'authority.sonarQube.general.update',
          code: 218,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: 'SonarQube 삭제',
          transCode: 'authority.sonarQube.general.delete',
          code: 219,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

export const deliverableAuthorityFieldset = {
  name: 'Deliverable 관리',
  transCode: 'authority.deliverable.title',
  children: [
    {
      name: 'Deliverable',
      transCode: 'authority.deliverable.general.title',
      items: [
        {
          name: '관리 전체를 허용',
          transCode: 'authority.deliverable.general.all',
          code: -100,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: '산출물 목록',
          transCode: 'authority.deliverable.general.list',
          code: 220,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: '산출물 생성',
          transCode: 'authority.deliverable.general.register',
          code: 221,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: '산출물 수정',
          transCode: 'authority.deliverable.general.update',
          code: 222,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
        {
          name: '산출물 삭제',
          transCode: 'authority.deliverable.general.delete',
          code: 223,
          values: {
            group: false,
            project: false,
            developer: false,
          },
        },
      ],
    },
  ],
}

// // yyr : - add SERVICE_OWNER 메뉴 권한 부여 항목
// export const groupAuthorityFieldset = {
//     name: "Organization 관리",
//     transCode: "authority.organization.title",
//     children: [
//         {
//             name: "General",
//             transCode: "authority.organization.general.title",
//             items: [
//                 {
//                     name: "Organization 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode: "authority.organization.general.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Organization 조회(목록,상세)",
//                     transCode: "authority.organization.general.list",
//                     code: 1,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Organization 생성",
//                     transCode: "authority.organization.general.register",
//                     code: 2,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Organization 수정",
//                     transCode: "authority.organization.general.update",
//                     code: 3,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Organization 삭제",
//                     transCode: "authority.organization.general.delete",
//                     code: 4,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };
// export const serviceAuthorityFieldset = {
//     name: "Service 관리",
//     transCode: "authority.service.title",
//     children: [
//         {
//             name: "General",
//             transCode: "authority.service.general.title",
//             items: [
//                 {
//                     name: "Service 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode: "authority.service.general.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Service 조회(목록,상세)",
//                     transCode: "authority.service.general.list",
//                     code: 74,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Service 생성",
//                     transCode: "authority.service.general.register",
//                     code: 75,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Service 수정",
//                     transCode: "authority.service.general.update",
//                     code: 76,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Service 삭제",
//                     transCode: "authority.service.general.delete",
//                     code: 77,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };
// export const projectAuthorityFieldset = {
//     name: "Project 관리",
//     transCode:"authority.project.title",
//     children: [
//         {
//             name: "General",
//             transCode:"authority.project.general.title",
//             items: [
//                 {
//                     name: "General 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.project.general.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Project 조회(목록,상세)",
//                     transCode:"authority.project.general.list",
//                     code: 5,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Project 생성",
//                     transCode:"authority.project.general.register",
//                     code: 6,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Project 수정",
//                     transCode:"authority.project.general.update",
//                     code: 7,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Project 삭제",
//                     transCode:"authority.project.general.delete",
//                     code: 8,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         },
//         {
//             name: "Repository",
//             transCode:"authority.project.repository.title",
//             items: [
//                 {
//                     name: "Repository 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.project.repository.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "File 폴더/파일 조회",
//                     transCode:"authority.project.repository.fileList",
//                     code: 9,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "File 폴더/파일 등록",
//                     transCode:"authority.project.repository.fileRegister",
//                     code: 10,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Commit 조회",
//                     transCode:"authority.project.repository.commitList",
//                     code: 11,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "branch 목록조회",
//                     transCode:"authority.project.repository.branchList",
//                     code: 12,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "branch 생성",
//                     transCode:"authority.project.repository.branchRegister",
//                     code: 13,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "branch 삭제",
//                     transCode:"authority.project.repository.branchDelete",
//                     code: 14,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         },
//         {
//             name: "Project setting",
//             transCode:"authority.project.setting.title",
//             items: [
//                 {
//                     name: "Project setting 정보 관리(등록, 조회) 허용",
//                     transCode:"authority.project.setting.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Project 설정 조회",
//                     transCode:"authority.project.setting.list",
//                     code: 15,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Project 설정 변경",
//                     transCode:"authority.project.setting.update",
//                     code: 16,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         },
//         {
//             name: "API Mapper",
//             transCode:"authority.project.apiMapper.title",
//             items: [
//                 {
//                     name: "API Mapper 정보 관리(등록, 조회, 수정, 삭제) 허용",
//                     transCode:"authority.project.apiMapper.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "API Mapper 목록,상세 조회",
//                     transCode:"authority.project.apiMapper.list",
//                     code: 17,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "API Mapper 생성",
//                     transCode:"authority.project.apiMapper.register",
//                     code: 18,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "API Mapper 수정",
//                     transCode:"authority.project.apiMapper.update",
//                     code: 19,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "API Mapper 삭제",
//                     transCode:"authority.project.apiMapper.delete",
//                     code: 20,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };

// export const buildDeployAuthorityFieldset = {
//     name: "Build & Deploy",
//     transCode:"authority.buildAndDeploy.title",
//     children: [
//         {
//             name: "Build",
//             transCode:"authority.buildAndDeploy.build.title",
//             items: [
//                 {
//                     name: "Build 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.buildAndDeploy.build.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Build 조회(목록,상세)",
//                     transCode:"authority.buildAndDeploy.build.list",
//                     code: 21,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Build 생성",
//                     transCode:"authority.buildAndDeploy.build.register",
//                     code: 22,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Build 수정",
//                     transCode:"authority.buildAndDeploy.build.update",
//                     code: 23,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Build 삭제",
//                     transCode:"authority.buildAndDeploy.build.delete",
//                     code: 24,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Build History 내역 조회",
//                     transCode:"authority.buildAndDeploy.build.historyList",
//                     code: 27,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Build 수행",
//                     transCode:"authority.buildAndDeploy.build.run",
//                     code: 28,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         },{
//             name: "Deploy",
//             transCode:"authority.buildAndDeploy.deploy.title",
//             items: [
//                 {
//                     name: "Deploy 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.buildAndDeploy.deploy.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy 조회(목록,상세)",
//                     transCode:"authority.buildAndDeploy.deploy.list",
//                     code: 53,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy 생성",
//                     transCode:"authority.buildAndDeploy.deploy.register",
//                     code: 54,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy 수정",
//                     transCode:"authority.buildAndDeploy.deploy.update",
//                     code: 55,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy 삭제",
//                     transCode:"authority.buildAndDeploy.deploy.delete",
//                     code: 56,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy History 내역 조회",
//                     transCode:"authority.buildAndDeploy.deploy.historyList",
//                     code: 57,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy 수행",
//                     transCode:"authority.buildAndDeploy.deploy.run",
//                     code: 58,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         },
//         {
//             name: "Docker build server",
//             transCode:"authority.buildAndDeploy.dockerBuildServer.title",
//             items: [
//                 {
//                     name: "Docker build server 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.buildAndDeploy.dockerBuildServer.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Docker build server 조회(목록,상세)",
//                     transCode:"authority.buildAndDeploy.dockerBuildServer.list",
//                     code: 29,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Docker build server 생성",
//                     transCode:"authority.buildAndDeploy.dockerBuildServer.register",
//                     code: 30,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Docker build server 수정",
//                     transCode:"authority.buildAndDeploy.dockerBuildServer.update",
//                     code: 31,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Docker build server 삭제",
//                     transCode:"authority.buildAndDeploy.dockerBuildServer.delete",
//                     code: 32,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         },
//         {
//             name: "Deploy location",
//             transCode:"authority.buildAndDeploy.deployLocation.title",
//             items: [
//                 {
//                     name: "Deploy location 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.buildAndDeploy.deployLocation.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy location 조회(목록,상세)",
//                     transCode:"authority.buildAndDeploy.deployLocation.list",
//                     code: 33,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy location 생성",
//                     transCode:"authority.buildAndDeploy.deployLocation.register",
//                     code: 34,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy location 수정",
//                     transCode:"authority.buildAndDeploy.deployLocation.update",
//                     code: 35,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Deploy location 삭제",
//                     transCode:"authority.buildAndDeploy.deployLocation.delete",
//                     code: 36,
//                     values: {
//                         group: false,
//                         service: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };

// export const memberAuthorityFieldset = {
//     name: "Member 관리",
//     transCode:"authority.member.title",
//     children: [
//         {
//             name: "Member",
//             transCode:"authority.member.general.title",
//             items: [
//                 {
//                     name: "Member 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.member.general.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Member 조회(목록,상세)",
//                     transCode:"authority.member.general.list",
//                     code: 37,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Member 생성",
//                     transCode:"authority.member.general.register",
//                     code: 38,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Member 수정",
//                     transCode:"authority.member.general.update",
//                     code: 39,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Member 삭제",
//                     transCode:"authority.member.general.delete",
//                     code: 40,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };

// export const credentialAuthorityFieldset = {
//     name: "Credential 관리",
//     transCode:"authority.credential.title",
//     children: [
//         {
//             name: "Credential",
//             transCode:"authority.credential.general.title",
//             items: [
//                 {
//                     name: "Credential 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.credential.general.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Credential 조회(목록,상세)",
//                     transCode:"authority.credential.general.list",
//                     code: 41,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Credential 생성",
//                     transCode:"authority.credential.general.register",
//                     code: 42,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Credential 수정",
//                     transCode:"authority.credential.general.update",
//                     code: 43,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Credential 삭제",
//                     transCode:"authority.credential.general.delete",
//                     code: 44,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };

// export const remoteHostAuthorityFieldset = {
//     name: "Remote host 관리",
//     transCode:"authority.remoteHost.title",
//     children: [
//         {
//             name: "Remote host",
//             transCode:"authority.remoteHost.general.title",
//             items: [
//                 {
//                     name: "Remote host 정보 관리 허용(등록, 조회, 수정, 삭제)",
//                     transCode:"authority.remoteHost.general.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Remote host 조회(목록,상세)",
//                     transCode:"authority.remoteHost.general.list",
//                     code: 45,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Remote host 생성",
//                     transCode:"authority.remoteHost.general.register",
//                     code: 46,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Remote host 수정",
//                     transCode:"authority.remoteHost.general.update",
//                     code: 47,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Remote host 삭제",
//                     transCode:"authority.remoteHost.general.delete",
//                     code: 48,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };

// export const preferenceAuthorityFieldset = {
//     name: "Preference 관리",
//     transCode:"authority.preference.title",
//     children: [
//         {
//             name: "Preference",
//             transCode:"authority.preference.general.title",
//             items: [
//                 {
//                     name: "관리 전체를 허용",
//                     transCode:"authority.preference.general.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Gitlab 수정",
//                     transCode:"authority.preference.general.gitlab",
//                     code: 49,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "Jenkins 수정",
//                     transCode:"authority.preference.general.jenkins",
//                     code: 50,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "ETC 수정",
//                     transCode:"authority.preference.general.etc",
//                     code: 51,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };

// export const authorityFieldset = {
//     name: "Authority 관리",
//     transCode:"authority.authority.title",
//     children: [
//         {
//             name: "Authority",
//             transCode:"authority.authority.general.title",
//             items: [
//                 {
//                     name: "Authority 설정",
//                     transCode:"authority.authority.general.setting",
//                     code: 52,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };

// export const deployModelerFieldset = {
//     name: "Deploy modeler",
//     transCode:"authority.deployModeler.title",
//     children: [
//         {
//             name: "general",
//             transCode:"authority.deployModeler.general.title",
//             items: [
//                 {
//                     name: "",
//                     transCode:"authority.deployModeler.general.all",
//                     code: -100,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "",
//                     transCode:"authority.deployModeler.general.list",
//                     code: 59,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "",
//                     transCode:"authority.deployModeler.general.register",
//                     code: 60,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "",
//                     transCode:"authority.deployModeler.general.update",
//                     code: 61,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },
//                 {
//                     name: "",
//                     transCode:"authority.deployModeler.general.delete",
//                     code: 62,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 },{
//                     name: "",
//                     transCode:"authority.deployModeler.general.run",
//                     code: 63,
//                     values: {
//                         group: false,
//                         project: false,
//                         developer: false
//                     }
//                 }
//             ]
//         }
//     ]
// };

// export const notificationsFieldset = {
//   name: 'Notification 관리',
//   transCode: 'authority.notifications.title',
//   children: [
//     {
//       name: 'Notification',
//       transCode: 'authority.notifications.general.title',
//       items: [
//         {
//           name: 'Notification 설정',
//           transCode: 'authority.notifications.general.setting',
//           code: 73,
//           values: {
//             group: false,
//             project: false,
//             developer: false
//           }
//         }
//       ]
//     }
//   ]
// }

// export const statemachineFieldset = {
//   name: 'Approval 관리',
//   transCode: 'authority.statemachine.title',
//   children: [
//     {
//       name: 'Statemachine',
//       transCode: 'authority.statemachine.general.title',
//       items: [
//         {
//           name: 'Approval 설정',
//           transCode: 'authority.statemachine.general.setting',
//           code: 67,
//           values: {
//             group: false,
//             project: false,
//             developer: false
//           }
//         }
//       ]
//     }
//   ]
// }

// export const messageFieldset = {
//   name: 'Message 관리',
//   transCode: 'authority.message.title',
//   children: [
//     {
//       name: 'Message',
//       transCode: 'authority.message.general.title',
//       items: [
//         {
//           name: '관리 전체를 허용',
//           transCode: 'authority.message.general.all',
//           code: -100,
//           values: {
//             group: false,
//             project: false,
//             developer: false
//           }
//         },
//         {
//           name: 'Message 목록',
//           transCode: 'authority.message.general.list',
//           code: 69,
//           values: {
//             group: false,
//             project: false,
//             developer: false
//           }
//         },
//         {
//           name: 'Message 수정',
//           transCode: 'authority.message.general.edit',
//           code: 71,
//           values: {
//             group: false,
//             project: false,
//             developer: false
//           }
//         }
//       ]
//     }
//   ]
// }
