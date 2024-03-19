import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import style from "./Game.module.css";
import Modal from "./Modal";
import x from "../images/x.svg";
import { chipsarr } from "./Chiparr_constant.js";

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
  const renderChips = useCallback(() => {
    return chipsarr.map((chip, index) => (
      <div key={index} className={style.cimg}>
        <div>
          <img alt="" src={chip.img}></img>
        </div>
      </div>
    ));
  }, [chipsarr]);

  // const selectchip = document.querySelectorAll(".highlight");

  // selectchip.forEach((schip) => {
  //   schip.addEventListener("click", () => {
  //     document.querySelector(".highlight")?.classList.remove(".highlight");
  //     schip.classList.add(".highlight");
  //   });
  // });

  return (
    <>
      <nav className={style.navbar}>
        <div className={style.nav_elements}>
          <div className={style.left_elements}>
            <Link to="/">
              <img className={style.image} src={x}></img>
            </Link>
            <div className={style.sub_left_ele}>
              <h1> Roulette: $0.1 - $5000 </h1>
              <h5>{time}</h5>
            </div>
          </div>
          <div className={style.right_elements}>
            <div className={style.sub_right_ele}>
              <Modal />
              <Modal />
              <Modal />
            </div>
            <input
              type="text"
              placeholder="Type a message here..."
              className={style.text}
            ></input>
          </div>
        </div>
      </nav>
      <div className={style.footer}>
        <div className={style.sub_footer}>
          <div className={style.bet_amt}>
            <p>Balance: $5000</p>
            <p>Total Bet: $xxxxx</p>
          </div>
          <div className={style.chips}>{renderChips()}</div>
          <div></div>
        </div>
        <div className={style.main_footer}>Recent Results</div>
      </div>
    </>
  );
}
