import { useState } from "preact/hooks";
import AnotherIsland from "./AnotherIsland.tsx";

export default function List() {
  const [list, setList] = useState<Date[]>([]);
  return (
    <>
      <AnotherIsland/>
      <button onClick={() => setList((items) => [...items, new Date()])}>click me</button>
      {list.map((item) => (<div>{item.toISOString()}</div>))}
    </>
  );
}
