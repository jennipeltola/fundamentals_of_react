import { useState } from 'react'

const App = () => {
  return (
    <Parent />
  )
}

const Parent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Display count={count} />
      <IncrementButton setCount={setCount} />
    </div>
  )
}

const Display = ({ count }) => <p>Count: {count}</p>

const IncrementButton = ({ setCount }) => {
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>
        Increment
      </button>
    </div>
  )
}

export default App