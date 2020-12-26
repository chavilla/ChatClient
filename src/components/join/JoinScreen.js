import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import './Join.css';

const JoinScreen = ({ title, name, room, setName, setRoom }) => {
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">{title}</h1>
        <div className="">
          <input
            type="text"
            name="name"
            value={name}
            className="joinInput"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="">
          <input
            type="text"
            name="room"
            value={room}
            className="joinInput mt-20"
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Room"
          />
        </div>
        <Link to={`/chat?name=${name}&room=${room}`}
              onClick = { e => (!name || !room) ? e.preventDefault() : null }
        >
          <button className="button mt-20" type="submit">
            SigIn
          </button>
        </Link>
      </div>
    </div>
  );
};

JoinScreen.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  room: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  setRoom: PropTypes.func.isRequired,
};

export default JoinScreen;
