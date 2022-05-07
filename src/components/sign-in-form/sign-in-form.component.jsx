import { useState } from 'react'

import { FormInput } from '../form-input/form-input.component'
import Button from '../button/button.component'

import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword 
} from '../../utils/firebase/firebase.utils'

import './sign-in-form.styles.scss'


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
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (e) => {       
        e.preventDefault();
       

        try {

            const response = await signInAuthUserWithEmailAndPassword (
                email,
                password
            )
            console.log(response);
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
        <div className='sign-in-container'>
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

                <div className='buttons-container'>
                    <Button type='submit'>Ingresa</Button>
                    <Button type='button' buttonType='google' onClick={signInWithGoogle}>Ingresa con Google</Button>
                </div>
            </form>
        
        </div>
    )
}

export default SignInForm;