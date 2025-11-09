import { use } from "react"
import Friend from "./Friend"
import './App.css'

export default function Friends ({friendsPromise}){

    const friends = use(friendsPromise)
    
    return(
        <div className="friendBox">
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}