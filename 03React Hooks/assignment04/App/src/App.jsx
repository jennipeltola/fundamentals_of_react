import { useState, useEffect } from "react";

// Custom hook
const useTimer = () => {
  const [time, setTime] = useState("")

  useEffect(() => {
    // Create a new Date object and convert it to String
    const updateTime = () => {
      const nowTime = new Date()
      setTime(nowTime.toLocaleTimeString())
    }

    // Call updateTime() immediately to begin the timer
    updateTime()

    // Update timer ever 1 second
    const timerUpdate = setInterval(updateTime, 1000)

    // Cleanup
    return () => clearInterval(timerUpdate)
  }, [])

  return time;
}

const App = () => {
  // Using the custom hook
  const currentTime = useTimer()

  return (
    <>
    <h1>Timer</h1>
      <p>{currentTime}</p>
    </>
  )
}

export default App