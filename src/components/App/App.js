import React from 'react';
import 'components/App/App.css';

import * as firebase from "firebase/app";
import 'firebase/firestore';

import RoomVideo from "components/Room/RoomVideo";
import { SignIn, SignOut } from "components/Auth/Auth";

import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyCKNC_FtTz36u_TmZS3-hHHIszGY4jKb-g",
    authDomain: "fir-twilio-video-chat.firebaseapp.com",
    databaseURL: "https://fir-twilio-video-chat.firebaseio.com",
    projectId: "fir-twilio-video-chat",
    storageBucket: "fir-twilio-video-chat.appspot.com",
    messagingSenderId: "324161650061",
    appId: "1:324161650061:web:88ba350ab19df8e48ad1c4",
    measurementId: "G-P15QP0F6MB"
})

const auth = firebase.auth();

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header>

      </header>

      <section>
        {console.log(user)}
        {user ? <SignOut/> : <SignIn/>}
      </section>
    </div>
  );
}



export default App;
export {
  auth
}
