import React, { useEffect } from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route}
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Register from "./Register";
import Footer from "./Footer";
import Payment from "./Payment"

import { loadStripe } from "@stripe/stripe-js"
import { CardElement, Elements, useElements, useStripe } from "@stripe/react-stripe-js"
import Orders from "./Orders";

//If an error for firebase login
// then paste this - Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser
// firebase login
// firebase init

//to deploy do this again
// npm run build 
// firebase deploy

// Now to deploy backend and frontend 
// npm run build
// firebase deploy --only hosting (this is frontend)

// to start backend
// firebase emulators:start
// firebase deploy --only functions


//To do the payment method we have to first download stripe, that is what handles the payment stuff
//npm i @stripe/stripe-js
//npm i @stripe/react-stripe-js

const promise = loadStripe("pk_test_51I4wsSDNosFzfdDhPhLjLFjXz5SIle0vmQnk6FuafjIviiwcFcG1NYRxckUp3sR7WDObPcCOpgWzaXKbwOGXmxzR002bBy7KP6"); {/* This is a publisher key */}


function App() {

  const [{}, dispatch] = useStateValue();


  useEffect (() => {
    // will only work once when the app component loads...
    // kind of like an if statement...
    auth.onAuthStateChanged(authUser =>{
      console.log('THE USER IS >>> ', authUser);

      if (authUser){
        // the user just logged in / the user was logged in

        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="App">
        
        <Switch>

          <Route path="/payment"> 
            <Header />
            <Elements stripe={promise}> {/* Higer order function */}
              <Payment />
            </Elements>
            <Footer />
          </Route>


          <Route path="/login"> {/* This is a login page route */}
            <Login />
          </Route>
         
          <Route path="/checkout"> {/* This is Checkout page route */}
            <Header />
            <Checkout />
            <Footer />
          </Route>
          
          <Route path="/orders">
            <Header /> 
            <Orders />
          </Route>


          <Route path="/register"> 
            <Register />
          </Route>

          <Route path="/"> {/* This is Home page route, this needs to be at the bottom*/}
            <Header />
            <Home />
            <Footer />
          </Route>
        
        </Switch>
      
      </div>
    
    </Router> 
  );
}

export default App;
