import {useEffect} from 'react'
import {auth, signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect} from '../../utils/firebase/firebase.utils'
import {getRedirectResult} from 'firebase/auth'

const SignIn = () => {
    useEffect(() => {
        const asyncFn = async () => {const response = await getRedirectResult(auth)}
        asyncFn()
    }, [])
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    return (
        <>
            <div>SignIn</div>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>Sign In With Google Redirect</button>
        </>
    )
}
export default SignIn