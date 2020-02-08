import React from 'react';
import './Key.css';

function Key({ sign, keyStyle }) { 
  return (
    <button className={keyStyle}>
      {sign}
    </button>
  );
}

export default Key;