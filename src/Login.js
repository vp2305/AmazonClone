import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); {/* This is where it sets the user email and password */}

    const signIn=(e) => {
        e.preventDefault();//this makes it so it doesnt reload
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        }).catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
    }
    
    return (
        <div className = "login">
            <Link to = '/'>
                <img 
                    className="login__logo"
                    src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
                />
            </Link>

            <div className="login__container">
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type= 'text' value = {email} 
                        onChange={e=>setEmail(e.target.value)} /> {/* This is what gets the email from the user */}

                    <h5>Password</h5>
                    <input type= 'password' value={password}
                    onChange={e=>setPassword(e.target.value)} />{/* This is what gets the password from the user */}
                    
                    <button type='submit' onClick={signIn}  
                        className="login__signInButton">
                        Sign In
                    </button>
                </form>

                <p>
                    By sigining-in you agree to the AMAZON FAKE 
                    CLONE Conditions of Use and Privacy Notice.
                </p>

                {/*<button type='register' onClick={register} 
                    className="login__registerButton">
                    Create your Amazon Account
                </button> */}
                

                <Link to = "/register">
                    <button type = "register"
                        className = "clickregister__Button">
                        Create your Amazon Account
                    </button>
                </Link>
                
            </div>

        </div>
    )
}

export default Login
