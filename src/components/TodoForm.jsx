import React from "react"
import { useState } from "react"

export default function Form({ tasks, setTasks, working, setWorking }) {
  const id = Date.now()
  const isDone = false
  const [title, setTitle] = useState("")
  const [job, setJob] = useState("")

  const onChangeHandler = (setText) => {
    setText(event.target.value)
  }

  const addTask = (e) => {
    e.preventDefault()
    if (!title.trim() || !job.trim()) {
      return alert("제목 또는 내용이 입력되지 않았습니다.")
    }
    const task = { id, title, job, isDone }
    setTasks([...tasks, task])
    setWorking([...working, task])
    setTitle("")
    setJob("")
  }

  return (
    <form onSubmit={addTask}>
      <div id="title">
        <label>제목</label>
        <input
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={() => onChangeHandler(setTitle)}
        />
      </div>
      <div id="job">
        <label>내용</label>
        <input
          type="text"
          placeholder="내용을 입력하세요"
          value={job}
          onChange={() => onChangeHandler(setJob)}
        />
      </div>
      <button>추가</button>
    </form>
  )
}
