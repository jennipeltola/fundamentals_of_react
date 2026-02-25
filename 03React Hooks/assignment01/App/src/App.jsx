import { useState } from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <h1>Count: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button onClick={() => setCounter(counter - 1)}>
        Decrease
      </button>
    </div>
  )
}



export default App
