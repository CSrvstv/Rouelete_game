import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Game.module.css";
import Modal from "./Modal";

export default function Game() {
  let t = new Date().toLocaleTimeString();
  const [time, setTime] = useState(t);
  useEffect(() => {
    const set = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(time);
    }, 1000);
    return () => clearInterval(set);
  }, []);
  return (
    <nav className={style.navbar}>
      <div className={style.nav_elements}>
        <div className={style.left_elements}>
          <div className={style.sub_left_ele}>
            <Link to="/"> X </Link>
            <h1> Roulette: $0.1 - $5000 </h1>
          </div>
          <h3>{time}</h3>
        </div>
        <div className={style.right_elements}>
          <Modal />
          <Modal />
          <Modal />
          <input type="text" placeholder="Type a message here..."></input>
        </div>
      </div>
    </nav>
  );
}
