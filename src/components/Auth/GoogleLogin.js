import React from 'react'
import * as firebase from "firebase/app";
import "firebase/auth";
import { auth } from "../App/App";

export default function GoogleLogin() {

    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div>
            <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    )
}
