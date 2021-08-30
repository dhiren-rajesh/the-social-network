import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react'
import "./Post.css"

export default function Post({profilePic, message, timestamp, imgName, username}) {
    return (
        <div className="post">
            <div className="post-top">
                <Avatar src={profilePic} className="post-avatar" />
                <div className="post-top-info">
                    <h3>{username}</h3>
                    <p>{new Date(parseInt(timestamp)).toUTCString()}</p>
                </div>
            </div>
            <div className="post-bottom">
                <p>{message}</p>
            </div>
            <div className="post-options">
                <div className="post-op">
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className="post-op">
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className="post-op">
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className="post-op">
                    <AccountCircleIcon />
                    <ExpandMoreIcon />
                </div>
            </div>
        </div>
    )
}
