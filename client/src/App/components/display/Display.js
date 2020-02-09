import React from 'react'
import './Display.css';

function Display({ firstOperand, secondOperand, operator }) {
  return (
    <div className="Display">
      <h3 className="Display-secondary">
        {
          operator ? `${firstOperand} ${operator}` : '\u00a0'
        }
      </h3>
      <h1 className="Display-primary">
        {
          operator ? secondOperand : firstOperand
        }
      </h1>
    </div>
  );
}

export default Display;