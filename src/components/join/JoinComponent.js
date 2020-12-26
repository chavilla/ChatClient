import React, { useState } from "react";
import JoinScreen from "./JoinScreen";

const JoinComponent = () => {


  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
      <JoinScreen 
        title = 'Join'
        name = { name }
        room = { room }
        setName = { setName }
        setRoom = { setRoom }
      />
  )
};

export default JoinComponent;
