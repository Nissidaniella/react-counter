import React, { useState } from 'react';

const FunctionCounter = () => {
 const [count, setCount] = useState(0);

 const handleIncrease = () => {
    setCount(count + 1);
 };

 const handleDecrease = () => {
    setCount(count - 1);
 };

 return (
    <div>
      <h2>Function Counter</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
 );
};

export default FunctionCounter;