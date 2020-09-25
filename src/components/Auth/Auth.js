import React from 'react'
import * as firebase from "firebase/app";
import 'firebase/auth';
import { auth } from "components/App/App";

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        // Add auth scopes here!
        auth.signInWithPopup(provider)

    }

    return (
        <button onClick={signInWithGoogle} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Sign in with Google</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export {
    SignIn,
    SignOut
}
