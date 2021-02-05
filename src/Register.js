import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Register.css";


function Register() {
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            //it succeffully created a new user with email and password
            console.log(auth);

            if (auth) {
                history.push('/')
            }
        })
        .catch(error => alert(error.message))

    }

    return (
        <div className = "registerPage">
            <Link to = "/">
            <img 
                className="register__logo"
                src ="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" 
            />
            </Link>

            <div className="register__container">
                <h1>Create account</h1>

                <form>
                    <h5>Your name</h5>
                    <input type = "text" value ={name}
                        onChange={e=>setName(e.target.value)}/>

                    <h5>Email</h5>
                    <input type = "text" value ={email}
                        onChange={e=>setEmail(e.target.value)}/>
    
                    <h5>Password</h5>
                    <input type = "password" value ={password}
                        onChange={e=>setPassword(e.target.value)}/>
                    
                    <p>By creating an account, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                    <button type = "registerButton" onClick = {register}
                        className = "login__registerButton">
                        Create your Amazon Account
                    </button>

                    <p className = "back__login">Already have an account?
                        <Link to="/login">
                            <p>Sign In</p>
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Register
