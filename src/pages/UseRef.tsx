import React, { useEffect, useLayoutEffect, useState, useRef } from "react";
import Article from "../components/Article";
export default function UseRef() {
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null!);
  //returns an object
  //with a .current proprety
  const renderCount = useRef(0);
  // {current: 0}
  useEffect(() => {
    if (renderCount == null) return;
    renderCount.current = renderCount.current + 1;
  });

  //a ref is similar to state except
  // a ref does not cause a component to re update
  //store a prev value and it presist between renders
  //but doesnt cause re-render
  //usuall useRef is used to reference html elements

  //two scenarios of refs
  //a read only dom reference
  //for dom ref specify the dom element type

  //or a mutable value which can behave like a instance var
  //for mutable references specify the appropiate type

  return (
    <Article title="useRef 📖">
      <p>
        a ref is similar to state except a ref does not cause a component to re
        render. store a prev value and it presist between renders but doesnt
        cause re-render.
      </p>

      <p>Two scenarios for the useRef hook 1. a read only dom </p>
      <p>
        reference or 2. a mutable value which can behave like a instance var
      </p>

      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>My name is {name}</div>
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>
      <div> I rendered {renderCount.current} times</div>
    </Article>
  );
}
