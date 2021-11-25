import React from 'react'
import classes from './Form.module.css';
import efac from '../../Images/efac.jpeg';


const LoginForm =(props) =>{

    const{
        email,setEmail,
        password,setPassword,
        HandleSignIn, emailerror,passworderror
        
    }=props;

    return (
        <section className={classes.login}>
             
            <div className={classes.loginContainer}>
            <div className={classes.logo}> <img src={efac} alt="" /></div>
                <label>Username</label>
                <input type="email" placeholder="efac@test.com"  required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailerror}</p>

                <label>Password</label>
                <input type="password" placeholder="123456" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passworderror}</p>

                <div className={classes.btnContainer}>
                    <button onClick={HandleSignIn}>SignIn</button>
                    <p>Don't have an Account?<span>Contact EFAC-IT ADMIN</span></p>
                </div>
            </div>
            

        </section>
    )
}

export default LoginForm;
