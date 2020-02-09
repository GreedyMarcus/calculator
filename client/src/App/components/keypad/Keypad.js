import React from 'react';
import Key from './key/Key';

function Keypad({ handleNumberClick, handleOperationClick, handleDotClick, handleClearClick }) {
  return (
    <React.Fragment>
      <Key sign={'C'} keyStyle={'Key Key-secondary'} handleClick={handleClearClick} />
      <Key sign={'MR'} keyStyle={'Key Key-secondary'} />
      <Key sign={'MS'} keyStyle={'Key Key-secondary'} />
      <Key sign={'÷'} keyStyle={'Key Key-secondary'} handleClick={handleOperationClick} />

      <Key sign={'7'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'8'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'9'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'×'} keyStyle={'Key Key-secondary'} handleClick={handleOperationClick} />

      <Key sign={'4'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'5'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'6'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'-'} keyStyle={'Key Key-secondary'} handleClick={handleOperationClick} />

      <Key sign={'1'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'2'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'3'} keyStyle={'Key Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'+'} keyStyle={'Key Key-secondary'} handleClick={handleOperationClick} />

      <Key sign={'0'} keyStyle={'Key Key-lg Key-primary'} handleClick={handleNumberClick} />
      <Key sign={'.'} keyStyle={'Key Key-primary'} handleClick={handleDotClick} />
      <Key sign={'='} keyStyle={'Key Key-danger'} handleClick={handleOperationClick} />
    </React.Fragment>
  );
}

export default Keypad;