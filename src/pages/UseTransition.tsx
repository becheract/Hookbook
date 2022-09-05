import React, { useTransition, useState, useEffect } from "react";
import Article from "../components/Article";

export default function UseTransition() {
  const [isPending, startTransition]: any = useTransition();
  const [input, setInput] = useState("");
  const [list, setList] = useState<any[]>([]);

  const LIST_SIZE = 20000;

  const handleChange = (e: any) => {
    //this is high priority
    setInput(e.target.value);
    startTransition(() => {
      //this is low priority
      const l = [];
      for (let i = 0; i < LIST_SIZE; i++) {
        l.push(e.target.value);
      }
      setList(l);
    });
  };

  return (
    <>
      <Article title={"useTransition"}>
        <p>
          {" "}
          when you make a state change it will combine all the state changes
          into one call and make them all at once.
        </p>

        <p>
          {" "}
          useTransition allows you to make 2 different state changes and ranked
          them by priority.{" "}
        </p>

        <p>By default all state is high priority</p>

        <p>You can use isPending to display different loading states</p>

        <p>Use Case</p>
        <p>
          Only use useTransition when you really need to as it causes an app to
          render more
        </p>
      </Article>
      <input type="text" value={input} onChange={(e) => handleChange(e)} />
      <br />
      {isPending
        ? "Loading..."
        : list.map((item, index) => {
            return <div>{item}</div>;
          })}
    </>
  );
}
