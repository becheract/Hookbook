import React, { useMemo, useDeferredValue } from "react";

const List = ({ input }: any) => {
  const LIST_SIZE = 20000;
  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < LIST_SIZE; i++) {
      l.push(<div key={i}>{input}</div>);
    }
    return 1;
  }, [input]);

  return list;
};

export default List;
