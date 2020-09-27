import React, { Component, useState, useCallback } from 'react'
import Room from "./Room";
import Lobby from "./Lobby";
import { auth } from "../App/App";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import "./VideoManager.css";


function VideoManager(props) {


    // Store variables
    const [roomname, setRoomName] = useState('');
    const [token, setToken] = useState(null);

    // Instructions message.
    const instructions = (
        <div>

        </div>
    );


    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" children={<Lobby username={props.username} />}/>
                <Route exact path="/rooms/:roomName" children={
                    <Room token={token}/>
                }/>
            </Switch>
        </BrowserRouter>
    );
}

export default VideoManager;
