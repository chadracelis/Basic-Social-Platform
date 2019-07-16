// USED FOR FIREBASE SECURITY 

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{project} {
      allow read, write: if request.auth.uid != null
    }
    match /users/{userId}{
      allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
    }
    match /notifications/{notification} {
      allow read, write: if request.auth.uid != null
    }
  }
}
