import React from 'react';
import './Key.css';

function Key({ sign, keyStyle, handleClick }) {
  return (
    <button className={keyStyle}
            onClick={() => handleClick && handleClick(sign)}>
      {sign}
    </button>
  );
}

export default Key;