import React, { useState, useMemo } from "react";
import Button from "./Button";
export default function Counter() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const increment = (
    state: number,
    setState: React.Dispatch<React.SetStateAction<number>>
  ) => {
    setState(state + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counter1 % 2 == 0;
  }, [counter1]);

  return (
    <>
      <div>
        <h3>Heavy preformance function</h3>
        <button onClick={() => increment(counter1, setCounter1)}>
          increment
        </button>
        counter 1 ➡ {counter1}
        <span> {isEven ? "Even" : "Odd"}</span>
      </div>

      <div>
        <p>
          React is using the cached value of isEven function to display wether
          count 1 is odd or even. React will just use the cached value from the
          previous render
        </p>
        <button onClick={() => increment(counter2, setCounter2)}>
          increment
        </button>
        counter 2 ➡ {counter2}
      </div>
    </>
  );
}
