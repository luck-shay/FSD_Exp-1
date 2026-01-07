import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const addTask = () => {
    if (!task.trim()) return
    setTasks([...tasks, task])
    setTask('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask()
  }

  return (
    <div className="container">
      <div className="todo-box">
        <h1>Todo List</h1>

        <div className="input-row">
          <input
            type="text"
            placeholder="Add task (gym)"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul className="todo-list">
          {tasks.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
