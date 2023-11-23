import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const changeHandleInput = (e) => {
    setInputValue(e.target.value);
  };

  const addTaskHandle = (event) => {
    event.preventDefault();
    if(inputValue!==""){
      setTask([...task, { id: Date.now(), title: inputValue }]);
    }
    setInputValue("")
  };
  const deleteTask=(id)=>{
    setTask(task.filter((item)=>item.id!==id))
  }

  return (
    <div className="todo-app">
      <form action="" onSubmit={addTaskHandle}>
        <input type="text" onChange={changeHandleInput} value={inputValue} />
        <button>Add Task TODO</button>
      </form>
      {task.map((item, index) => (
        <ul key={item.id}>
          <li>
            {index + 1 + "."}
            {item.title}
            <i onClick={()=>deleteTask(item.id)} className="fa-solid fa-trash"></i>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default App;
