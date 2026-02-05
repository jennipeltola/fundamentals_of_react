import Message from "./exercises/greeting"
import ToggleButton from "./exercises/toggle"
import NameForm from "./exercises/showInput"

function App() {
  const greeting = "Welcome to React Basics Course"

  return (
  <div>
    <h1>{greeting}</h1>
    <Message name="Jenni" />
    <ToggleButton />
    <NameForm />
  </div>
  )

}

export default App
