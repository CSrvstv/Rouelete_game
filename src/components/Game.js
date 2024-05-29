import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import style from "./Game.module.css";
import Modal from "./Modal";
import x from "../images/x.svg";
import { chipsarr } from "./Chiparr_constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setchip } from "../store/slices/ChipSelect.js";
import Time from "./subcomponents/Time.js";
import TimerBar from "./subcomponents/TimerBar.js";
import betarray from "./subcomponents/Grid_constant1.js";
import subbetarray from "./subcomponents/Grid_constant2.js";
import { betPlace } from "../store/slices/GridBet.js";
export default function Game() {
  const selectedChip = useSelector((state) => {
    return state.selectedChip;
  });
  const arraybet = useSelector((state) => {
    return state.arraybet;
  });
  console.log(arraybet);
  const timer = useSelector((state) => {
    return state.Tlimit;
  });
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(timer);
  }, [betarray, timer]);
  const handleSelectedChip = (chipindex) => {
    dispatch(setchip(chipindex));
  };
  const time = <Time />;
  const renderChips = useCallback(() => {
    return chipsarr.map((chip, index) => (
      <div
        key={index}
        className={style.cimg}
        onClick={() => {
          handleSelectedChip(chip.index);
        }}
      >
        <div
          className={`${selectedChip === chip.index ? style.highlight : ""} 
          }`}
        >
          <img alt="" src={chip.img} />
        </div>
      </div>
    ));
  }, [chipsarr, selectedChip]);
  const handleBetspotClick = (num, chip) => {
    dispatch(betPlace({ num: num, chip: chip }));
  };
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
              <Modal text="Lobby" />
              <Modal text="History" />
              <Modal text="How to Play" />
            </div>
            <input
              type="text"
              placeholder="Type a message here..."
              className={style.text}
            ></input>
          </div>
        </div>
      </nav>
      <TimerBar />
      <div className={style.gridbase}>
        {betarray.map((num, i) => {
          let obj = null;
          arraybet.map((index) => {
            if (index.num == num) obj = index;
          });
          return (
            <div
              onClick={() =>
                selectedChip !== null && timer > 0
                  ? handleBetspotClick(num, selectedChip)
                  : ""
              }
              className={
                num === 0
                  ? style.gridgreen
                  : ((num - 2) % 9 == 0) |
                    ((num + 3) % 2 != 0 && (num - 1) % 9 == 0) |
                    ((num - 4) % 9 == 0) |
                    ((num - 6) % 9 == 0) |
                    ((num - 8) % 9 == 0)
                  ? style.gridblack
                  : style.gridred
              }
              key={i}
            >
              {obj != null ? (
                <div className={style.container}>
                  <img src={obj.chip} alt="Selected Chip" />
                  <h6 className={style.value}>{obj.value}</h6>
                </div>
              ) : (
                <span>{num}</span>
              )}
            </div>
          );
        })}
      </div>
      {/* <div className={style.bottomgrid}>
          {subbetarray.map((obj, index) => {
            return (
              <div
                key={index}
                className={`${style.gridno} ${
                  obj.color === "red"
                    ? style.gridred
                    : obj.color === "black"
                    ? style.gridblack
                    : obj.color === "b1black"
                    ? style.b1gridblack
                    : obj.color === "b2black"
                    ? style.b2gridblack
                    : obj.color === "b3black"
                    ? style.b3gridblack
                    : style.simple
                }`}
              >
                <div className={style.container}>{obj.num}</div>
              </div>
            );
          })}
        </div> */}
      <div className={style.footer}>
        <div className={style.sub_footer}>
          <div className={style.bet_amt}>
            <p>Balance: $5000</p>
            <p>Total Bet: $xxxx</p>
          </div>
          <div className={style.chips}>{timer != 0 ? renderChips() : ""}</div>
          <div></div>
        </div>
        <div className={style.main_footer}>Recent Results</div>
      </div>
    </>
  );
}

// ==
// === - matches string
