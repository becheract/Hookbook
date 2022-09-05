import React, { createContext, useState, useEffect } from "react";
import { ButtonStyles, GlobalStyles } from "./theme";
import {
  ThemeContextProviderProps,
  StorageProps,
  ContextProps,
  Props,
} from "../Interfaces/Interface";

export const ButtonContext = createContext(ButtonStyles);

export const ButtonContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ButtonContext.Provider value={ButtonStyles}>
      {children}
    </ButtonContext.Provider>
  );
};

const useLocalStorage = (
  key: string,
  initialValue: string
): [string, Function] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });
  const setValue = (valueToStore: string): void => {
    try {
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export const ThemeContext = createContext<ContextProps>({
  theme: "",
  setTheme: () => null,
});

interface ProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider(props: ProviderProps): JSX.Element {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <GlobalStyles theme={theme} />
      {props.children}
    </ThemeContext.Provider>
  );
}
