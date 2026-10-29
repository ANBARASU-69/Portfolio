pipeline {
    agent any
    stages {
        stage('Build') {
            steps { echo 'Building portfolio...' }
        }
        stage('Test') {
            steps { echo 'Testing...' }
        }
    }
}