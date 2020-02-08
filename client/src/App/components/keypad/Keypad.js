import React from 'react';
import Key from './key/Key';

function Keypad() {
  return (
    <React.Fragment>
      <Key sign={'C'} keyStyle={'Key Key-secondary'} />
      <Key sign={'MR'} keyStyle={'Key Key-secondary'} />
      <Key sign={'MS'} keyStyle={'Key Key-secondary'} />
      <Key sign={'÷'} keyStyle={'Key Key-secondary'} />
      <Key sign={'7'} keyStyle={'Key Key-primary'} />
      <Key sign={'8'} keyStyle={'Key Key-primary'} />
      <Key sign={'9'} keyStyle={'Key Key-primary'} />
      <Key sign={'×'} keyStyle={'Key Key-secondary'} />
      <Key sign={'4'} keyStyle={'Key Key-primary'} />
      <Key sign={'5'} keyStyle={'Key Key-primary'} />
      <Key sign={'6'} keyStyle={'Key Key-primary'} />
      <Key sign={'-'} keyStyle={'Key Key-secondary'} />
      <Key sign={'1'} keyStyle={'Key Key-primary'} />
      <Key sign={'2'} keyStyle={'Key Key-primary'} />
      <Key sign={'3'} keyStyle={'Key Key-primary'} />
      <Key sign={'+'} keyStyle={'Key Key-secondary'} />
      <Key sign={'0'} keyStyle={'Key Key-lg Key-primary'} />
      <Key sign={'.'} keyStyle={'Key Key-primary'} />
      <Key sign={'='} keyStyle={'Key Key-danger'} />
    </React.Fragment>
  );
}

export default Keypad;