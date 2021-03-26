import { Button } from '@material-ui/core';
import React from 'react';
import "./login.css";
import {auth,provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
    const [state,dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <div className="login__logo">
         <img src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"></img>   
        </div>
        <Button className="button" type="submit" onClick = {signIn}>
            Sign In
        </Button>
        </div>
    )
}

export default Login
