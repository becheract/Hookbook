import React from "react";
import { ThemeContextProviderProps } from "../Interfaces/Interface";
import Title from "./Title";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #61dbfb;
`;

const P = styled.p`
  display: flex;
  justify-text: center;
  flex-direction: column;
  margin: 40px;
  width: 80vw;
  height: auto;
`;
interface Props {
  title: string;
  children: any;
}

export default function Article({ title, children }: Props) {
  return (
    <>
      <H1>{title}</H1>
      <P>{children}</P>
    </>
  );
}
