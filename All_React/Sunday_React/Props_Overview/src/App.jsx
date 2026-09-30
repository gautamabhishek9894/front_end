import React from "react";
import { Child_1 } from "./components/Child";

export const App = () => {
  return (
    <>
      <Child_1 no={1} name={"abhishek"} arr={'student'} />
      <Child_1 no={2} arr={'student'} />
      <Child_1 />
      <Child_1  name={"mehfooz"} arr={'trainer'}/>
    </>
  )
}