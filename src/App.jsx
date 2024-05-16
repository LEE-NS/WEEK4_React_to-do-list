import { useState } from "react"
import "./App.css"

import TodoForm from "./components/TodoForm"
import TodoSection from "./components/TodoSection"

function App() {
  const [tasks, setTasks] = useState([])
  const [working, setWorking] = useState([])
  const [done, setDone] = useState([])

  return (
    <>
      <h1>to-do list</h1>
      <TodoForm
        tasks={tasks}
        setTasks={setTasks}
        working={working}
        setWorking={setWorking}
      />
      <TodoSection
        sectionName="working"
        tasks={tasks}
        setTasks={setTasks}
        working={working}
        setWorking={setWorking}
        done={done}
        setDone={setDone}
      />
      <TodoSection
        sectionName="done"
        tasks={tasks}
        setTasks={setTasks}
        working={working}
        setWorking={setWorking}
        done={done}
        setDone={setDone}
      />
    </>
  )
}

export default App
