import React, { useState, useEffect, useRef } from "react";

const UseRefExample = () => {
  /* 
 //const [count, setCount] = useState(0);

  //dependency pass n karte pe jaise n array n timeing set karte h to infinite loop chlata rahata h
//   useEffect(() => {
//     setTimeout(() => setCount(count + 1));
//   });

*/
  //jo hm useEffect se karnte pe infinite loop chal raha h use rokne ke liy hm useRef ka use karte h
  let count = useRef(0);
  let [num,setNum]=useState(0)
  useEffect(() => {
    count.current = count.current+1;
  });
  return (
    <div>
      <h1>Ratice useRef</h1>
      <h1>{count.current}</h1>
      <h1>{num}</h1>
      <button onClick={()=>setNum(++num)}>num</button>
    </div>
  );
};

export default UseRefExample;
