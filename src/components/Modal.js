import React from 'react'
import { useSearchParams} from 'react-router-dom'
import { useState } from 'react';
import './Modal.module.css';

export default function Modal() {
    const [modal,setModal] = useState(false);

    const toggleModal = () => {
    setModal(!modal);
  };
  return (
     <>
      <button onClick={toggleModal} className="lobby_heading">Lobby</button>

      {modal && (
        <div className="lobby">
          <div onClick={toggleModal} className='lobby_in'></div>
          <button className="close_lobby" onClick={toggleModal}>X</button>
          <div className='lobby_content'>
            <h2>Lobby</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>)}
    </>
  )
}
