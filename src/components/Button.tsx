import React from "react";
interface UseStateProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

interface Button {
  title: string;
  useState: UseStateProps;
}

export default function Button({ title, useState }: Button) {
  const { count, setCount } = useState;

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <button onClick={increment} value={title}>
      {title}
    </button>
  );
}
