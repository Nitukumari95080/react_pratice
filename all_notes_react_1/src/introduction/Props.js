import React from 'react'

const Props = () => {
  return (
    <div>
      <h3>1.React Props (Properties):</h3>
      <p>Props ka full form hai Properties. Ye parent component se child component ko data pass karne ka tarika hai.</p>
      <ul>
        <li>Props immutable hote hain, yani child component props ko change nahi kar sakta.</li>
        <li>Sirf "read-only" data ke liye use hote hain.</li>
      </ul>
      <img src="/props.jpg" alt="React Structure" width='300px' height='250px'/>
      <h4>Explanation:</h4>
      <ul>
        <li>name="Amit" ek prop hai jo Welcome component me pass kiya gaya hai.</li>
        <li>Component me props.name use karke data access kiya gaya.</li>
      </ul>
      <h4>Why use props</h4>
      <ul>
        <li><b>Data Transfer:</b>Parent-to-Child data transfer ke liye.</li>
        <li><b>Reusable Components:</b>Reusable aur dynamic components banane ke liye.</li>
        <li><b>Unidirectional Data Flow:</b>Data ka flow unidirectional hota hai (top-to-bottom).</li>
      </ul>
    </div>
  )
}

export default Props
