import { initializeApp } from 'firebase/app'
import { getAuth, connectAuthEmulator } from 'firebase/auth'
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore'
import { getFunctions, connectFunctionsEmulator } from 'firebase/functions'

const firebaseConfig = {
  apiKey: "AIzaSyA3PQHFiAu0Jg4OINFZarfa7IOfJCQXsZI",
  authDomain: "ableto-app.firebaseapp.com",
  projectId: "ableto-app",
  storageBucket: "ableto-app.firebasestorage.app",
  messagingSenderId: "813339123429",
  appId: "1:813339123429:web:c7f90d04adfd56ebe7fe0c",
  measurementId: "G-8ECRJGZ2C3"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const functions = getFunctions(app, "us-central1")


function connectEmulators(host: string) {
  connectAuthEmulator(auth, `http://${host}:9099`, {disableWarnings: true})
  connectFirestoreEmulator(db, host, 8080)
  connectFunctionsEmulator(functions, host, 5001)
}

function turnOnEmulators() {
  if (typeof window === 'undefined') {
    return
  }
  switch (window.location.hostname) {
    case 'localhost':
      connectEmulators('localhost')
      break
    case '127.0.0.1':
      connectEmulators('127.0.0.1')
      break
    case '192.168.0.5': // Your local IP address
      connectEmulators('192.168.0.5')
      break
    default:
      break
  }
}
        
// Turn off for production
turnOnEmulators()

export { firebaseConfig, app, auth, db, functions, turnOnEmulators }