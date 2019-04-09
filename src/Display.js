import React from 'react';

const Display = ({hits,balls,strikes}) => {
  return (
    <p>{hits} {balls} {strikes}</p>
  );
}

export default Display;