import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import style from "./Game.module.css";
import Modal from "./Modal";
import x from "../images/x.svg";
import { chipsarr } from "./Chiparr_constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setchip } from "../store/slices/ChipSelect.js";

export default function Game() {
  const selectedChip = useSelector((state) => {
    return state.selectedChip;
  });
  // const handleSelectedChip = useCallback(
  //   (chipimg) => {
  //     console.log("Selected Chip:", chipimg);
  //     dispatch(setchip(chipimg));
  //   },
  //   [selectedChip]
  // );
  const dispatch = useDispatch();

  const handleSelectedChip = (chipimg) => {
    console.log(chipimg);
    dispatch(setchip(chipimg));
    console.log(selectedChip);
  };
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const set = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
      console.log(time);
    }, 1000);
    return () => clearInterval(set);
  }, []);
  const renderChips = useCallback(() => {
    return chipsarr.map((chip, index) => (
      <div
        key={index}
        className={style.cimg}
        onClick={() => {
          console.log("click");
          handleSelectedChip(chip.img);
        }}
      >
        <div className={`${selectedChip == chip.img ? style.highlight : ""}`}>
          <img alt="" src={chip.img} />
        </div>
      </div>
    ));
  }, [chipsarr, selectedChip]);

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
