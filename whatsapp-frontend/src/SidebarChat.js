import { Avatar } from '@material-ui/core';
import React from 'react';
import "./SidebarChat.css"

function SidebarChat({messages}) {
    return (
        <div className="sidebarChat">
            <Avatar />
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>{ messages[messages.length - 1].message}</p>
            </div>
        </div>
    )
}

export default SidebarChat