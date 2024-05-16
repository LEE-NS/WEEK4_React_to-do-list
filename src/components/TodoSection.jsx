import React from "react"
import TodoItem from "./TodoItem"

export default function TodoSection({
  sectionName,
  tasks,
  setTasks,
  working,
  setWorking,
  done,
  setDone,
}) {
  const removeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)

    const newWorking = newTasks.filter((task) => task.isDone === false)
    const newDone = newTasks.filter((task) => task.isDone === true)
    setWorking(newWorking)
    setDone(newDone)
  }

  const updateTask = (task) => {
    task.isDone = !task.isDone
    const newWorking = tasks.filter((task) => task.isDone === false)
    const newDone = tasks.filter((task) => task.isDone === true)
    setWorking(newWorking)
    setDone(newDone)
  }

  return (
    <div className="category">
      <h2>{sectionName}</h2>
      <ul key={sectionName}>
        {(sectionName === "working" ? working : done).map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            removeTask={removeTask}
            updateTask={updateTask}
          />
        ))}
      </ul>
    </div>
  )
}
