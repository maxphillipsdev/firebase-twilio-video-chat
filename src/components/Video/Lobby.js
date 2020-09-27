import React from 'react'

export default function Lobby({
    username,
    roomName,
    handleSubmit,
    handleRoomNameChange
}) {
    return (
        <form onSubmit={handleSubmit}>
            <h3>Welcome {username}!</h3>
            <p>Enter the name of the room you want to join.</p>
            <label htmlFor="room">Room name:</label>
            <input
                type="text"
                id="room"
                value={roomName}
                onChange={handleRoomNameChange}
                required
            />
            <button type="submit">Submit</button>
        </form>
    )
}
