import React from 'react'
import Introduction from './introduction/Introduction'
import Props from './introduction/Props'
import State from './introduction/State'
import UseStateExa from './hooks/UseStateExa'
import UseEffectExa from './hooks/useEffectExa'

const App = () => {
  return (
    <div>
      <Introduction/>
      <Props/>
       <State/>
      <UseStateExa/>
       <UseEffectExa/>
    </div>
  )
}

export default App
