export const LOCALSTORAGE_KEY = Object.freeze({
  SERVICE_GROUP_UUID: 'STRATO_SG_UUID',
  SERVICE_GROUP_NAME: 'STRATO_SG_NAME',
  PROJECT_ID: 'STRATO_DEVOPS_PROJECT', // projectId
})

export const SESSIONSTORAGE_KEY = Object.freeze({
  STRATO_PORTAL_MENU: 'STRATO_PORTAL_MENU',
  STRATO_PORTAL_MENU_FLAT: 'STRATO_PORTAL_MENU_FLAT',
})

export const COOKIE_KEY = Object.freeze({
  REFRESH: 'refresh',
  ACCESS: 'access',
})

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
