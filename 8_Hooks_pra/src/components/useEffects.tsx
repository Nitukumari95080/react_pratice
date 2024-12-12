import React, { useState, useEffect } from "react";

function UseEffectsExample() {
    const [count, setCount] = useState(0);

  
   useEffect(()=>{
     setTimeout(()=>count+1)
   })
   
  return (
    <div>
      {count}
    </div>
  )
}

export default UseEffectsExample;
