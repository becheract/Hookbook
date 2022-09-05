import React, { useId } from "react";
import Article from "../components/Article";

export default function UseId() {
  return (
    <Article title="UseId">
      <p>If you have multiple of the same components with the same id.</p>
      <p>Will give you a unique id each time you render a component</p>
      <p>Important for client and server side rendering</p>
      <EmailForm />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem odit
        illum maiores blanditiis facere iusto enim aperiam praesentium cum
        itaque quasi voluptatem at doloremque quibusdam ut aliquid, earum quia?
        Molestiae.
      </p>
      <EmailForm />
    </Article>
  );
}

const EmailForm = () => {
  const id = useId();
  return (
    <>
      <label htmlFor="email">Email</label>
      <input type="email" id={id}></input>
    </>
  );
};
