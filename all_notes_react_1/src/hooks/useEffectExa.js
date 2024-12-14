import React from 'react'

const UseEffectExa = () => {
  return (
    <div>
      <h3>What is useEffect</h3>
      <p>useEffect ek React Hook hai jo functional components ke andar side effects ko manage karne ke liye use hota hai.</p>
      <ul>
        <li>Side effects ka matlab hai wo kaam jo component ke lifecycle ke dauran React ke main rendering flow ke bahar hote hain.</li>
        <li>Example: API calls, DOM manipulation, subscriptions, timers, etc.</li>
      </ul>
      <h3>useEffect का Syntax</h3>
      <img src='/usEffSyntax.png' />
      <ul>
        <li>Callback Function: Yeh function tab execute hota hai jab component render hota hai ya dependencies change hoti hain.</li>
        <li>Dependencies Array: Is array ke andar un variables ko mention karte hain jinke change hone par useEffect run kare. Agar empty array [] dete hain, to useEffect sirf ek baar (component mount hone par) chalega.</li>
        <li>Cleanup Function: Optional function jo component unmount hone par ya dependencies change hone par execute hota hai.</li>
      </ul>
      <h4>Example</h4>
      <p>Simple Example (Component Render Hone Par)</p>

    </div>
  )
}

export default UseEffectExa
