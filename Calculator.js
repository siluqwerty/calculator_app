import React, { useState } from 'react';
import './Calculator.css'

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = value => {
    setInput(input + value);
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div>
      <div className='body'>
      <h1 className='head'>Calculator</h1>
      <input className='screen' type="text" value={input} readOnly />
      <div className='calbody'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'].map(value => (
          <button className='numkey' key={value} onClick={() => handleClick(value.toString())}>
            {value}
          </button>
        ))}
        <button className='clr' onClick={() => setInput('')}>Clear</button>
        <button className='eql' onClick={handleEqual}>=</button>
      </div>
      </div>
    </div>
  );
};

export default Calculator;
