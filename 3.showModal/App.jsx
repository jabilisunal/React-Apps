import React, { useState } from 'react'
import Modal from "./Modal"

const App = () => {
  const[openModal,setOpenModal] =useState(false);
  return (
    <div>
      <button onClick={()=>setOpenModal(true)} >Open Modal</button>
      {openModal && <Modal setOpenModal={setOpenModal}/> }
    </div>
  )
}

export default App
