pipeline {
    agent any

    tools {
        nodejs 'Node 20'
    }

    environment {
        PLAYWRIGHT_BROWSERS_PATH = 'C:\\playwright-browsers'
    }

    stages {

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Run Smoke Tests') {
            steps {
                bat 'npx playwright test src/tests/smoke --workers=1'            }
        }
    }

    post {
        always {
            publishHTML([
                allowMissing: true,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright Report'
            ])
        }
    }
}