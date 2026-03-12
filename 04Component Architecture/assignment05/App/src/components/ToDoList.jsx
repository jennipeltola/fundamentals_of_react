import ToDoItem from './ToDoItem'

const ToDoList = ({ tasks, setTasks }) => {
    return (
        <ul>
            {/* Iterate through tasks array and create a new ToDoItem
            component out of each item */}
            {/* Send a single task -object and whole list for toggling
                as props */ }
            {tasks.map(task =>
                <ToDoItem
                key={task.name}
                task={task}
                tasks={tasks}
                setTasks={setTasks}
                />
            )}
        </ul>
    )
}

export default ToDoList