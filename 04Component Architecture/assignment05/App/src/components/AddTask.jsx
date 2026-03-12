const AddTask = ({ newTask, setNewTask, handleNewTask }) => {
    return (
        <div>
            <h2>Add new Task</h2>
            <form onSubmit={handleNewTask}>
            <input
                type='text'
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder='Enter task name'
            />
            <button type='submit'>Save task</button>
            </form>
        </div>
    )
}

export default AddTask