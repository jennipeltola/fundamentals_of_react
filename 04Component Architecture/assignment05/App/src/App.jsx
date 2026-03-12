import { useState } from 'react'
import AddTask from './components/AddTask'
import ToDoList from './components/ToDoList'

const App = () => {
    const [newTask, setNewTask] = useState('')
    const [tasks, setTasks] = useState([
        { name: 'Code apps', completed: false},
        { name: 'Clean room', completed: false}
    ])

    // Handles adding a new task to the list
    const handleNewTask = (e) => {
        e.preventDefault()
        const taskObject = {
            name: newTask,
            completed: false
        }

        setTasks(tasks.concat(taskObject))
        setNewTask('')
    }

    return (
        <div>
            <h1>ToDo List</h1>
            <ToDoList tasks={tasks} setTasks={setTasks} />
            <AddTask
                newTask={newTask}
                setNewTask={setNewTask}
                handleNewTask={handleNewTask}
            />
        </div>
    )
}

export default App