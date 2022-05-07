import { useState } from 'react'

import { FormInput } from '../form-input/form-input.component'
import Button from '../button/button.component'

import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'

import './sign-up-form.styles.scss'


const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}
const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (e) => {       
        e.preventDefault();
        if (password ===! confirmPassword) {
            alert("la contraseña no coincide");
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(
                email, 
                password
                );

            await createUserDocumentFromAuth(user, { displayName });
            resetFormFields();
            

        } catch(error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('No puedes crear un usuario con un correo en uso')
            }
            console.error('creacion del usuario tiene un error', error);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormFields({...formFields, [name] : value});
        // console.log(formFields);

    }


    return (
        <div className='sign-up-container'>
            <h2>¿No tienes una cuenta?</h2>
            <span>Registrate con tu correo y contraseña</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label = "Display Name"
                    type="text" 
                    required 
                    onChange={ handleChange }
                    name = 'displayName' 
                    value= {displayName}
                />
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
                <FormInput
                    label="Confirm Password"
                    type="password" 
                    required 
                    onChange={ handleChange }
                    name = 'confirmPassword'
                    value = {confirmPassword}
                />

                <Button type='submit'>Registrate</Button>
            </form>
        
        </div>
    )
}

export default SignUpForm;