import React from 'react';
import './App.css';

import * as firebase from "firebase/app";
import "firebase/firestore";

import VideoManager from "../Video/VideoManager";
import GoogleLogin from "../Auth/GoogleLogin";

import { useAuthState } from "react-firebase-hooks/auth";

// Init for Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCKNC_FtTz36u_TmZS3-hHHIszGY4jKb-g",
    authDomain: "fir-twilio-video-chat.firebaseapp.com",
    databaseURL: "https://fir-twilio-video-chat.firebaseio.com",
    projectId: "fir-twilio-video-chat",
    storageBucket: "fir-twilio-video-chat.appspot.com",
    messagingSenderId: "324161650061",
    appId: "1:324161650061:web:88ba350ab19df8e48ad1c4",
    measurementId: "G-P15QP0F6MB"
});

// Create Firebase app and export it.
const app = firebase.app();
export const auth = app.auth();


function App() {

    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header>
                <h1>Reactbase Video Chat <span role="img" aria-label="Fire">🔥</span></h1>
            </header>
            <main>
                {user ? <VideoManager username={user.displayName}/> : <GoogleLogin />}
            </main>
            <footer>

            </footer>
        </div>
        );
    }

    export default App;
