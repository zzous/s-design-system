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
  {
    alt: 'authorization email',
    menuCode: 'MY_PAGE',
    menuUrl: '/user-account/auth/email',
    accessible: true,
  },
  {
    alt: 'change password',
    menuCode: 'MY_PAGE',
    menuUrl: '/user-account/change/password',
    accessible: true,
  },
  {
    alt: 'withdraw',
    menuCode: 'MY_PAGE',
    menuUrl: '/user-account/withdraw',
    accessible: true,
  },
  {
    alt: 'User Management',
    menuCode: 'USER_MANAGEMENT',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/user-mgmt`,
  },
  {
    alt: 'company information',
    menuCode: 'COMPANY_INFORMATION',
    menuUrl: '/company/detail',
    accessible: true,
  },
  {
    alt: 'User',
    menuCode: 'USER',
    menuUrl: '/user-mgmt/user/list',
  },
  {
    alt: 'Dept',
    menuCode: 'DEPT',
    menuUrl: '/user-mgmt/dept/list',
  },
  {
    alt: 'Tenant',
    menuCode: 'TENANT',
    menuUrl: '/user-mgmt/tenant/list',
  },
  {
    alt: 'Menu Policy',
    menuCode: 'MENU_POLICY',
    menuUrl: '/user-mgmt/menu-policy/list',
  },
  {
    alt: 'Policy Mapping',
    menuCode: 'POLICY_MAPPING',
    menuUrl: '/user-mgmt/policy-mapping/list',
  },
  {
    alt: 'Role',
    menuCode: 'ROLE',
    menuUrl: '/user-mgmt/role/list',
  },
  {
    alt: 'Sign Up Request',
    menuCode: 'SIGN_UP_REQUEST',
    menuUrl: '/user-mgmt/signup/request/list',
  },
  {
    alt: 'Withdrawn User',
    menuCode: 'WITHDRAWN_USER',
    menuUrl: '/user-mgmt/withdrawn-user/list',
  },
  // 기업 관리
  {
    alt: 'Company Management',
    menuCode: 'COMPANY_MANAGEMENT',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/company-mgmt`,
  },
  {
    alt: 'Company',
    menuCode: 'COMPANY',
    menuUrl: '/company-mgmt/company/list',
  },
  // 예측
  {
    alt: 'Forecast',
    menuCode: 'FORECAST',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/forecast`,
  },
  {
    alt: 'Forecast Cluster',
    menuCode: 'FORECAST_CLUSTER',
    menuUrl: '/forecast/cluster',
  },
  {
    alt: 'Forecast Node',
    menuCode: 'FORECAST_NODE',
    menuUrl: '/forecast/node',
  },
  // MSP 콘솔
  {
    alt: 'MSP Cost',
    menuCode: 'MSP_COST',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/msp`,
  },
  {
    alt: 'MSP Cost Dashboard',
    menuCode: 'MSP_COST_DASHBOARD',
    menuUrl: '/msp/dashboard',
  },
  {
    alt: 'MSP Billing Management',
    menuCode: 'MSP_BILLING_MANAGEMENT',
    menuUrl: '/msp/billing',
  },
  {
    alt: 'MSP Credit Management',
    menuCode: 'MSP_CREDIT_MANAGEMENT',
    menuUrl: '/msp/credit',
  },
  // {
  //   alt: 'Metering Management',
  //   menuCode: 'METERING_MANAGEMENT',
  //   menuUrl: '/cost/metering',
  // },
  {
    alt: 'MSP Metering Public Cloud',
    menuCode: 'MSP_METERING_MANAGEMENT',
    menuUrl: '/msp/metering/public',
  },
  // {
  //   alt: 'Metering Private Cloud',
  //   menuCode: 'METERING_PRIVATE_CLOUD',
  //   menuUrl: '/cost/metering/private',
  // },
  // {
  //   alt: 'Invoice',
  //   menuCode: 'INVOICE',
  //   menuUrl: '/cost/invoice',
  // },
  {
    alt: 'MSP Invoice Public Cloud',
    menuCode: 'MSP_INVOICE',
    menuUrl: '/msp/invoice/public',
  },
  // {
  //   alt: 'Invoice Private Cloud',
  //   menuCode: 'INVOICE_PRIVATE_CLOUD',
  //   menuUrl: '/cost/invoice/private',
  // },
  {
    alt: 'MSP Contract Code Management',
    menuCode: 'MSP_CONTRACT_CODE_MANAGEMENT',
    menuUrl: '/msp/contract-code',
  },
  {
    alt: 'MSP Cost Product Price Management',
    menuCode: 'MSP_COST_PRODUCT_PRICE_MANAGEMENT',
    menuUrl: '/msp/product-price',
  },
  // 비용 관리
  {
    alt: 'Cost',
    menuCode: 'COST',
    menuUrl: `${import.meta.env.VITE_STRATO_PORTAL}/cost`,
  },
  {
    alt: 'Cost Dashboard',
    menuCode: 'COST_DASHBOARD',
    menuUrl: '/cost/dashboard',
  },
  {
    alt: 'Billing Management',
    menuCode: 'BILLING_MANAGEMENT',
    menuUrl: '/cost/billing',
  },
  {
    alt: 'Credit Management',
    menuCode: 'CREDIT_MANAGEMENT',
    menuUrl: '/cost/credit',
  },
  {
    alt: 'Invoice Public Cloud',
    menuCode: 'INVOICE',
    menuUrl: '/cost/invoice/public',
  },
  {
    alt: 'Cost Report',
    menuCode: 'COST_REPORT',
    menuUrl: '/cost/report',
  },
  {
    alt: 'Cost Analysis',
    menuCode: 'COST_ANALYSIS',
    menuUrl: '/cost/analysis',
  },
  {
    alt: 'SR',
    menuCode: 'SR',
    menuUrl: `${import.meta.env.VITE_SR_PORTAL}/#/sr`,
  },
  {
    alt: 'SR',
    menuCode: 'SR_DASHBOARD',
    menuUrl: '/dashboard',
  },
  {
    alt: 'SR task',
    menuCode: 'SR_TASK_LIST',
    menuUrl: '/task',
  },
  {
    alt: 'SR favorite',
    menuCode: 'SR_FAVORITE',
    menuUrl: '/favorite',
  },
  {
    alt: 'SR approval',
    menuCode: 'SR_APPROVAL',
    menuUrl: '/approval',
  },
  {
    alt: 'SR approval request',
    menuCode: 'SR_APPROVAL_REQUEST',
    menuUrl: '/approval/request',
  },
  {
    alt: 'SR approval response',
    menuCode: 'SR_APPROVAL_RESPONSE',
    menuUrl: '/approval/response',
  },
  {
    alt: 'SR workRequest',
    menuCode: 'SR_WORK_REQUEST',
    menuUrl: '/workRequest/list',
  },
  {
    alt: 'SR DEPLOY',
    menuCode: 'SR_DEPLOY',
    menuUrl: '/deploy',
  },
  {
    alt: 'SR test-scenario',
    menuCode: 'SR_TEST_SCENARIO',
    menuUrl: '/test-scenario',
  },
  {
    alt: 'SR portal management',
    menuCode: 'SR_PORTAL_MANAGEMENT',
    menuUrl: '/management',
  },
  {
    alt: 'SR userGroupList',
    menuCode: 'SR_PORTAL_MANAGEMENT_USER_GROUP_LIST',
    menuUrl: '/management/userGroupList',
  },
  {
    alt: 'SR approve-step',
    menuCode: 'SR_PORTAL_MANAGEMENT_APPROVAL_STEP',
    menuUrl: '/management/approve-step',
  },
  {
    alt: 'SR workflow',
    menuCode: 'SR_PORTAL_MANAGEMENT_WORKFLOW',
    menuUrl: '/management/workflow',
  },
  {
    alt: 'Software Catalog',
    menuCode: 'SOFTWARE_CATALOG',
    menuUrl: `${import.meta.env.VITE_CATALOG_DEPLOY_PORTAL}/#/projects/connection`,
  },
  // --- s: 카탈로그 메뉴 ---
  {
    alt: 'Cloud Resource Catalog',
    menuCode: 'CLOUD_RESOURCE_CATALOG',
    menuUrl: `${import.meta.env.VITE_INFRA_PORTAL}/catalog`,
  },
  {
    alt: 'Instance Product list',
    menuCode: 'CLOUD_RESOURCE_CATALOG_INSTANCE_CATALOG_LIST',
    menuUrl: '/catalog/server-catalog/instance-product/list',
  },
  {
    alt: 'Block Storage Product list',
    menuCode: 'CLOUD_RESOURCE_CATALOG_BLOCK_STORAGE_CATALOG_LIST',
    menuUrl: '/catalog/storage-catalog/block-storage-product/list',
  },
  {
    alt: 'K8S Instance Product list',
    menuCode: 'CLOUD_RESOURCE_CATALOG_K8S_INSTANCE_CATALOG_LIST',
    menuUrl: '/catalog/k8s-catalog/instance-product/list',
  },
  {
    alt: 'Recommended Product Config',
    menuCode: 'CLOUD_RESOURCE_CATALOG_RECOMMENDED_PRODUCT_CONFIG',
    menuUrl: '/catalog/recommended-product/instance-product/config',
  },
  // --- e: 카탈로그 메뉴 ---
  // --- s: 구성정보 메뉴 ---
  {
    alt: 'Cloud Configuration Information',
    menuCode: 'CLOUD_CONFIGURATION_INFORMATION',
    menuUrl: `${import.meta.env.VITE_INFRA_PORTAL}/cloud-config`,
  },
  {
    alt: 'Region',
    menuCode: 'CLOUD_CONFIGURATION_REGION_LIST',
    menuUrl: '/cloud-config/region',
  },
  {
    alt: 'Zone',
    menuCode: 'CLOUD_CONFIGURATION_ZONE_LIST',
    menuUrl: '/cloud-config/zone',
  },
  {
    alt: 'OS Image',
    menuCode: 'CLOUD_CONFIGURATION_OS_IMAGE_LIST',
    menuUrl: '/cloud-config/os-image',
  },
  {
    alt: 'Instance Type',
    menuCode: 'CLOUD_CONFIGURATION_INSTANCE_TYPE_LIST',
    menuUrl: '/cloud-config/instance-type',
  },
  {
    alt: 'Block Storage Type',
    menuCode: 'CLOUD_CONFIGURATION_BLOCK_STORAGE_TYPE_LIST',
    menuUrl: '/cloud-config/block-storage-type',
  },
  {
    alt: 'K8S Version',
    menuCode: 'CLOUD_CONFIGURATION_K8S_VERSION_LIST',
    menuUrl: '/cloud-config/k8s-version',
  },
  {
    alt: 'K8S Image',
    menuCode: 'CLOUD_CONFIGURATION_K8S_IMAGE_LIST',
    menuUrl: '/cloud-config/k8s-image',
  },
  {
    alt: 'Cluster',
    menuCode: 'CLOUD_CONFIGURATION_VM_CLUSTER_LIST',
    menuUrl: '/cloud-config/cluster',
  },
  {
    alt: 'Host',
    menuCode: 'CLOUD_CONFIGURATION_HOST_LIST',
    menuUrl: '/cloud-config/host',
  },
  {
    alt: 'Datastore',
    menuCode: 'CLOUD_CONFIGURATION_DATASTORE_LIST',
    menuUrl: '/cloud-config/datastore',
  },
  {
    alt: 'Network',
    menuCode: 'CLOUD_CONFIGURATION_NETWORK_LIST',
    menuUrl: '/cloud-config/network',
  },
  {
    alt: 'Operation Settings',
    menuCode: 'CLOUD_CONFIGURATION_OPERATION_SETTINGS',
    menuUrl: '/cloud-config/opt-set',
  },
  {
    alt: 'Private Region Settings',
    menuCode: 'CLOUD_CONFIGURATION_PRIVATE_REGION_SETTINGS',
    menuUrl: '/cloud-config/opt-set/region',
  },
  {
    alt: 'Private Resource Quota Settings',
    menuCode: 'CLOUD_CONFIGURATION_PRIVATE_QUOTA_SETTINGS',
    menuUrl: '/cloud-config/opt-set/quota',
  },

  // --- e: 구성정보 메뉴 ---
  // --- s: 자원 메뉴 ---
  {
    alt: 'Cloud Resource Console',
    menuCode: 'CLOUD_RESOURCE_CONSOLE',
    menuUrl: `${import.meta.env.VITE_INFRA_PORTAL}/resources`,
  },
  {
    alt: 'Dashboard',
    menuCode: 'CLOUD_RESOURCE_DASHBOARD',
    menuUrl: '/resources/dashboard',
  },
  {
    alt: 'Instance List',
    menuCode: 'CLOUD_RESOURCE_VM_INSTANCE_MANAGEMENT',
    menuUrl: '/resources/instance/instance/list',
  },
  {
    alt: 'authentication Key List',
    menuCode: 'CLOUD_RESOURCE_KEY_PAIR_MANAGEMENT',
    menuUrl: '/resources/instance/keypair',
  },
  {
    alt: 'BlockStorage List',
    menuCode: 'CLOUD_RESOURCE_BLOCK_STORAGE_MANAGEMENT',
    menuUrl: '/resources/block-storage/block-storage/list',
  },
  {
    alt: 'Vpc List',
    menuCode: 'CLOUD_RESOURCE_VPC_MANAGEMENT',
    menuUrl: '/resources/network/vpc/list',
  },
  {
    alt: 'Subnet List',
    menuCode: 'CLOUD_RESOURCE_SUBNET_MANAGEMENT',
    menuUrl: '/resources/network/subnet/list',
  },
  {
    alt: 'SecurityGroup List',
    menuCode: 'CLOUD_RESOURCE_SECURITY_GROUP_MANAGEMENT',
    menuUrl: '/resources/network/security-group/list',
  },
  {
    alt: 'Routing',
    menuCode: 'CLOUD_RESOURCE_ROUTING_MANAGEMENT',
    menuUrl: '/resources/network/routing/list',
  },
  {
    alt: 'Public Ip',
    menuCode: 'CLOUD_RESOURCE_PUBLIC_IP_MANAGEMENT',
    menuUrl: '/resources/network/public-ip/list',
  },
  {
    alt: 'Network Interface List',
    menuCode: 'CLOUD_RESOURCE_NETWORK_INTERFACE_MANAGEMENT',
    menuUrl: '/resources/network/network-interface/list',
  },
  {
    alt: 'Network Acl List',
    menuCode: 'CLOUD_RESOURCE_NETWORK_ACL_MANAGEMENT',
    menuUrl: '/resources/network/network-acl/list',
  },
  {
    alt: 'Bucket List',
    menuCode: 'CLOUD_RESOURCE_OBJECT_STORAGE_MANAGEMENT',
    menuUrl: '/resources/object-storage/bucket/list',
  },
  {
    alt: 'Access Key List',
    menuCode: 'CLOUD_RESOURCE_ACCESS_KEY_MANAGEMENT',
    menuUrl: '/resources/object-storage/access-key/list',
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
    alt: 'Integrated Monitor Dashboard',
    menuCode: 'INTEGRATED_MONITOR_DASHBOARD',
    menuUrl: '/mnt/main',
  },
  {
    alt: 'Integrated Monitor Instance',
    menuCode: 'INTEGRATED_MONITOR_INSTANCE',
    menuUrl: '/mnt/instance',
  },
  {
    alt: 'Integrated Monitor Alert',
    menuCode: 'INTEGRATED_MONITOR_ALERT',
    menuUrl: '/mnt/alert-manager',
  },
  {
    alt: 'Integrated Monitor Rules',
    menuCode: 'INTEGRATED_MONITOR_RULES',
    menuUrl: '/mnt/alert-manager/rule',
  },
  {
    alt: 'Integrated Monitor Receiver',
    menuCode: 'INTEGRATED_MONITOR_RECEIVER',
    menuUrl: '/mnt/alert-manager/receiver',
  },
  {
    alt: 'Integrated Monitor Message',
    menuCode: 'INTEGRATED_MONITOR_MESSAGE',
    menuUrl: '/mnt/alert-manager/message',
  },
  {
    alt: 'MSA Management',
    menuCode: 'MSA_MANAGEMENT',
    menuUrl: `${import.meta.env.VITE_MSA_PORTAL}/api-gateway`,
  },
  {
    alt: 'API Gateway Management',
    menuCode: 'MSA_API_GATEWAY_MANAGEMENT',
    menuUrl: '/api-gateway/api-gateway',
  },
  {
    alt: 'API Gateway',
    menuCode: 'MSA_API_GATEWAY',
    menuUrl: '/api-gateway/api-gateway/list',
  },
  {
    alt: 'Discovery Management',
    menuCode: 'MSA_DISCOVERY_MANAGEMENT',
    menuUrl: '/api-gateway/discovery',
  },
  {
    alt: 'Discovery',
    menuCode: 'MSA_DISCOVERY',
    menuUrl: '/api-gateway/discovery/list',
  },
  {
    alt: 'API Server',
    menuCode: 'MSA_MICRO_SERVICE_MANAGEMENT',
    menuUrl: '/api-gateway/api-server',
  },
  {
    alt: 'MSA Management',
    menuCode: 'MSA_MICRO_SERVICE',
    menuUrl: '/api-gateway/api-server/api-server/list',
  },
  {
    alt: 'MSA Management',
    menuCode: 'MSA_API_SERVER',
    menuUrl: '/api-gateway/api-server/api/list',
  },
  {
    alt: 'MSA Management',
    menuCode: 'MSA_POLICY',
    menuUrl: '/api-gateway/policy',
  },
  {
    alt: 'Policy BlackList',
    menuCode: 'MSA_BLACK_LIST',
    menuUrl: '/api-gateway/policy/black-list/list',
  },
  {
    alt: 'Policy WhiteList',
    menuCode: 'MSA_WHITE_LIST',
    menuUrl: '/api-gateway/policy/white-list/list',
  },
  {
    alt: 'Traffic List',
    menuCode: 'MSA_TRAFFIC_LIST',
    menuUrl: '/api-gateway/policy/traffic/list',
  },
  {
    alt: 'Canary Dev. Test',
    menuCode: 'MSA_CANARY_DEV_TEST',
    menuUrl: '/api-gateway/policy/canary/list',
  },
  {
    alt: 'Circuit Breaker',
    menuCode: 'MSA_CIRCUIT_BREAKER',
    menuUrl: '/api-gateway/policy/circuit-breaker/list',
  },
  {
    alt: 'MSA Management',
    menuCode: 'MSA_DISTRIBUTED_TRACING_LOG',
    menuUrl: '/api-gateway/trace',
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
  {
    alt: 'Audit Log',
    menuCode: 'LOG_MONITOR_AUDIT',
    menuUrl: '/log-monitor/audit',
  },
  {
    alt: 'Cloud History',
    menuCode: 'LOG_MONITOR_CLOUD_HISTORY',
    menuUrl: '/log-monitor/audit/cloud_history',
  },
  {
    alt: 'Container History',
    menuCode: 'LOG_MONITOR_CONTAINER_HISTORY',
    menuUrl: '/log-monitor/audit/container_history',
  },
  {
    alt: 'Login History',
    menuCode: 'LOG_MONITOR_LOGIN_HISTORY',
    menuUrl: '/log-monitor/login_history',
  },
  {
    alt: 'Access History',
    menuCode: 'LOG_MONITOR_ACCESS_HISTORY',
    menuUrl: '/log-monitor/access_history',
  },
]
