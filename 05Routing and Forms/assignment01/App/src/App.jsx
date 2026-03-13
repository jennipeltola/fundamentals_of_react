import { useState } from 'react'
import LoginForm from './LoginForm'

const App = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate input for the fields
    if (!email.includes('@') && password.length < 6) {
      setMessage(
        'Email must contain @ character, password must be at least 6 characters long!'
      )
    } else if (!email.includes('@')) {
      setMessage('Invalid email, must cointain @ character!')
    } else if (password.length < 6) {
      setMessage('Invalid password, must be at least 6 characters long!')
    } else {
      setMessage('Login successful!')
    }
  }

  return (
    <div>
      <h1>Login Form</h1>
        <LoginForm
          email={email} setEmail={setEmail}
          password={password} setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
        <p>{message}</p>
    </div>
  )
}

export default App