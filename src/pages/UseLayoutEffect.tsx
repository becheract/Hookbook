import React, { useEffect, useRef, useState, useLayoutEffect } from "react";
import Article from "../components/Article";
export default function UseLayoutEffect() {
  const [show, setShow] = useState(false);
  const popup = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  //   useEffect(() => {
  //     console.log(count);
  //   }, [count]);

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25}px`;
  }, [show]);

  //when using useEffect the pop up will first appear and then move 25px to the bottom
  //   useEffect(() => {
  //     if (popup.current == null || button.current == null) return;
  //     const { bottom } = button.current.getBoundingClientRect();
  //     popup.current.style.top = `${bottom + 25}px`;
  //   }, [show]);
  return (
    <Article title="useLayoutEffect 🏗️">
      <p>use layout is similar to useEffect </p>
      <p>useEffect is async </p>
      <p>useLayoutEffect is synchronous</p>
      <p>
        runs sync in between when react calculates the dom and when it paints it
        out to the screen
      </p>
      <p>
        perfect for when you need to change layout of the dom, hence the name.{" "}
      </p>
      <p>not preformant</p>
      <p>
        use the useLayoutEffect hook whenever you’re doing any work with the DOM
        reference object.
      </p>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click Here
      </button>

      {show && (
        <div ref={popup} style={{ position: "absolute" }}>
          This is a popup
        </div>
      )}
    </Article>
  );
}
