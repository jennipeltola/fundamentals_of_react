import { useState } from 'react'

const App = () => {
  return (
    <Parent />
  )
}

const Parent = () => {
  const [user, setUser] = useState('')

  const displayUser = () => {
    setUser('Username here')
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={displayUser}>Display Username</button>
      <Child send={user} />
    </div>
  )
}

const Child = (props) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{props.send}</p>
    </div>
  )
}

export default App