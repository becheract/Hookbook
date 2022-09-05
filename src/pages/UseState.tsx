import { useState } from "react";
import Button from "../components/Button";
import Article from "../components/Article";
export default function useStatePage() {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    let newCount = count;
    setCount((newCount += 1));
  };

  const decrement = () => {
    let newCount = count;
    setCount((newCount -= 1));
  };

  return (
    <Article title="useState 💾">
      <p>
        A react hook that allows you to assign, and update the state of a
        component
      </p>

      <p>first import useState from 'react'</p>

      <p>
        to give a component state just create a new instance of const const
        [state,setState] = useState(0) the first index of the array is the data
        for the component and the second index allows you to update the state if
        we shift to the right side of the equal sign you can assign a initial
        value, in this case it's initial value is 0 value for the state.
      </p>
      {count}
      <div>
        <button title="increment" onClick={increment}>
          Increment
        </button>

        <button title="decrement" onClick={decrement}>
          Decrement
        </button>
      </div>
    </Article>
  );
}
