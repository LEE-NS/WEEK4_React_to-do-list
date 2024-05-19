import React from "react"

const TodoItem = ({ task, tasks, setTasks }) => {
  const { id, title, job } = task

  const removeTask = (id) => {
    const newTasks = tasks.filter((eachTask) => eachTask.id !== id)
    setTasks(newTasks)
  }

  const updateTask = (id) => {
    const updatedTasks = tasks.map((eachTask) =>
      eachTask.id === id ? { ...eachTask, isDone: !task.isDone } : eachTask
    )
    setTasks(updatedTasks)
  }

  return (
    <div>
      <div className="text-list">
        <p>{title}</p>
        <p>{job}</p>
      </div>
      <div id="button-list">
        <button
          className={task.isDone ? "check is-done" : "check"}
          onClick={() => updateTask(id)}
        >
          {task.isDone ? "취소" : "완료"}
        </button>
        <button
          className="delete"
          onClick={() => {
            removeTask(id)
          }}
        >
          삭제
        </button>
      </div>
    </div>
  )
}

export default TodoItem
