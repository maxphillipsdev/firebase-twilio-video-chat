import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Spinner, { displayName } from "react-spinkit";

export default function Lobby(props) {
    async function findRoom(roomName) {
        const data = await fetch(`/api/rooms/${roomName}`, {
            method: 'GET'
        }).then(res => res.json()).catch(e => {
            // Catch errors such as 404.
            return false;
        });
        return data.roomExists;
    }
    const [response, setResponse] = useState();
    return (
        <div>
            <h3>Welcome {props.username}!</h3>
            <p>Enter the name of the call you want to create or join below.</p>
            <div>
                <input type="text" onChange={async event => {
                    setResponse(
                        <Spinner name="ball-clip-rotate-multiple" />
                    );
                    // const roomExists = await findRoom(event.target.value)
                    const path = `/rooms/${event.target.value}`;
                    setResponse(<Link exact path={path}>Join room</Link>);
                }}/>
                <div>
                    {response}
                </div>
            </div>
        </div>
    )
}
