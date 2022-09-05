import React from "react";
import Article from "../components/Article";

export default function UseDebugValue() {
  return (
    <Article title="useDebugValue">
      <p>Makes working with custom hooks alot easier</p>
      <p>Only works inside of custom hooks</p>
      <p> You can pass objects, and values.</p>
      <p>You can set it to only run in the developer tools environment.</p>
    </Article>
  );
}
