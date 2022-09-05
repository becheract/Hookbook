import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import Counter from "../components/Counter";
export default function UseMemo() {
  const [count, setCount] = useState(0);

  return (
    <Article title="useMemo 🧠">
      <p> A preformance optimization hook</p>
      <p> great for optimizating computed values</p>
      <p>Invokes the provided function and caches the result</p>
      <p>If you need to cache a value from a invoked function use useMemo</p>
      <Counter />
    </Article>
  );
}
