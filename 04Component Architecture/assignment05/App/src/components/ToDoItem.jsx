import styles from '../styles/ToDoItem.module.css'

const ToDoItem = ({ task, tasks, setTasks }) => {

    // Handles toggling the completed tasks with CSS style
    const handleToggle = () => {
        // Iterate through the array and copy the list (modifying the state
        // directly is not allowed!), t = clicked task
        const toggledTasks = tasks.map(t => {
            if (t.name === task.name) {
                return { name: t.name, completed: !t.completed }
        }
        // If task button wasn't clicked, return with no changes
            return t
    })
        // Update state with copied list
        setTasks(toggledTasks)
    }

    return (
        <>
        {/* If true, add CSS style from module */ }
        <li
            className={task.completed ? styles.completed : ''}
        >
            {task.name}
            <button onClick={handleToggle}>Mark completed</button>
        </li>
        </>
    )
}

export default ToDoItem