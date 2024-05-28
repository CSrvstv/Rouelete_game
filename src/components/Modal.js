import React from "react";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import style from "./Modal.module.css";
import x from "../images/x.svg";

export default function Modal(props) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <button onClick={toggleModal} className={style.lobby_heading}>
        <b>{props.text}</b>
      </button>

      {modal && (
        <div className={style.lobby}>
          <div onClick={toggleModal}></div>

          <div className={style.lobby_content}>
            <div className={style.lobby_in}>
              <img
                onClick={toggleModal}
                className={style.close_lobby}
                src={x}
              ></img>

              <h4>{props.text}</h4>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      )}
    </>
  );
}
