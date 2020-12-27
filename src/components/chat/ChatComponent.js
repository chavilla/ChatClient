import React, { useEffect, useState } from "react";
import queryString from "query-string";
import ChatScreen from "./ChatScreen";
import io from "socket.io-client";

const ChatComponent = ({ location }) => {
  
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  let socket;
  // Route to connect the chat
  const ENDPOINT = "http://localhost:4000";

  // options to connect
  const connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };

  // Make the connection
  socket = io(ENDPOINT, connectionOptions);

  // When the user is joined
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    //connect to chat
    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, ({ error }) => {
    });

    return () => {
      //socket.emit("disconnect");
      //socket.off();
    };
  }, [location.search, socket]);

  // To send a message
  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    })
  });

  return <ChatScreen title="Welcome to the Chat" name={name} room={room} />;
};

export default ChatComponent;
