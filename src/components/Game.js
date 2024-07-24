import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import style from "./Game.module.css";
import Modal from "./Modal";
import x from "../images/x.svg";
import u from "../images/u.svg";
import { useDispatch, useSelector } from "react-redux";
import Time from "./subcomponents/Time.js";
import TimerBar from "./subcomponents/TimerBar.js";
import betarray from "./subcomponents/Grid_constant1.js";
import subbetarray from "./subcomponents/Grid_constant2.js";
import { betPlace, undo } from "../store/slices/GridBet.js";
import Footer from "./subcomponents/Footer.js";
import { tot_bet } from "../store/slices/TotalBet.js";
export default function Game() {
  const selectedChip = useSelector((state) => {
    return state.selectedChip;
  });
  const arraybet = useSelector((state) => {
    return state.arraybet;
  });
  const timer = useSelector((state) => {
    return state.Tlimit;
  });
  const totalbet = useSelector((state) => {
    return state.totalbet;
  });
  const dispatch = useDispatch();
  useEffect(() => {}, [betarray, timer]);

  const time = <Time />;

  const handleBetspotClick = (num, chip) => {
    dispatch(betPlace({ num: num, chip: chip }));
    dispatch(tot_bet(chip));
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
            if (index.num === num) {
              obj = index;
            }
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
                  : ((num - 2) % 9 === 0) |
                    ((num + 3) % 2 !== 0 && (num - 1) % 9 === 0) |
                    ((num - 4) % 9 === 0) |
                    ((num - 6) % 9 === 0) |
                    ((num - 8) % 9 === 0)
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
      <div className={style.rowselect}>
        {subbetarray.map((num, i) => {
          let obj = null;
          arraybet.map((index) => {
            if (index.num === num) obj = index;
          });
          return (num === "row1") | (num === "row2") | (num === "row3") ? (
            <div
              onClick={() =>
                selectedChip !== null && timer > 0
                  ? handleBetspotClick(num, selectedChip)
                  : ""
              }
              className={style.simple}
            >
              {obj != null ? (
                <div className={style.container}>
                  <img src={obj.chip} alt="Selected Chip" />
                  <h6 className={style.value}>{obj.value}</h6>
                </div>
              ) : (
                <span>2:1</span>
              )}
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <div className={style.bottomgrid}>
        {subbetarray.map((num, i) => {
          let obj = null;
          arraybet.map((index) => {
            if (index.num === num) obj = index;
          });
          return (num === "1st 12") |
            (num === "2nd 12") |
            (num === "3rd 12") ? (
            <div
              key={i}
              onClick={() =>
                selectedChip != null ? handleBetspotClick(num) : ""
              }
              className={style.simple}
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
          ) : (
            ""
          );
        })}
        {subbetarray.map((num, i) => {
          let obj = null;
          arraybet.map((index) => {
            if (index.num === num) obj = index;
          });
          return (num === "1-18") |
            (num === "19-36") |
            (num === "Even") |
            (num === "Odd") ? (
            <div
              key={i}
              onClick={() =>
                selectedChip != null ? handleBetspotClick(num) : ""
              }
              className={style.simple2}
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
          ) : num === "Red" ? (
            <div
              key={i}
              onClick={() =>
                selectedChip != null ? handleBetspotClick(num) : ""
              }
              className={style.gridred}
            >
              {obj != null ? (
                <div className={style.container}>
                  <img src={obj.chip} alt="Selected Chip" />
                  <h6 className={style.value}>{obj.value}</h6>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : num === "Blue" ? (
            <div
              key={i}
              onClick={() =>
                selectedChip != null ? handleBetspotClick(num) : ""
              }
              className={style.gridblack}
            >
              {obj != null ? (
                <div className={style.container}>
                  <img src={obj.chip} alt="Selected Chip" />
                  <h6 className={style.value}>{obj.value}</h6>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          );
        })}
      </div>
      <div>
        <button
          className={timer>0 ? style.undo : style.undoblock}
          onClick={() => {
            timer > 0 && dispatch(undo()) && dispatch(tot_bet(-selectedChip));
          }}
        >
            <img src={u}></img>
        </button>
      </div>
      <Footer />
    </>
  );
}

// ==
// === - matches string
