import React from 'react'
import './Form.css';


const LoginForm =(props) =>{
    const{
            email, setEmail, 
            password,  setPassword,
            HandleSignIn, 
          emailerror, passworderror,
    }=props;


    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="email" autoFocus  required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailerror}</p>

                <label>Password</label>
                <input type="password" required autoFocus value={password} onChange={(e) =>setPassword(e.target.value)}/>
                <p className="errorMsg">{passworderror}</p>

                <div className="btnContainer">
                    <button onClick={HandleSignIn}>SignIn</button>
                </div>
            </div>
            

        </section>
    )
}

export default LoginForm;
