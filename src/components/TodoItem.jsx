import React from "react"

const TodoItem = ({ task, removeTask, updateTask }) => {
  return (
    <li>
      <div className="text-list">
        <p>{task.title}</p>
        <p>{task.job}</p>
      </div>
      <div id="button-list">
        <button
          className={task.isDone ? "check is-done" : "check"}
          onClick={() => {
            updateTask(task)
          }}
        >
          {task.isDone ? "취소" : "완료"}
        </button>
        <button
          className="delete"
          onClick={() => {
            removeTask(task.id)
          }}
        >
          삭제
        </button>
      </div>
    </li>
  )
}

export default TodoItem
