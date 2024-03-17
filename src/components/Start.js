import React from "react";
import { Link } from "react-router-dom";
import style from "./Start.module.css";

export default function Start() {
  return (
    <div className={style.container}>
      <div>
        <Link to="/Game">
          <button className={style.startButton}>START</button>
        </Link>
      </div>
    </div>
  );
}
