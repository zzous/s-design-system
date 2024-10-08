export const NAVI_MENU = [
  {
    title: '프로젝트 관리',
    value: 'settingProject',
    subMenu: [
      {
        title: '빌드',
        value: 'build',
        url: '/console/projects/build/list'
      },
      {
        title: '배포',
        value: 'deploy',
        url: '/console/projects/deploy/list'
      },
      {
        title: '저장소',
        value: 'repository',
        url: '/console/projects/repository/file'
      },
      {
        title: '회원',
        value: 'user',
        url: '/console/projects/build/list'
      }
    ]
  },
  {
    title: 'DevOps 환경설정',
    value: 'settingDevOps',
    subMenu: [
      {
        title: '툴체인 구성 (테넌트 관리)',
        value: 'settingToolChain',
        url: '/console/projects/build/list'
      },
      {
        title: '젠킨스 스테이지 관리',
        value: 'settingJenkins',
        url: '/console/projects/build/list'
      },
      {
        title: '소나큐브 룰 관리',
        value: 'settingSonarRule',
        url: '/console/projects/build/list'
      },
      {
        title: '클러스터 관리',
        value: 'settingCluster',
        url: '/console/projects/build/list'
      },
      {
        title: '산출물 관리',
        value: 'settingProduct',
        url: '/console/projects/build/list'
      },
      {
        title: '프로젝트 복구',
        value: 'restoreProject',
        url: '/console/projects/build/list'
      }
    ]
  },
  {
    title: '포탈 관리',
    value: 'settingPortal',
    subMenu: [
      {
        title: '툴체인 환경 설정',
        value: 'settingToolChainEnv',
        url: '/console/projects/build/list'
      }
    ]
  }
]
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
export const DEFAULT_BUTTON_COLOR = '#017BE5'
export const DEFAULT_CHECKOUT_SCRIPT = `//It was created by the Devops portal.
pipeline {
  agent any

  environment {
    SERVICE_GROUP = 'imp-test-01'
    PROJECT_NAME  = 'springgradledemo'
    BRANCH        = 'dev'
    BUILD_NAME    = '<build-name>'
    DOCKERFILE_PATH = '/springgradledemo/docker/<build-name>'
    SONARQUBE_PROJECT = 'springgradledemo-dev'
    SONARQUBE_CREDENTIALS = '6-sonarqube-22-Credential'
    SPRINGPROFILES= '-Dspring.profiles.active=dev '
  }

  stages {

    stage('checkout') {
      steps {
        echo ' >>>>>STAGE: SOURCE CODE CHECKOUT'

        script {
          sh 'rm -rf ./* ./.g* ./.m* ./.s*'
          sh 'find . -name "*" -type f | xargs rm -rf'
        }
        git branch: env.BRANCH, credentialsId: '2-gitlab-22-Credential', url: 'http://10.10.30.21:18082/imp-test-01/springgradledemo.git'
      }
    }


    stage('dockerfile-checkout') {
      steps {
        echo ' >>>>>STAGE: DOCKERFILE CHECKOUT'

        checkout scmGit(
          branches: [[name: '*/'+env.BRANCH]],
          extensions: [
            [$class: 'RelativeTargetDirectory', relativeTargetDir: 'devops'],
            [$class: 'SparseCheckoutPaths', sparseCheckoutPaths: [[path: env.DOCKERFILE_PATH]]]
          ],
          userRemoteConfigs: [
            [credentialsId: '2-gitlab-22-Credential', url: 'http://10.10.30.21/imp-test-01/imp-test-01-devops-project.git']
          ]
        )
      }
    }


    stage('build') {
      steps {
        echo '>>>>>STAGE: GRADLE BUILD'

        sh 'chmod +x ./gradlew'
        sh './gradlew clean build -x test'
      }
    }`
export const DEFAULT_FILE_UPLOAD_SCRIPT = `stage('docker build') {
      steps {
        echo '>>>>>STAGE: DOCKER BUILD'

        script {
          BUILD_LOCATION = './devops'+env.DOCKERFILE_PATH
          CONTAINER_IMAGE_NAME=params.imageName
          ARTIFACT_NAME=''
          dir('./build/libs/') {
            sh 'ls *.jar > artifactFile'
            ARTIFACT_NAME = readFile('artifactFile').split("\\\\r?\\\\n")[0];
            sh 'rm -f artifactFile'
          }

          sh 'sed -i \\'s/ARTIFACT_NAME/' + ARTIFACT_NAME.replace(".", "\\\\.").replace("/", "\\\\/") + '/g\\' ' + BUILD_LOCATION + '/Dockerfile'
          sh 'sed -i \\"s/<SPRING_PROFILES_ACTIVE>/' + SPRINGPROFILES + '/g\\" ' + BUILD_LOCATION + '/entrypoint.sh'

          sh 'cp ./build/libs/' + ARTIFACT_NAME + ' ' + BUILD_LOCATION

          withDockerRegistry(url: 'https://10.10.30.23/', credentialsId: '3-harbor-Credential') {
            def image = docker.build(CONTAINER_IMAGE_NAME, BUILD_LOCATION)
            image.push()
          }

          sh 'docker rmi -f ' + CONTAINER_IMAGE_NAME

          sh 'rm ' + BUILD_LOCATION + '/' + ARTIFACT_NAME
        }
      }
    }
  }
}`

export const LOCALSTORAGE_KEY = {
  serviceGroup: 'STRATO_SG_UUID',
  serviceGroupName: 'STRATO_SG_NAME',
  selectedProject: 'STRATO_SELECTED_PROJECT'
}
