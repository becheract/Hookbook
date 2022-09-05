import React, { useCallback, useState } from "react";
import Article from "../components/Article";
import Age from "../components/Age";
import Salary from "../components/Salary";

export default function UseCallback() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(15);

  const ageHandler = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const salaryHandler = useCallback(() => {
    setSalary(salary + 500);
  }, [salary]);

  return (
    <Article title={"useCallback 📲"}>
      <p>
        Good when you want to prevent a function from being called on every
        render
      </p>
      <p>useCallback caches the provided function instance itself</p>
      <p>If you need to cache a function use useCallback</p>
      <Age clickHandler={ageHandler} age={age} />
      <Salary clickHandler={salaryHandler} salary={salary} />
    </Article>
  );
}
