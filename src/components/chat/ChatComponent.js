import React, { useEffect } from 'react';
import queryString from 'query-string';
import ChatScreen from './ChatScreen';
import io from 'socket.io-client';
import { Redirect } from 'react-router-dom';

const ChatComponent = ({ location }) => {

    if(location.search===''){
        console.log('hola');
        <Redirect to='/' />
    } 

    useEffect(()=>{
            
        const data = queryString.parse(location.search);

    },[location.search, location]);

    return (
       <ChatScreen 
            title = 'Welcome to the Chat'
       />
    )
}

export default ChatComponent
