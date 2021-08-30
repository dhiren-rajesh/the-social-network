import React from 'react'
import "./Feed.css"
import StoryReel from "./StoryReel"
import MessageSender from "./MessageSender"
import Post from "./Post"

export default function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
                profilePic="https://pbs.twimg.com/profile_images/1184114794103595010/021TqaVX.jpg"
                message="One Piece > Naruto > Tokyo Revengers"
                timestamp="1601493943737"
                imgName="imgName"
                username="Dhiren Rajesh"
            />
            {/* {
                postsData.map(entry => (
                    <Post
                    profilePic={entry.avatar}
                    message={entry.text}
                    timestamp={entry.timestamp}
                    imgName={entry.imgName}
                    username={entry.user}
                    />
                ))
            } */}
        </div>
    )
}
