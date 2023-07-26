import React from 'react';

const Alert = ({ message, onClose }) => {
  return (
    <div className="custom-alert-container">
      <div className="custom-alert">
        <p>{message}</p>
        <button onClick={onClose}>OK</button>
      </div>
    </div>
  );
};

export default Alert;
