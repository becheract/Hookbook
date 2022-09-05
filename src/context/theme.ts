import styled, { createGlobalStyle, css } from "styled-components";
import { Props } from "../Interfaces/Interface";

export const GlobalStyles = createGlobalStyle(
  (props: Props) => css`
    :root {
      --color-dark: hsl(0, 0%, 10%);
      --color-light: hsl(0, 0%, 95%);
      --color-react: #61dbfb;
    }

    body {
      background-color: ${props.theme === "light"
        ? "var(--color-light)"
        : "var(--color-dark)"};
      color: ${props.theme === "light"
        ? "var(--color-dark)"
        : "var(--color-light)"};
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      margin: 1.5em;
      font-weight: 500;
      font-family: inherit;
      background-color: ${props.theme === "light"
        ? "var(--color-light)"
        : "var(--color-react)"};
      color: ${props.theme === "light"
        ? "var(--color-dark)"
        : "var(--color-dark)"};
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
  `
);

export const ButtonStyles = styled.button`
  padding: 20px;
  background: #fff;
  border: 3px solid #8ecae6;
  border-radius: 20px;
  width: 125px;
  box-shadow: 10px 10px 5px lightblue;
  cursor: pointer;
  transition-duration: 0.4s;

  &:hover {
    transform: scale(1.2);
  }
`;
