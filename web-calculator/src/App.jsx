import React, { useState } from 'react'
import Button from '@mui/material/Button'
import Heading from './Heading'
import Numbers from './Numbers'
import Display from './Display'
import History from './History'
import './App.css'

let wasLastClickEquals = false;
let lastEquation = "";

function App() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [display, setDisplay] = useState("0");

  const handleNumber = (num) => {
    if (wasLastClickEquals) {
      // if last click was equals
      wasLastClickEquals = false; // now the last click is a number, not equals
      clearDisplay();
      handleNumber(num);
    } else {
      if (display == 0) {
        setDisplay((prevDisplay) => {
          return num.toString();
        })
      } else {
        setDisplay((prevDisplay) => {
          return prevDisplay + num.toString();
        })
      }
    }
  }


  const handleOperator = (oper) => {
    if (['+', '-', '*', '/'].includes(display[display.length - 1])) {
      return;
    } else {
      setDisplay((prevDisplay) => {
        return prevDisplay + oper;
      })
    }
  }

  const clearDisplay = () => {
    setDisplay("0");
  };

  const handleBackspace = () => {
    if (display.length == 1) {
      setDisplay((prevDisplay) => {
        return "0";
      });
    } else {
      setDisplay((prevDisplay) => {
        return prevDisplay.slice(0, -1);
      })
    }
  };

  const calculateResult = () => {
    wasLastClickEquals = true;
    try {
      const expression = display.replace(/x/g, '*');
      const result = new Function('return ' + expression)();

      // division by zero
      if (!isFinite(result)) {
        setDisplay("Error");
        return;
      }

      // on editing lastEquation, the change is also sent to the History component
      // from there, it adds the new equation to its list
      lastEquation = display.toString() + " = " + Number(result.toFixed(8)).toString();

      setDisplay(Number(result.toFixed(8)).toString());
    } catch (error) {
      setDisplay("Error");
    }
  };


  return (
    <>
      <div className="main">
        <div className="calc">
          <Heading></Heading>
          <Display value={display}></Display>
          <Numbers handleNumber={handleNumber}
            handleOper={handleOperator}
            clearDisplay={clearDisplay}
            handleBackspace={handleBackspace}
            calculateResult={calculateResult}>
          </Numbers>
        </div>
        <div className="history">
          <History lastEquation={lastEquation}></History>
        </div>
      </div>
    </>
  )
}
export default App
