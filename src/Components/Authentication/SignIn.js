import React from 'react'
import {useState, useEffect} from 'react'
import Database from '../../Database/Firebase'
import LoginForm from './LoginForm';
import HomePage from '../../Web/HomePage';


const SignIn =()=>{
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [emailerror, setEmailError] = useState('');
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
        .catch(err =>{
            switch(err.code){
                case "auth/invalid-email":
                  case "auth/user-disabled":
                    case "auth/user-not-found":
                      setEmailError(err.message);
                      break;
                      case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                        default:
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
                setUser('');
            }
        })
    }

    useEffect(()=> {
       existingUserListener();
    })

    return (
        <div>
           {user ? <HomePage handleLogOut={handleLogOut} /> :
           
               <LoginForm 
               email={email} 
               setEmail={setEmail}
               password={password}
               setPassword={setPassword} 
               HandleSignIn={HandleSignIn}
               EmailError={emailerror}
               PasswordError={passworderror}
               setEmailError={setEmailError}
               setPasswordError={setPasswordError}
            />}
        </div>
      
         
    
    )
}

export default SignIn;
