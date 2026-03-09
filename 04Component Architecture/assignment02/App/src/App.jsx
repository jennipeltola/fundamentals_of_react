import { useState } from 'react'

const App = () => {
    return (
        <Home />
    )
}

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const handleToggle = () => {
        setIsLoggedIn(!isLoggedIn)
    }

    return (
        <div>
            <Welcome isLoggedIn={isLoggedIn} handleToggle={handleToggle} />
        </div>
    )
}

const Welcome = ({ isLoggedIn, handleToggle }) => {
    return (
        <div>
            <button onClick={handleToggle}>
            {isLoggedIn ? 'Welcome back!' : 'Please sign in.'}
            </button>
        </div>
    )
}

export default App