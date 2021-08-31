import React from 'react'
import { Avatar } from '@material-ui/core'
import "./Friends.css"

export default function Friends({img, name}) {
    return (
        <div className="friends">
                <Avatar src={img} className="profile-pic"/>
                <h4 className="profile-name">{name}</h4>
        </div>
    )
}
