import React from 'react';
import { useState } from 'react';
import Modal from './Modal'
import Backdrop from './Backdrop'

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function deteteHandler() {
    setmodalIsOpen(true);
  }

  function closeModalHandler(){
    setmodalIsOpen(false)
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deteteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler}/>}
    
    </div>
  );
}

export default Todo;
