import React from 'react';

const ConnectButton = ({ onClick }) => {
  const buttonStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#0a66c2',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    zIndex: 1000
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      Connect with All
    </button>
  );
};

export default ConnectButton;
