import React from "react";
import PropTypes from 'prop-types'


const JoinScreen = ({ title }) => {
  return(
        <h1>
            {title}
        </h1>
  ) 

};

JoinScreen.propTypes = {
    title : PropTypes.string.isRequired
}

export default JoinScreen;
