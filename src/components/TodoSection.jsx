import React from "react"
import TodoItem from "./TodoItem"

export default function TodoSection({ sectionName, tasks, setTasks }) {
  const working = tasks.filter((task) => !task.isDone)
  const done = tasks.filter((task) => task.isDone)
  // 섹션 자체에 filter를 사용해 둔다.

  return (
    <div className="category">
      <h2>{sectionName}</h2>
      <ul>
        {(sectionName === "working" ? working : done).map((task) => (
          <li key={task.id}>
            <TodoItem task={task} tasks={tasks} setTasks={setTasks} />
          </li>
        ))}
      </ul>
    </div>
  )
}
