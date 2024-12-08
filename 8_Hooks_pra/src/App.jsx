
import Hooks from './components/Hooks'
import UseEffectExample from './components/useEffec'
import UseRefExample from './components/useRef'
import UseState from './components/UseState'

const App = () => {
  return (
    <div>
      <h1>Pratice Hooks</h1>
      <Hooks/>
      <UseState/>
      <UseEffectExample/>
      <UseRefExample/>
    </div>
  )
}

export default App
