import { useState } from "react";
import ThemeContext from "./ThemeContext";
import ThemeDisplay from "./ThemeDisplay";

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext value={theme}>
      <ThemeDisplay />
      <button onClick={() => theme === "light"
        ? setTheme("dark")
        : setTheme("light")
      }>
      Switch Theme
      </button>
    </ThemeContext>
  )
}

export default App