import React from 'react'

const Hooks = () => {
    let color='red'
  return (
    <div className='Hooks'>
      <h1>Without Hooks</h1>
      <h2>My favourite color is {color}</h2>
      {/* Yaha pe button pe click karne pe color chang n ho rha h isi problem ke wajah se hm hooks ka use karte */}
      <button onClick={()=>{
        color='black'
      }}>Black</button>
    </div>
  )
}

export default Hooks
