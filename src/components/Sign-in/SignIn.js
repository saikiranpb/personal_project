import React from 'react'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
export default function SignIn (){

    const logGoogleUser = async()=>{
      const {user} = await signInWithGooglePopup();
      console.log(user)
      const userDocRef = await createUserDocumentFromAuth(user);   
      // createUserDocumentFromAuth(user); 
    }
    return(
        <div>
          <h1>Sign In Page</h1>
          <button onClick={logGoogleUser}>
            Sign in with Google Popup
          </button>
        </div>
    )
}
