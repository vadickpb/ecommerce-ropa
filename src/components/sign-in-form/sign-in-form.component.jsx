import { useState } from 'react'

import { FormInput } from '../form-input/form-input.component'
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component'

import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils'

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'

const defaultFormFields = {
    email: '',
    password: '',
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async() => {
        const {user} = await signInWithGooglePopup();
        
    }

    const handleSubmit = async (e) => {       
        e.preventDefault();

        try {

            const {user} = await signInAuthUserWithEmailAndPassword (
                email,
                password
            )

            resetFormFields();
            

        } catch(error) {

            switch (error.code) {
                case 'auth/wrong-password':
                    alert('la contraseña es incorrecta')
                    break;
                case 'auth/user-not-found':
                    alert('EL usuario no se encuentra registrado')
                    break;
            
                default:
                    break;
            }
            console.error(error);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name] : value});
        // console.log(formFields);

    }


    return (
        <SignInContainer>
            <h2>¿Tienes una cuenta?</h2>
            <span>Ingresa tus datos para acceder</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label = "Email"
                    type="email" 
                    required 
                    onChange={ handleChange }
                    name = 'email'
                    value ={email}
                />
                <FormInput
                    label= "Password"
                    type="password" 
                    required 
                    onChange={ handleChange }
                    name = 'password'
                    value = {password}
                />

                <ButtonsContainer>
                    <Button type='submit'>Ingresa</Button>
                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Ingresa con Google</Button>
                </ButtonsContainer>
            </form>
        
        </SignInContainer>
    )
}

export default SignInForm;