import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();

        createUserDocumentFromAuth( user )
    }
 
    return (
        <>
            <h1>Desde SingIn</h1>
            <button onClick={ logGoogleUser }>Sign in</button>
        </>
    )
}

export default SignIn