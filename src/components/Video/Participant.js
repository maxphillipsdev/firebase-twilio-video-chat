import React, { useState, useEffect, useRef } from "react";
import './Participant.css';

const Participant = ({participant}) => {
    const [videoTracks, setVideoTracks] = useState([]);
    const [audioTracks, setAudioTracks] = useState([]);

    const videoRef = useRef();
    const audioRef = useRef();

    // Filter out unused tracks (ie: screen share or multiple video tracks).
    const trackpubsToTracks = trackMap => Array.from(trackMap.values())
        .map(publication => publication.track)
        .filter(track => track !== null);

    // Pub/Sub hooks
    useEffect(() => {
        setVideoTracks(trackpubsToTracks(participant.videoTracks));
        setAudioTracks(trackpubsToTracks(participant.audioTracks));
        // Subscribe to video and audio tracks.
        const trackSubscribed = (track) => {
            if (track.kind === "video") {
                setVideoTracks(videoTracks => [...videoTracks, track]);
            } else if (track.kind === "audio") {
                setAudioTracks(audioTracks => [...audioTracks, track]);
            }
        };

        // Unsubscribe to removed tracks.
        const trackUnsubscribed = (track) => {
            if (track.kind === "video") {
                setVideoTracks(videoTracks.filter(v => v !== track));
            } else if (track.kind === "audio") {
                setAudioTracks(audioTracks.filter(a => a !== track));
            }
        };

        participant.on('trackSubscribed', trackSubscribed);
        participant.on('trackUnsubscribed', trackUnsubscribed);

        return () => {
            setVideoTracks([]);
            setAudioTracks([]);
            participant.removeAllListeners();
        };
    }, [participant]);

    // Attach video track to the DOM.
    useEffect(() => {
        const videoTrack = videoTracks[0];
        if (videoTrack) {
            videoTrack.attach(videoRef.current);
            return () => {
                videoTrack.detach();
            };
        }
    }, [videoTracks]);

    return (
        <div className="participant">
            <h4 className="participant-name">{participant.identity}</h4>
            <video ref={videoRef} autoPlay={true} />
            <audio ref={audioRef} autoPlay={true} />
        </div>
    );
};
export default Participant;
