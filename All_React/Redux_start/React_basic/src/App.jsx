import React from 'react'
import {Counter} from './components/Counter';
import { Counter1 } from './components/Counter1';

/*
state-less
state-full
*/

export const App = () => {
  let count1=0;
  const [count1, setCount]=React.useState(0);
  return (
    
    <>
    <Counter props={count1}/>
    <Counter1 props={{count, setCount}}/>

    </>
  )
}
