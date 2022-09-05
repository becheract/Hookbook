import React, { useEffect, useDeferredValue, useState, useMemo } from "react";
import Article from "../components/Article";

const List = ({ input }: any) => {
  //take in this input and aslong theres a decent amount of time that passed then update the input
  const deferredInput = useDeferredValue(input);
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{deferredInput}</div>);
    }
    return l;
  }, [deferredInput]);
  useEffect(() => {
    console.log(`Input : ${input} \n Deffered value: ${deferredInput}`);
  }, [input, deferredInput]);
  return <>{list}</>;
};

export default function UseDefferedValue() {
  const [input, setInput] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
  };
  return (
    <Article title={"useDeferredValue"}>
      <p>Similar to debouncing or throttling</p>
      <p>
        Debouncing: its going to wait until you spend x amount of time not
        typing and then it will make calls
      </p>

      <p>With useDefferedValue you don't specify a amount of time.</p>
      <p>
        It will wait until your app is done processing everything and then it
        will run{" "}
      </p>

      <p>Allows us to assign priority</p>
      <input type="text" value={input} onChange={(e): any => handleChange(e)} />
      <List input={input} />
    </Article>
  );
}
