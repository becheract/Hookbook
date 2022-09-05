import React, { useReducer, useContext } from "react";
import { Action, CountState, CountAction } from "../Interfaces/Interface";
import Article from "../components/Article";

function reducer(state: CountState, action: CountAction) {
  const { type, payload } = action;
  switch (type) {
    case "increment":
      return { count: state.count + payload };
    case "decrement":
      return { count: state.count - payload };
    default:
      return state;
  }
}

export default function UseReducer() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Article title={"useReducer 💾"}>
      count : {state.count}
      <p>
        An alternative to useState. Accepts a reducer of type (state, action)
        =&gt; newState, and returns the current state paired with a dispatch
        method.
      </p>
      <br />
      <button onClick={() => dispatch({ type: Action.Decrement, payload: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: Action.Increment, payload: 1 })}>
        +
      </button>
    </Article>
  );
}
