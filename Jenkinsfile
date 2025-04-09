pipeline {
  agent any

  environment {
    NG_CLI_ANALYTICS = "false" // Disables Angular CLI telemetry
  }

  tools {
    nodejs "NodeJS 18" // Optional: only if you configured NodeJS in Jenkins tools
  }

  stages {
    stage('Checkout Code') {
      steps {
        echo '🔄 Cloning repo...'
        checkout scm
      }
    }

    stage('Install Dependencies') {
      steps {
        echo '📦 Running npm install...'
        sh 'npm install'
      }
    }

    stage('Build App') {
      steps {
        echo '⚙️ Building Angular app...'
        sh 'npm run build'
      }
    }

    stage('Run Tests') {
      steps {
        echo '🧪 Running unit tests...'
        sh 'ng test --watch=false --browsers=ChromeHeadless'
      }
    }

    stage('Deploy (Simulated)') {
      steps {
        echo '🚀 Simulating deploy...'
        sh 'ls -la dist/'
      }
    }
  }

  post {
    success {
      echo '✅ Build succeeded!'
    }
    failure {
      echo '❌ Build failed!'
    }
  }
}
