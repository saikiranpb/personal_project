import { useState, useContext } from "react";
import { signInWithGooglePopup,signInUserWithEmailAndPassword ,createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from "../Form-Input/FormInput";
import './sign-in.styles.scss'
import Button from '../button/Button'

const defaultFormFields={
    email:'',
    password:'',
}

const SignIn =()=>{
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {email, password}=formFields;

    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }
    const logGoogleUser = async()=>{
       await signInWithGooglePopup();
        // setCurrentUser(user)
       
      }

    const handleChange =(e)=>{
        const {name, value}= e.target;
        setFormFields({...formFields, [name]:value})
    }

    const handleSubmit =async (event)=>{
        event.preventDefault();
        console.log(email,password)
        try{
            const {user}= await signInUserWithEmailAndPassword(email,password);
            // setCurrentUser(user)
            resetFormFields();
        } catch(error){
            switch(error.code){
                case 'auth/wrong-password': 
                  alert('incorrect password for email')
                  break;
                case 'auth/user-not-found':
                 alert('No user found with the email')
                break;
                default :
                console.log(error)
            }       
        }
    }
    return(
        <div className="sign-up-container">
            <h2>Already have an account</h2>
            <span >
                Sign in with your email and password
            </span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name='email' value={email}/>
                <FormInput label="Password" type="password" required onChange={handleChange} name='password' value={password}/>
               <div className="buttons-container">
                <Button type="submit">Sign  In</Button>
                <Button type="button" buttonType="google" onClick={logGoogleUser}>Sign In with Google</Button>
               </div>
            </form>
        </div>
    )
}

 export default SignIn;