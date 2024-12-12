import React, { useState, useEffect } from "react";

//note -> ager ham pahle jo bhi function likhete h wo pahle run karta h or aywys time karta h jsie without depency useEffect
const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  // const [count2, setCount2] = useState(0);
  // const [count3, setCount3] = useState(0);
  //without depency use useEffect -> Run on every render

    useEffect(() => {
       setTimeout(() => setCount(count + 1));
    });

  //when add dependency but empty array passed -> Rund only on the First render
  //   useEffect(() => {
  //     setTimeout(() => setCount(count2 + 1), 1000);
  //   }, []);

  //when add dependency -> Rund many times  render
  //   useEffect(() => {
  //     setTimeout(() => setCount(count3 + 1), 1000);
  //   }, [count3]);

  //when add dependency -> Rund many times  render
  // useEffect(() => {
  //   setTimeout(() => setCount(count3 + 1), 1000);
  // }, [count3]);
  return (
    <div className="Hooks">
      <h1>Practice useEffect</h1>
      <div>
        <h3>When No Dependency passed :- Runs on every render</h3>
        <h3>When An Empty array passed :- Runs only on the first render</h3>
        <h3>When An dependency passed :- Runs many render</h3>
        <h1>{count}</h1>
      </div>
    <div>
       <h1>{count3}</h1>
       <button onClick={()=>setCount3(count3+1)}>click me</button>
    </div>
    </div>
  );
};

export default UseEffectExample;
