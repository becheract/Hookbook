import React, { useState, useEffect } from "react";
import Article from "../components/Article";
import { useFetch } from "../Hooks/useFetch";
export default function UseMemo() {
  const [count, setCount] = useState(0);
  const { state, loading, error } = useFetch("https://api.kanye.rest");

  return (
    <Article title="Custom Hook ☄️">
      {loading && <div>Loading...</div>}
      {state && <div>Quote : {state} </div>}
      <p>In react you can make custom hooks available to any component</p>
      <p>
        This allows you to reuse the same logic throughout your entire
        application
      </p>
      <p>
        In this example im using a custom hook called useFetch to return a quote
        from the Kanye Rest API
      </p>
    </Article>
  );
}
