import React from "react";
import Chat from "./Chat"
import '../css/Chat.css';

function Chats(){
    return(
        <div className="chats">
            <Chat
                name="Mark"
                message = "hello"
                timestamp = "40 seconds ago"
                profilePic="..."
            />

            <Chat
                name="James"
                message = "hello"
                timestamp = "40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Eric"
                message = "hhahahahahah nice meet you"
                timestamp = "40 seconds ago"
                profilePic="..."
            />
            <Chat
                name="Team"
                message = "hahahahah kkkk"
                timestamp = "40 seconds ago"
                profilePic="..."
            />
        </div>
    )
}

export default Chats