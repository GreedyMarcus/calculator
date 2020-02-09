import React, { Component } from 'react';
import Display from './components/display/Display';
import Keypad from './components/keypad/Keypad';
import './App.css';

class App extends Component {
  state = {
    firstOperand: '0',
    secondOperand: null,
    operator: null,
    isComputed: true
  }

  clear = () => {
    this.setState({
      firstOperand: '0',
      secondOperand: null,
      operator: null,
      isComputed: true
    });
  }

  selectNumber = (number) => {
    const { firstOperand, secondOperand, operator, isComputed } = this.state;

    // Check if the number should be part of the first operand
    if (!secondOperand && !operator) {
      // Check if operand is the calculation result
      if (isComputed) {
        this.setState({
          firstOperand: number,
          isComputed: false
        });
      } else {
        // Check if maximum character length reached
        if (firstOperand.length < 15) {
          // Handle operand starting with 0
          if (firstOperand === '0' && number !== '0') {
            this.setState({
              firstOperand: number
            });
          } else if (firstOperand !== '0') {
            this.setState(state => ({
              firstOperand: state.firstOperand + number
            }));
          }
        }
      }
    } else {
      if (!secondOperand) {
        this.setState({
          secondOperand: number
        });
      } else {
        // Check if maximum character length reached
        if (secondOperand.length < 15) {
          // Handle operand starting with 0
          if (secondOperand === '0' && number !== '0') {
            this.setState({
              secondOperand: number
            });
          } else if (secondOperand !== '0') {
            this.setState(state => ({
              secondOperand: state.secondOperand + number
            }));
          }
        }
      }
    }
  }

  selectOperation = (operation) => {
    const { secondOperand } = this.state;
    
    if (!secondOperand) {
      this.setState(state => ({
        firstOperand: state.firstOperand === 'Error' ? '0' : state.firstOperand,
        operator: operation === '=' ? null : operation,
        isComputed: operation === '=' ? true : false
      }));
    } else {
      let result = this.compute();

      // Handle result of division by 0
      if (isNaN(result) || result === Infinity) {
        this.setState({
          firstOperand: 'Error',
          secondOperand: null,
          operator: null,
          isComputed: true
        });
      } else {
        const resultString = result.toString();
        const dotIndex = resultString.indexOf('.');
  
        // Handle decimal numbers
        if (dotIndex !== -1) {
          // Rounding at maximum length
          if (dotIndex === 15) {
            const valueBeforeDot = resultString.substring(0, 15);
            result = valueBeforeDot;
          } else {
            result = resultString.length > 15 ? result.toFixed((15 - 1) - dotIndex) : resultString;
          }
        } else {
          result = resultString;
        }
  
        this.setState({
          firstOperand: result,
          secondOperand: null,
          operator: operation === '=' ? null : operation,
          isComputed: operation === '=' ? true : false
        });
      }
    }
  }

  selectDot = () => {
    const { firstOperand, secondOperand, operator, isComputed } = this.state;

    // Check if the dot should be part of the first operand
    if (!secondOperand && !operator) {
      // Check if operand is the calculation result
      if (isComputed) {
        this.setState({
          firstOperand: '0.',
          isComputed: false
        });
      } else {
        // Check if maximum character length reached
        if (firstOperand.length < 15 && !firstOperand.includes('.')) {
          this.setState(state => ({
            firstOperand: state.firstOperand + '.'
          }));
        }
      }
    } else {
      if (!secondOperand) {
        this.setState({
          secondOperand: '0.'
        });
      } else {
        // Check if maximum character length reached
        if (secondOperand.length < 15 && !secondOperand.includes('.')) {
          this.setState(state => ({
            secondOperand: state.secondOperand + '.'
          }));
        }
      }
    }
  }

  compute = () => {
    const { firstOperand, secondOperand, operator } = this.state;

    switch (operator) {
      case '+':
        return parseFloat(firstOperand) + parseFloat(secondOperand);
      case '-':
        return parseFloat(firstOperand) - parseFloat(secondOperand);
      case '×':
        return parseFloat(firstOperand) * parseFloat(secondOperand);
      case '÷':
        return parseFloat(firstOperand) / parseFloat(secondOperand);
      default:
        return 0;
    }
  }
  
  render() {
    const { firstOperand, secondOperand, operator } = this.state;
    
    return (
      <div className="App">
        <div className="App-container">
          <Display firstOperand={firstOperand}
                   secondOperand={secondOperand}
                   operator={operator} />
          <Keypad handleNumberClick={this.selectNumber}
                  handleOperationClick={this.selectOperation}
                  handleDotClick={this.selectDot}
                  handleClearClick={this.clear} />
        </div>
      </div>
    );
  }
}

export default App;