import React from 'react'
import {useState, useEffect} from 'react'
import Database from '../../Database/Firebase'

import LoginForm from './LoginForm'

const SignIn =()=>{
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('');
    const [passworderror, setPasswordError] = useState('');


    const clearErrors=()=>{
        setEmailError('');
        setPasswordError('');
    }

    const clearInputs=()=>{
        setEmail('');
        setPassword('');
    }
    
    
    const HandleSignIn=()=>{
        clearErrors();
        Database
        .auth()
        .signInWithEmailAndPassword(email ,password)
        .catch(error => {
            switch(error.code){
                case "auth/invalid-email":
                    case "auth/user-disbaled":
                        case "auth/user-not-found":
                            setEmailError(error.message);
                            break
                            case "auth/wrong-password":
                                setPasswordError(error.message);
            }
        })


    }
    // Handles Log Out.

    const handleLogOut=()=>{
        Database
        .auth().signOut();
    }

    // Checking if there is an Existing User

    const existingUserListener =()=>{
        Database
        .auth().onAuthStateChanged(user => {
            if(user){
                clearInputs();
                setUser(user)
            }else{
                setUser(null);
            }
        })
    }

    useEffect(()=> {
       existingUserListener();
    },[])

    return (
      
             <LoginForm email={email} 
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword} 
                        hasAccount={hasAccount}
                        hasAccount={hasAccount}
                        HandleSignIn={HandleSignIn}
                        EmailError={emailError}
                        PasswordError={passworderror} 
                     />
    
    )
}

export default SignIn;
