import React from "react";

function Counter({ counter, onIncrease, onDecrease }) {
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
}

export default Counter;
