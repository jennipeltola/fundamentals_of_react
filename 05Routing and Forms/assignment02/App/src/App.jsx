import { useRef, useState } from 'react'
import UncontrolledForm from './UncontrolledForm'

const App = () => {
  const inputRef = useRef(null)
  const [message, setMessage] = useState('')

  // Handles displaying the message depending on input content
  const handleSubmit = () => {
    const value = inputRef.current.value
    if (value) {
      setMessage(`The value is ${value}.`)
    } else {
      setMessage('Nothing to display')
    }
  }

  return (
    <div>
      <h1>Uncontrolled Form</h1>
      <UncontrolledForm
        handleSubmit={handleSubmit}
        inputRef={inputRef}
        message={message}
      />
    </div>
  )
}

export default App