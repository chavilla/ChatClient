import React from 'react';
import PropTypes from 'prop-types';

const ChatScreen = ({ title, name, room }) => {

    return (
        <div>
            <h1>{title}</h1>
        </div>
    )
}

ChatScreen.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    /* setName: PropTypes.func.isRequired,
    setRoom: PropTypes.func.isRequired, */
  };

export default ChatScreen;
