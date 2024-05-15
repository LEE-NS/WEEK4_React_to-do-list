export default function Form({title, setTitle, job, setJob, addTask, onChangeHandler}) {

  return(
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