import {initializeApp} from 'firebase/app'
import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'

const firebaseConfig = {
    apiKey: 'AIzaSyAZVWfmwcFz5JdPa4_wd6krOuWxXJEqDxM',
    authDomain: 'react-crwn-2023.firebaseapp.com',
    projectId: 'react-crwn-2023',
    storageBucket: 'react-crwn-2023.appspot.com',
    messagingSenderId: '407153170489',
    appId: '1:407153170489:web:d3473e7dfabae9c39dd5e8'
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)