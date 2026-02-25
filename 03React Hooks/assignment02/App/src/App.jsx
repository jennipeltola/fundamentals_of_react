import { useRef } from 'react'

const App = () => {
  const inputRef = useRef()

  const handleFocus = () => {
    inputRef.current.focus()
  }

  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus</button>
    </>
  )
}

export default App