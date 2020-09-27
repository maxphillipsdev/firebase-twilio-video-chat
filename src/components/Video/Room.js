import React, { useState, useCallback } from 'react'
import { useParams } from 'react-router-dom';
const { connect } = require('twilio-video');

export default function Room(props) {

    // Connect to the room and register events.
    const roomName = useParams();

    if (!props.token) {
        return (
            <h3> Sorry you do not have access to this room <span role="img" aria-label="Sad">😞</span> </h3>
        );
    } else {
        connect(props.token, { name: roomName }).then(room => {
            console.log(`Successfully joined the room ${room}`);
            // Register participant joined event.
            room.on('participantConnected', participant => {
                console.log(`A participant just joined: ${participant}`);
            });
        }, error => {
            console.error(`Unable to connect to Room: ${error.message}`);
        });
    }
    return (
        <div>
            <h3>You are in room {roomName}</h3>
        </div>
    )
}
