import { useState } from "react";
import "./App.css";

import Form from "./components/Form";
import Section from "./components/Section";

function App() {
  const [tasks, setTasks] = useState([]);
  const [working, setWorking] = useState([]);
  const [done, setDone] = useState([]);

  const id = Date.now();
  const isDone = false;
  const [title, setTitle] = useState("");
  const [job, setJob] = useState("");

  const onChangeHandler = (setText) => {
    setText(event.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    const task = {id, title, job, isDone};
    setTasks([...tasks, task]);
    setWorking([...working, task]);
    setTitle("");
    setJob("");
  };

  const renderSection = (section) => 
    section.map(task => 
      task.isDone === true
      ? <li>
          <div className="text-list">
            <p>{task.title}</p>
            <p>{task.job}</p>
          </div>
          <div id="button-list">
            <button className="check is-done" onClick={() => {updateTask(task)}}>취소</button>
            <button className="delete" onClick={() => {removeTask(task.id)}}>삭제</button>
          </div>
        </li>
      : <li>
          <div className="text-list">
            <p>{task.title}</p>
            <p>{task.job}</p>
          </div>
          <div id="button-list">
            <button className="check" onClick={() => {updateTask(task)}}>완료</button>
            <button className="delete" onClick={() => {removeTask(task.id)}}>삭제</button>
          </div>
        </li>
    );

  const removeTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);

    const newWorking = newTasks.filter(task => task.isDone === false);
    const newDone = newTasks.filter(task => task.isDone === true);
    setWorking(newWorking);
    setDone(newDone);
  };

  const updateTask = (task) => {
    task.isDone = !task.isDone;
    const newWorking = tasks.filter(task => task.isDone === false);
    const newDone = tasks.filter(task => task.isDone === true);
    setWorking(newWorking);
    setDone(newDone);
  };

  return (
    <>
      <h1>to-do list</h1>
      <Form title={title} setTitle={setTitle} job={job} setJob={setJob} addTask={addTask} onChangeHandler={onChangeHandler}/>
      <Section renderSection={renderSection(working)} sectionName="working"/>
      <Section renderSection={renderSection(done)} sectionName="done"/>
    </>
  );
}

export default App;