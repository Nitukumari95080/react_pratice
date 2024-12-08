import React, { useState } from "react";

const UseState = () => {
  const [color, setColor] = useState("blue");
  const [count, setCount] = useState(0);

  return (
    <div className="Hooks">
      <div>
        <h1>Practice UseState</h1>
        <h2>My favourite color is {color}</h2>
        <button onClick={() => setColor("black")}>Change to Black</button>
      </div>
      <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
    </div>
  );
};

export default UseState;
