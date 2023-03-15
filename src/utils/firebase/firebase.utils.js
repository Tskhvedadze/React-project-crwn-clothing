import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
} from 'firebase/auth'

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

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

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    const userSnapshot = await getDoc(userDocRef)

    //  if user does not exists, then we set the users inside our database
    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    //  is user exists
    return userDocRef
}
