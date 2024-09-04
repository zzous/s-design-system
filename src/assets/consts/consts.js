export const NAVI_MENU = [
  {
    title: '프로젝트 관리', value: 'settingProject', subMenu: [{
      title: '빌드', value: 'build'
    }, {
      title: '배포', value: 'deploy'
    }, {
      title: '저장소', value: 'repository'
    }, {
      title: '회원', value: 'user'
    }]
  }, {
    title: 'DevOps 환경설정', value: 'settingDevOps', subMenu: [{
      title: '툴체인 구성 (테넌트 관리)', value: 'settingToolChain'
    }, {
      title: '젠킨스 스테이지 관리', value: 'settingJenkins'
    }, {
      title: '소나큐브 룰 관리', value: 'settingSonarRule'
    }, {
      title: '클러스터 관리', value: 'settingCluster'
    }, {
      title: '산출물 관리', value: 'settingProduct'
    }, {
      title: '프로젝트 복구', value: 'restoreProject'
    }]
  }, {
    title: '포탈 관리', value: 'settingPortal', subMenu: [{
      title: '툴체인 환경 설정', value: 'settingToolChainEnv'
    }]
  }]
export const HEADER_MENU = [
  { title: '사용자 관리', value: 'manageUser' },
  { title: '예측 관리', value: 'manageExpecting' },
  { title: '비용 관리', value: 'manageCost' },
  { title: '업무 요청 관리', value: 'manageWorkRequest' },
  { title: '소프트웨어 카탈로그', value: 'softwareCatalog' },
  { title: '클라우드 기준 정보', value: 'cloudBaseInfo' },
  { title: '클라우드 상품 조회', value: 'cloudProductInfo' },
  { title: '클라우드 인프라 관리', value: 'manageCloudInfra' },
  { title: '컨테이너 관리', value: 'manageContainer' },
  { title: '데브옵스', value: 'devOps' },
  { title: '클라우드 모니터링', value: 'cloudMonitoring' },
  { title: 'MSA 관리', value: 'manageMSA' },
  { title: 'Open API 관리', value: 'manageOpenAPI' },
  { title: 'Open API 관리(사용자)', value: 'manageOpenAPIForUser' },
  { title: 'API 맵퍼', value: 'apiMapper' },
  { title: 'Private 클라우드 관리', value: 'managePrivateCloud' },
  { title: '로그 모니터링', value: 'logMonitoring' },
  { title: '기업 관리', value: 'manageCompany' }
]