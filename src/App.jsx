/* eslint-disable react/jsx-key */
import Button from "./components/Button/Button"
import { buttons } from "./buttons"
import { useState } from "react"
import './App.scss'

const App = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState(null);
  const [result, setResult] = useState(null);

  const buttonPress = (label) => {
    if (!isNaN(label)) {
      setCurrentValue((prev) => prev + label);
    } else if(label==="."){
      if(!currentValue.includes(".")){
        setCurrentValue((prev) => (prev === ''? '0.': prev + '.'))
      }
    }
    
    else if (["+", "-", "*", "/"].includes(label)) {
      setPreviousValue(currentValue);
      setCurrentValue(" ");
      setOperator(label);
    }    
    else if (label === "%") {
      let calculation;

      if (operator && previousValue) {
        // Calculate percentage of previousValue based on currentValue
        calculation = eval(`${previousValue} * ${currentValue} / 100`);
      } else {
        // Calculate percentage of currentValue
        calculation = eval(`${currentValue} / 100`);
      }

      setResult(calculation);
      setCurrentValue(String(calculation));
      setPreviousValue("");
      setOperator(null);
      console.log(calculation);
    }
    else if (label === "=") {
      if (previousValue && operator && currentValue) {
        const calculation = eval(`${previousValue} ${operator} ${currentValue}`)
        setResult(calculation);
        setCurrentValue(String(calculation))
        setPreviousValue("");
        setOperator(null);
        console.log(calculation)
      }
    } else if (label === "C") {
      setCurrentValue('');
      setPreviousValue('');
      setOperator(null);
      setResult(null);
    }



  };

  return (
    <>
      <div className='container'>
        <h1>Calculator</h1>
        <div id="calculator">
          <div id="display" style={{ textAlign: 'right' }}>
            <div id="answer">{result !== null ? result : currentValue || "0"}</div>
            <div id="expression">
              {previousValue} {operator} {currentValue}
            </div>
          </div>
          {buttons.map((button) => <Button Class={button.Class} ID={button.ID} Label={button.Label} onClick={() => { buttonPress(button.Label) }} key={button.ID} />)}
        </div>
      </div>
    </>
  )
}

export default App
