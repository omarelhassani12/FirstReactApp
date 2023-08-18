import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        // eslint-disable-next-line
        const calculatedResult = new Function('return ' + input)();
        setResult(calculatedResult.toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const renderButtons = () => {
    const buttonLayout = [
      ['7', '8', '9', '/'],
      ['4', '5', '6', '*'],
      ['1', '2', '3', '-'],
      ['C', '0', '=', '+'],
    ];
    return buttonLayout.map((row) => (
      <div key={row.join('')} className="button-row">
        {row.map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
        <div className="calculator">
          <div className="display">
            {result ? result : input}
          </div>
          <div className="buttons">{renderButtons()}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
