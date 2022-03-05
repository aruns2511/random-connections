import { Button } from '@material-ui/core';
import React from 'react';
import "./Login.css";
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [{},dispatch]=useStateValue();

    const signIn=()=>{
      auth
          .signInWithPopup(provider)
          .then((result)=>{
            dispatch({
              type:actionTypes.SET_USER,
              user:result.user,
            })
          })
          .catch((error)=>alert(error.message));
    };

  return (
    <div className='login'>
        <div className="login__container">
        <img
            src="https://1000logos.net/wp-content/uploads/2021/04/WhatsApp-logo-768x432.png" alt=""/>
    <div className="login__text">
        <h1>Sign in to random-connections</h1>
    </div>
    <Button onClick={signIn}>
        Sign In With Google
    </Button>
    </div>
    </div>
  );
}

export default Login