import { initializeApp } from 'firebase/app'
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
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

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {},
) => {
    if (!userAuth) return

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
                ...additionalInformation,
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    //  is user exists
    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}
