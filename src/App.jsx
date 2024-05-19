import { useState } from "react"
import "./App.css"

import TodoForm from "./components/TodoForm"
import TodoSection from "./components/TodoSection"

function App() {
  const [tasks, setTasks] = useState([])

  return (
    <>
      <h1>to-do list</h1>
      <TodoForm tasks={tasks} setTasks={setTasks} />
      <TodoSection sectionName="working" tasks={tasks} setTasks={setTasks} />
      <TodoSection sectionName="done" tasks={tasks} setTasks={setTasks} />
    </>
  )
}

export default App
