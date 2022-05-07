import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import { 
    auth,
    signInWithGooglePopup, 
    signInWithGoogleRedirect, 
    createUserDocumentFromAuth 
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {


    useEffect( () => {
        async function getResp() {
            const resp = await getRedirectResult(auth)
            
            if (resp) {
                const userDocRef = await createUserDocumentFromAuth(resp.user);
            }
        }

        getResp();
    },[])
    // useEffect(async() => {
    //     const response = await getRedirectResult(auth)
    //     console.log(response)
    // }, [])

    const logGoogleUser = async() => {
        const {user} = await signInWithGooglePopup();

        createUserDocumentFromAuth( user )
    }

 
    return (
        <>
            <h1>Desde SingIn</h1>
            <button onClick={ logGoogleUser }>Sign con desde Google Popup</button>
            <button onClick={ signInWithGoogleRedirect }>Sign con desde Google Redirect</button>

            <SignUpForm />
        </>
    )
}

export default SignIn