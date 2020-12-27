import React, { useEffect, useState } from "react";
import queryString from "query-string";
import ChatScreen from "./ChatScreen";
import io from "socket.io-client";

const ChatComponent = ({ location }) => {
  
  let socket;
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

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

  return <ChatScreen title="Welcome to the Chat" name={name} room={room} />;
};

export default ChatComponent;
