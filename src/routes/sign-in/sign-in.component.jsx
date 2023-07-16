import {signInWithGooglePopup} from '../../utils/firebase/firebase.utils'
const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup()
        console.log(response)
    }
    return (
        <>
            <div>SignIn</div>
            <button onClick={logGoogleUser}>Sign In With Google Popup</button>
        </>
    )
}
export default SignIn