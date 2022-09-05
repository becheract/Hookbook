import React from "react";

interface Props {
  clickHandler: () => void;
  salary: number;
}

function Salary({ clickHandler, salary }: Props) {
  console.log("Salary Button Rendered Salary = " + salary);
  return <button onClick={clickHandler}>Here's a Raise!</button>;
}

export default React.memo(Salary);
