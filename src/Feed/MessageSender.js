import React, {useState} from 'react'
import "./MessageSender.css"
import { Avatar, Input } from '@material-ui/core';

export default function MessageSender() {
    const [input, setInput] = useState(' ');
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
        </div>
    )
}
