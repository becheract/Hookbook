import React, { useEffect, useState, ChangeEvent } from "react";
import Title from "../components/Title";
import Article from "../components/Article";

export default function UseEffect() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState("Default");
  //runs after every render
  useEffect(() => {
    setTimeout(() => {
      let newCount = count;
      setCount((newCount += 1));
    }, 1000);
  });

  //runs only once first after the first render
  useEffect(() => {
    console.log("runs only on the first render");
  }, []);

  //runs only once after the first render and any
  //time a dependency value changes
  useEffect(() => {
    console.log("changing username");
  }, [username]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  return (
    <Article title="useEffect ⚡">
      <h2>Example of useEffect when first rendered</h2>
      {count}
      <p>
        The useEffect hook can be used to preform side effects in functional
        components.
      </p>
      <h2>Example of useEffect with variable dependency</h2>
      <h3> Username : {username} </h3>
      <input
        value={username}
        onChange={onChange}
        title="username"
        placeholder="Username"
      ></input>
    </Article>
  );
}
