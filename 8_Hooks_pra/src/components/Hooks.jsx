import React from 'react'

const Hooks = () => {
    let color='red'
  return (
    <div>
      <h1>My favourite color is {color}</h1>
      {/* Yaha pe button pe click karne pe color chang n ho rha h isi problem ke wajah se hm hooks ka use karte */}
      <button onClick={()=>{
        color='black'
      }}>Black</button>
    </div>
  )
}

export default Hooks
