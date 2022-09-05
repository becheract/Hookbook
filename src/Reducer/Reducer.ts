enum Action {
  Increment = "increment",
  Decrease = "decrement",
}

interface CountAction {
  type: Action;
  payload: number;
}

interface CountState {
  count: number;
}

export default function reducer(state: CountState, action: CountAction) {
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
