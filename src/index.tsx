import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import Switch, { HashRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UseState from "./pages/UseState";
import UseEffect from "./pages/UseEffect";
import UseContext from "./pages/UseContext";
import UseReducer from "./pages/UseReducer";
import UseCallback from "./pages/UseCallback";
import CustomHook from "./pages/CustomHook";
import UseMemo from "./pages/UseMemo";
import UseRef from "./pages/UseRef";
import Uselayouteffect from "./pages/UseLayoutEffect";
import UseImperativeHandle from "./pages/UseImperativeHandle";
import UseTransition from "./pages/UseTransition";
import UseDefreredValue from "./pages/UseDefreredValue";
import UseDebugValue from "./pages/UseDebugValue";
import UseId from "./pages/UseId";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path="/Hookbook" element={<App />}>
        <Route path="usestate" element={<UseState />} />
        <Route path="useeffect" element={<UseEffect />} />
        <Route path="usecontext" element={<UseContext />} />
        <Route path="usereducer" element={<UseReducer />} />
        <Route path="usecallback" element={<UseCallback />} />
        <Route path="usefetch" element={<CustomHook />} />
        <Route path="usememo" element={<UseMemo />} />
        <Route path="uselayouteffect" element={<Uselayouteffect />} />
        <Route path="useref" element={<UseRef />} />
        <Route path="useimperativehandle" element={<UseImperativeHandle />} />
        <Route path="usetransition" element={<UseTransition />} />
        <Route path="usedeferredvalue" element={<UseDefreredValue />} />
        <Route path="usedebugvalue" element={<UseDebugValue />} />
        <Route path="useid" element={<UseId />} />
      </Route>
    </Routes>
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
