import { useState } from "react"

const ToggleButton = () => {
    // click = the present value
    // setClick = function that handles the changes in the value
    // default state = false ("OFF")
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div>
            <button onClick={handleClick}>
                {click ? "ON" : "OFF"} 
            </button>
        </div>
    )
}

export default ToggleButton;