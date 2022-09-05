import React from "react";

export interface ThemeProps {
  foreground: string;
  background: string;
}

export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export interface Props {
  theme: string;
}

export interface StorageProps {
  key: string;
  initialValue: string;
}

export interface ContextProps {
  theme: string;
  setTheme: Function;
}
export enum Action {
  Increment = "increment",
  Decrement = "decrement",
}

export interface CountAction {
  type: Action;
  payload: number;
}

export interface CountState {
  count: number;
}
