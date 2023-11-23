import React, { useState } from "react";
import "./App.css";

const App = () => {
  //   const tasks = [];
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: Date.now(), title: inputValue }]);
    setInputValue("");
  };
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <form action="">
        <input type="text" onChange={handleChange} value={inputValue} />
        <button onClick={addTask}>Add Task</button>
      </form>
      <ul className="list">
        {tasks.map((task) => (
          <div>
            <li key={task.id}>
              {task.title}
              <button onClick={() => deleteTask(task.id)} className="deleteBtn">
                Delete btn
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
