import React, { useState } from "react";
import "./App.css";

const App = () => {
  // let counter = 0;
  // let [counter,setCounter] =useState(0);

  // const increse = () => {
  //   setCounter(counter +1)
  //   // console.log(counter++);
  // };
  // const decrease =()=>{
  //   // console.log(counter--)
  //   if(counter>1){
  //     setCounter(counter-1)

  //   }
  // }
  const myBtn = {
    width: "100px",
    height: "40px",
    color: "white",
    // backgroundColor: "black",
    margin: "10px",
    border: "none",
  };
  const [color,setColor]=useState(false)
  const changeColor = () => {
    // console.log("Salam");
    setColor(!color)
  };
  return (
    <div className="btn">
      <button style={myBtn} className={color? "pink" :"red"} onClick={changeColor}>
        Change Color
      </button>
    </div>
  );
};

export default App;
