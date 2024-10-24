// Router> meta의 menuCode와 동일해야 함
export const UserMenuItems = [
  {
    alt: 'main',
    menuCode: 'OVERVIEW',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/overview`,
    accessible: true,
  },
  {
    alt: 'my information',
    menuCode: 'MY_PAGE',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/user-account/my-info`,
    accessible: true,
  },
  // 기업 관리
  {
    alt: 'Company Management',
    menuCode: 'COMPANY_MANAGEMENT',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/company-mgmt`,
  },
  // 예측
  {
    alt: 'Forecast',
    menuCode: 'FORECAST',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/forecast`,
  },
  // MSP 콘솔
  {
    alt: 'MSP Cost',
    menuCode: 'MSP_COST',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/msp`,
  },
  // 비용 관리
  {
    alt: 'Cost',
    menuCode: 'COST',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/cost`,
  },
  {
    alt: 'SR',
    menuCode: 'SR',
    menuUrl: `${import.meta.env.VITE_SR_PORTAL}/#/sr`,
  },
  // --- s: 카탈로그 메뉴 ---
  {
    alt: 'Cloud Resource Catalog',
    menuCode: 'CLOUD_RESOURCE_CATALOG',
    menuUrl: `${import.meta.env.VITE_INFRA_PORTAL}/catalog`,
  },
  // --- e: 카탈로그 메뉴 ---
  // --- s: 구성정보 메뉴 ---
  {
    alt: 'Cloud Configuration Information',
    menuCode: 'CLOUD_CONFIGURATION_INFORMATION',
    menuUrl: `${import.meta.env.VITE_INFRA_PORTAL}/cloud-config`,
  },

  // --- e: 구성정보 메뉴 ---
  // --- s: 자원 메뉴 ---
  {
    alt: 'Cloud Resource Console',
    menuCode: 'CLOUD_RESOURCE_CONSOLE',
    menuUrl: `${import.meta.env.VITE_INFRA_PORTAL}/resources`,
  },
  // --- e: 자원 메뉴 ---
  {
    alt: 'Container Console',
    menuCode: 'CONTAINER_CONSOLE',
    menuUrl: `${import.meta.env.VITE_CONTAINER_PORTAL}/dashboard`,
  },
  {
    alt: 'DevOps',
    menuCode: 'DEVOPS',
    menuUrl: `${import.meta.env.VITE_DEVOPS_PORTAL}/#/serviceGroups`,
  },
  { menuCode: 'DEVOPS', alt: 'DevOps', menuUrl: '데브옵스' },
  {
    menuCode: 'DEVOPS_PROJECT_MANAGEMENT',
    alt: 'Project Management',
    menuUrl: '/project',
  },
  { menuCode: 'DEVOPS_BUILD', alt: 'Build', menuUrl: '/console/projects/build/list' },
  { menuCode: 'DEVOPS_DEPLOY', alt: 'Deploy', menuUrl: '/console/projects/deploy/list' },
  { menuCode: 'DEVOPS_REPOSITORY', alt: 'Repository', menuUrl: '/console/projects/repository/file' },
  { menuCode: 'DEVOPS_MEMBER', alt: 'Member', menuUrl: '회원' },
  {
    menuCode: 'DEVOPS_SETTINGS',
    alt: 'DevOps Settings',
    menuUrl: 'DevOps 환경설정',
  },
  {
    menuCode: 'DEVOPS_TOOLCHAIN_CONFIG',
    alt: 'Toolchain Config (Service Group Mgmt)',
    menuUrl: '툴체인 구성 (서비스 그룹 관리)',
  },
  {
    menuCode: 'DEVOPS_JENKINS_STAGE_MANAGEMENT',
    alt: 'Jenkins Stage Management',
    menuUrl: '젠킨스 스테이지 관리',
  },
  {
    menuCode: 'DEVOPS_SONARQUBE_RULE_MANAGEMENT',
    alt: 'SonarQube Rule Management',
    menuUrl: '소나큐브 룰 관리',
  },
  {
    menuCode: 'DEVOPS_CLUSTER_MANAGEMENT',
    alt: 'Cluster Management',
    menuUrl: '클러스터 관리',
  },
  {
    menuCode: 'DEVOPS_ARTFACT_MANAGEMENT',
    alt: 'Artfact Management',
    menuUrl: '산출물 관리',
  },
  {
    menuCode: 'DEVOPS_PROJECT_RECOVERY',
    alt: 'Project Recovery',
    menuUrl: '프로젝트 복구',
  },
  {
    menuCode: 'DEVOPS_NOTIFICATION_MANAGEMENT',
    alt: 'Notification Management',
    menuUrl: '알림 관리',
  },
  {
    menuCode: 'DEVOPS_NOTIFICATION',
    alt: 'Notification',
    menuUrl: '알림',
  },
  {
    menuCode: 'DEVOPS_PORTAL_MANAGEMENT',
    alt: 'Portal Management',
    menuUrl: '포탈 관리',
  },
  {
    menuCode: 'DEVOPS_PERMISSION_MANAGEMENT',
    alt: 'Permission Management',
    menuUrl: '권한 관리',
  },
  {
    menuCode: 'DEVOPS_APPROVAL_MANAGEMENT',
    alt: 'Approval Management',
    menuUrl: '승인 관리',
  },
  {
    menuCode: 'DEVOPS_TOOLCHAIN_CONFIG',
    alt: 'Toolchain Config',
    menuUrl: '툴체인 환경 설정',
  },
  {
    alt: 'Integrated Monitor',
    menuCode: 'INTEGRATED_MONITOR',
    menuUrl: `${import.meta.env.VITE_MONITORING_PORTAL}/mnt`,
  },
  {
    alt: 'MSA Management',
    menuCode: 'MSA_MANAGEMENT',
    menuUrl: `${import.meta.env.VITE_MSA_PORTAL}/api-gateway`,
  },
  {
    alt: 'Open API Management',
    menuCode: 'OPEN_API_MANAGEMENT',
    menuUrl: `${import.meta.env.VITE_OPEN_API_PORTAL_ADMIN}/api-server`,
  },
  {
    alt: 'Open API Management User',
    menuCode: 'OPEN_API_MANAGEMENT_USER',
    menuUrl: `${import.meta.env.VITE_OPEN_API_PORTAL_USER}/list`,
  },
  {
    alt: 'API Mapper',
    menuCode: 'API_MAPPER',
    menuUrl: `${import.meta.env.VITE_API_MAPPER_PORTAL}/#/projects`,
  },
  {
    alt: 'Private Cloud Console',
    menuCode: 'PRIVATE_CLOUD_CONSOLE',
    menuUrl: `${import.meta.env.VITE_PRIVATE_CLOUD_PORTAL}/vm-cloud`,
  },
  {
    alt: 'Log Monitor',
    menuCode: 'LOG_MONITOR',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/log-monitor`,
  },
]
