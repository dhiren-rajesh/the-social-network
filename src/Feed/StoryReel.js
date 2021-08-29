import React from 'react'
import "./StoryReel.css"
import Story from "./Story"

export default function StoryReel() {
    return (
        <div className="story-reel">
            <Story
            image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7b3c9228-b2b9-409b-9ba3-966385b57bd6/dcvdrs4-70ac7e39-ce87-4532-bfe5-14e647bf381f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdiM2M5MjI4LWIyYjktNDA5Yi05YmEzLTk2NjM4NWI1N2JkNlwvZGN2ZHJzNC03MGFjN2UzOS1jZTg3LTQ1MzItYmZlNS0xNGU2NDdiZjM4MWYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.wQErLXoObphgYNu1fpGHfsosMS--Ryf3Mok0O6rTkU0"
            profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQFwal2GHZ_BbA/profile-displayphoto-shrink_200_200/0/1619530846656?e=1634774400&v=beta&t=CRXm0uFv-O8-ewLtIqoPiG-wa0bo6nWW7ubxmLTjRmo"
            title="Nikhil Saju"
            />
            <Story
            image="https://wallpaperaccess.com/full/2365607.jpg"
            profileSrc="https://media-exp1.licdn.com/dms/image/C5603AQGizbB8M3VV1A/profile-displayphoto-shrink_400_400/0/1619963111773?e=1635984000&v=beta&t=QmxYASRr-HPmBxAhflonLkirgj7nDN8YGyM1N-7O3U8"
            title="Kartik Nair"
            />
            <Story
            image="https://www.enjpg.com/img/2020/tokyo-revengers-15.jpg"
            profileSrc="https://pbs.twimg.com/profile_images/1184114794103595010/021TqaVX.jpg"
            title="Dhiren Rajesh"
            />
        </div>
    )
}
