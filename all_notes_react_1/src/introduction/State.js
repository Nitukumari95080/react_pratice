import React from 'react'

const State = () => {
  return (
    <div>
      <h3>1.React State:</h3>
      <p>State ek component ke andar ka private data hota hai jo dynamically change ho sakta hai.</p>
      <ul>
        <li>State mutable hoti hai, yani ise update kiya ja sakta hai.</li>
        <li>State ko mostly user interaction ya event ke response me update kiya jata hai.</li>
      </ul>
      <img src="/state.jpg" alt="React Structure" width='400px' height='300px'/>
      <ul>
        <li>useState(0) ek initial state value set karta hai</li>
        <li>setCount function state ko update karta hai jab button click hota hai.</li>
      </ul>
    </div>
  )
}

export default State
