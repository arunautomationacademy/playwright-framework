pipeline {
  agent any

  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }
    stage('Install dependencies') {
      steps {
        sh 'npm ci'
      }
    }
    stage('Install Playwright browsers') {
      steps {
        sh 'npx playwright install --with-deps'
      }
    }
    stage('Run tests') {
      steps {
        sh 'npx playwright test'
      }
    }
    stage('Generate Allure report') {
      steps {
        sh 'allure generate allure-results --clean -o allure-report || true'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'playwright-report/**', fingerprint: true
      archiveArtifacts artifacts: 'allure-report/**', fingerprint: true
    }
  }
}
