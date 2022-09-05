import React, { useContext, useState, useEffect } from "react";
import { ButtonContext, ThemeContext } from "../context/theme-context";
import styled from "styled-components";
import Article from "../components/Article";

export default function useCustomHook(): JSX.Element {
  const [mode, setMode] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);
  //Theme toggle
  //Button Styles
  const ButtonStyles = useContext(ButtonContext);
  useEffect(() => {
    switch (mode) {
      case true:
        setTheme("dark");
        setMode(true);
        break;
      case false:
        setTheme("light");
        setMode(false);
    }
  }, [mode]);

  return (
    <Article title={"useContext 🌎"}>
      <p> Getting styles from the button context</p>
      <p> And using Styled-Components</p>
      <p>The useContext API allows you to make state globally available</p>

      <ButtonStyles onClick={() => setMode(!mode)}>
        {mode ? "🌝" : "🌚"}
      </ButtonStyles>
    </Article>
  );
}
