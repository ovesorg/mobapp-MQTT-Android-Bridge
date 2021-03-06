// name: AndroidHub CI
// on:
//   push:
//     branches: [ master, app-deployment ]
//   pull_request:
//     branches: [ master, app-deployment ]

// jobs:
//   build:
//     runs-on: ubuntu-latest
//     steps:
//       - name: Checkout
//         uses: actions/checkout@v2.3.4
//       - name: Setup JDK
//         uses: actions/setup-java@v1.4.3
//         with:
//           java-version: 1.8
//       - name: Grant execute permission for gradlew
//         run: chmod +x gradlew
//       - name: Build with Gradle
//         run: ./gradlew build
//       - name: Upload a Build Artifact
//         uses: actions/upload-artifact@v2.2.2
//         with:
//           name: AndroidHub App
//           path: app/build/outputs/apk/debug/app-debug.apk
