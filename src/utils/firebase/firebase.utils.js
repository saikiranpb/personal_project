import {initializeApp} from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import  { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyD2a3GcGxmHgeeJei_qvXC23tmRNg1fkV4",
    authDomain: "crwn-clothing-db-0714.firebaseapp.com",
    projectId: "crwn-clothing-db-0714",
    storageBucket: "crwn-clothing-db-0714.appspot.com",
    messagingSenderId: "268350683643",
    appId: "1:268350683643:web:73f6d946f638fa407cf35e"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const googleProvider= new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth= getAuth();
  export const signInWithGooglePopup= ()=> signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect= ()=> signInWithRedirect(auth, googleProvider)


  export const db= getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, additionalInfo={}) =>{
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)
    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot.exists())
    if(!userSnapshot.exists()){
        const { displayName, email} = userAuth;
        const createdAt = new Date();
        try{
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInfo
            });
    
        }catch(error){
            console.log('error creating the user', error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword= async (email,password)=>{
    if(!email || !password) return;
     return await createUserWithEmailAndPassword(auth,email,password)
}