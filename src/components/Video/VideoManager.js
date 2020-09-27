import React, { Component, useState, useCallback } from "react";
import Room from "./Room";
import Lobby from "./Lobby";
import { auth } from "../App/App";
import "./VideoManager.css";

function VideoManager(props) {
    // Store variables
    const [roomName, setRoomName] = useState("");
    const [token, setToken] = useState(null);
    const username = props.username

    const handleSubmit = useCallback(
        async (event) => {
            event.preventDefault();
            const data = await fetch(`/api/token`, {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    room: roomName,
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then((res) => res.json());
            setToken(data.token);
        },
        [username, roomName]
    );

    const handleRoomNameChange = useCallback(event => {
        setRoomName(event.target.value);
    }, []);

    const handleLogout = useCallback((event) => {
        setToken(null);
    }, []);

    // Render the component.
    let render;
    if (token) {
        render = (
        <Room
            token={token}
            roomName={roomName}
            handleLogout={handleLogout}
        />
        );
    } else {
        render = (
            <Lobby
                username={username}
                roomName={roomName}
                handleSubmit={handleSubmit}
                handleRoomNameChange={handleRoomNameChange}
            />
        );
    }
    return render;
}

export default VideoManager;
