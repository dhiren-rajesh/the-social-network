import React, {useState} from 'react'
import "./MessageSender.css"
import { Avatar, Input } from '@material-ui/core';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';

export default function MessageSender() {
    const [input, setInput] = useState(null);
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImage(e.target.files[0]);
        }
    }

    const handleSubmit = (e) => {
        console.log("Submitting");
    }

    return (
        <div className="message-sender">
            <div className="message-sender-top">
                <Avatar src="https://pbs.twimg.com/profile_images/1184114794103595010/021TqaVX.jpg"/>
                <form>
                    <input
                    type="text"
                    className="message-sender-input"
                    placeholder="What's on your mind?"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />
                    <Input
                    type="file"
                    className="message-sender-file-selector"
                    onChange={handleChange}
                    />
                    <button onClick={handleSubmit} type="submit">Hidden Submit</button>
                </form>
            </div>
            <div className="message-sender-bottom">
                <div className="message-sender-option">
                    <VideocamIcon style={{color: "red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="message-sender-option">
                    <PhotoLibraryIcon style={{color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="message-sender-option">
                    <InsertEmoticonIcon style={{color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
