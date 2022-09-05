import React, { useMemo } from "react";

interface Props {
  clickHandler: () => void;
  age: number;
}
function Age({ clickHandler, age }: Props) {
  console.log("Age Button Rendered Age = " + age);
  return <button onClick={clickHandler}>Happy birthday!</button>;
}

export default React.memo(Age);
