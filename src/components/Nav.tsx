import React from "react";
import { Link } from "react-router-dom";
import "styled-components";

export default function Nav() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "1em",
      }}
    >
      <ul
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "80vw",
          height: "auto",
          flexWrap: "wrap",
          margin: "1em",
          gap: 30,
        }}
      >
        <li>
          <Link to="/usestate">useState</Link>
        </li>

        <li>
          <Link to="/useeffect">useEffect</Link>
        </li>

        <li>
          <Link to="/usecontext">useContext</Link>
        </li>

        <li>
          <Link to="/usereducer">useReducer</Link>
        </li>

        <li>
          <Link to="/usecallback">useCallback</Link>
        </li>

        <li>
          <Link to="/usefetch">Custom Hook</Link>
        </li>

        <li>
          <Link to="/usememo">useMemo</Link>
        </li>

        <li>
          <Link to="/uselayouteffect">useLayoutEffect</Link>
        </li>

        <li>
          <Link to="/useref">useRef</Link>
        </li>

        <li>
          <Link to="/useimperativehandle">useImperativeHandle</Link>
        </li>

        <li>
          <Link to="/usetransition">useTransition</Link>
        </li>

        <li>
          <Link to="/usedeferredvalue">useDeferredValue</Link>
        </li>

        <li>
          <Link to="/usedebugvalue">useDebugValue</Link>
        </li>

        <li>
          <Link to="/useid">useId</Link>
        </li>
      </ul>
    </nav>
  );
}
