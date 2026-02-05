import { useState } from "react";

function NameForm() {
    const [input, setInput] = useState("")

    // Handles the input change
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    // Displays the name on alert window
    const handleClick = () => {
        alert(input)
    }

    return (
        <div>
            <label>Enter your name:
                <input 
                    type="text"
                    value={input}
                    onChange={handleChange}
                 />
            </label>
            <button onClick={handleClick}>Show name</button>
        </div>
    )
}

export default NameForm