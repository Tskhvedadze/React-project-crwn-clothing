import { Category } from '../../store/categories/category.types'

import { initializeApp } from 'firebase/app'

import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    NextOrObserver,
    User,
} from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs,
    QueryDocumentSnapshot,
} from 'firebase/firestore'

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
initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const db = getFirestore()

export type ObjectToAdd = {
    title: string
}

export const addCollectionAndDocument = async <T extends ObjectToAdd>(
    collectionKey: string,
    objectsToAdd: T[],
): Promise<void> => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
    })

    await batch.commit()
    console.log('done')
}

export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
    const collectionRef = collection(db, 'categories')
    const q = query(collectionRef)

    const querySnapshot = await getDocs(q)
    return querySnapshot.docs.map(
        (docSnapshot) => docSnapshot.data() as Category,
    )
}

export type AdditionalInformation = {
    displayName?: string
}

export type UserData = {
    createdAt: Date
    displayName: string
    email: string
}

export const createUserDocumentFromAuth = async (
    userAuth: User,
    additionalInformation = {} as AdditionalInformation,
): Promise<void | QueryDocumentSnapshot<UserData>> => {
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
            console.log('error creating the user', error)
        }
    }

    //  is user exists
    return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (
    email: string,
    password: string,
) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (
    email: string,
    password: string,
) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
    onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const unsucbscribe = onAuthStateChanged(
            auth,
            (userAuth) => {
                unsucbscribe()
                resolve(userAuth)
            },
            reject,
        )
    })
}
