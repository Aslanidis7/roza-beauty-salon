import React from 'react';
import './Button.css';

function Button({ text, onClick }) {
  return <button className="luxury-button" onClick={onClick}>{text}</button>;
}

export default Button;
