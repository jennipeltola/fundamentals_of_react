import { useState } from "react";
import { useEffect } from "react";

const TitleUpdater = () => {
    const [count, setCount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)

        // Cleanup to clear interval when component unmounts
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        document.title = `Counter: ${count}`
    }, [count])

    return <div>Counter value: {count}</div>
}

export default TitleUpdater;