import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from "pusher-js";
import axios from "./axios";
import Login from './Login';
import { useStateValue } from './StateProvider';

function App() {
const [messages,setMessages] = useState([]);
const [{user},dispatch] = useStateValue()
useEffect(() =>{
  axios.get('/messages/sync').then((response) => {
    setMessages(response.data);
  })
},[]);
useEffect(() =>{
  const pusher = new Pusher('a7564ddc22686bd1d8a7', {
    cluster: 'ap2'
  });

  const channel = pusher.subscribe('messages');
  channel.bind('inserted', (newMessage)  =>{
    setMessages([...messages,newMessage]);
  });

  return () => {
    channel.unbind_all();
    channel.unsubscribe();
  };
}, [messages]);

  return (
    <div className="app">
      {
        !user ? <Login /> : (
          <div className="app__body">
      <Sidebar messages={messages}/>
      <Chat messages={messages} />

      </div>
        )
      }
      
    </div>
  );
}

export default App;
