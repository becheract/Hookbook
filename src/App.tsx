import React, { useState, useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import StatePage from "./pages/UseState";
import ReactLogo from "./assets/React.webp";
import Title from "./components/Title";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/theme-context";
import Nav from "./components/Nav";

function App() {
  return (
    <>
      <ThemeProvider>
        <div className="App">
          {" "}
          <a target="_blank">
            <img src={ReactLogo} className="logo react" alt="React logo" />
          </a>
          <Title title="Hookbook 🍳🎣" />
          <Nav />
          <Outlet />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
