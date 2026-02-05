import Message from "./exercises/greeting"

function App() {
  const greeting = "Welcome to React Basics Course"

  return (
  <div>
    <h1>{greeting}</h1>
    <Message name="Jenni" />
  </div>
  )

}

export default App
