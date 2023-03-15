import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyA4FneO1WVKBhLFpF3j9WOfEwtxvB2nmQ0',
    authDomain: 'crwn-clothing-db-c21e2.firebaseapp.com',
    projectId: 'crwn-clothing-db-c21e2',
    storageBucket: 'crwn-clothing-db-c21e2.appspot.com',
    messagingSenderId: '73238459439',
    appId: '1:73238459439:web:10d0cffb7aa37d921582da',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)
