import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase'
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';

function Login() {
  const [{ }, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(result => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <img src="https://i.ibb.co/K0RhWQw/img1.png" alt="logo messenger" />
        <div className="login__text">
          <h1>Sign in to MessengerApp</h1>
        </div>
        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  );
}

export default Login
