import { Avatar, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import "./Chat.css";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import axios from "./axios";
import { useStateValue } from './StateProvider';

function Chat({messages}) {
    const [input,setInput] = useState("");
    const [{user},dispatch] = useStateValue()

    const sendMessage = async (e) =>{
        e.preventDefault();
        await axios.post("/messages/new",{
            message: input,
            name:user.displayName,
            timestamp: new Date().toUTCString(),
            received:true
        });
        setInput("")
    }
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at { messages[messages.length - 1].timestamp}</p>
                </div>
                <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined />
                </IconButton>
                <IconButton>
                    <AttachFileIcon />
                </IconButton>
                <IconButton>
                    <MoreVert />
                </IconButton>
                </div>
            </div>
            <div className="chat__body">
                {messages.map((message) => (
                <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`}>
                <span className="chat__name">{message.name}</span>
                {message.message}
                <span className='chat__timestamp'>{message.timestamp}</span>
                </p>
                ))}
                
                
            </div>
            <di className="chat__footer">
                <IconButton>
                <InsertEmoticonIcon />
                </IconButton>
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">Send a message</button>
                </form>
                <IconButton>
                <MicIcon />
                </IconButton>
            </di>
        </div>
    )
}

export default Chat
