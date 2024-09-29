import React, { useState, useEffect, useRef } from "react";
import { Timelimit } from "../../store/slices/Timer";
import { useDispatch, useSelector } from "react-redux";
import style from "./TimerBar.module.css";
import { toggle } from "../../store/slices/ChipBlock";
import { msg } from "../../store/slices/TimerMsg";
import { reset } from "../../store/slices/GridBet";
import { tot_bet } from "../../store/slices/TotalBet";
import { tot_bal } from "../../store/slices/TotalBal";
import { set_bethistory } from "../../store/slices/BetHistroy";
import r from "../../images/r.svg";

export default function TimerBar() {
  const timer = useSelector((state) => state.Tlimit);
  const totalbet = useSelector((state) => state.totalbet);
  const barmsg = useSelector((state) => state.msg);
  const arraybet = useSelector((state) => state.arraybet.bets);

  const dispatch = useDispatch();
  const [n, setN] = useState(Math.floor(Math.random() * 37));
  const timerRef = useRef(timer);

  useEffect(() => {
    timerRef.current = timer;
  }, [timer]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timerRef.current > 0) {
        dispatch(Timelimit(timerRef.current - 1));
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    let t = [];

    if (timer === 0) {
      dispatch(toggle(false));
      dispatch(reset());
      dispatch(msg("BETS CLOSED"));
      dispatch(tot_bal(totalbet));
      dispatch(tot_bet(0));
      const t1 = setTimeout(() => {
        dispatch(msg("SPINNING"));
      }, 5000);
      t.push(t1);

      const t2 = setTimeout(() => {
        dispatch(msg("RESULT"));
        const newNumber = Math.floor(Math.random() * 37);
        setN(newNumber);
        dispatch(set_bethistory(newNumber));

        const t3 = setTimeout(() => {
          if (arraybet.some((bet) => bet.num === newNumber)) {
            dispatch(msg("YOU WON"));
          } else {
            dispatch(msg("YOU LOSE"));
          }
        }, 3000);
        t.push(t3);
      }, 15000);
      t.push(t2);

      const t4 = setTimeout(() => {
        dispatch(Timelimit(10));
        dispatch(msg("PLACE YOUR BETS - "));
        dispatch(toggle(true));
      }, 26000);
      t.push(t4);
    }
    return () => {
      t.forEach(clearTimeout);
    };
  }, [timer]);

  const getTimerColor = () => {
    if (timer > 6) return "green";
    if (timer > 3) return "yellow";
    return "red";
  };

  const getTimerWidth = () => {
    return `${timer * 10}%`;
  };

  return (
    <div className={style.container}>
      <div
        className={`${style.random} ${
          barmsg === "RESULT" ? style.animate : ""
        }`}
      >
        {barmsg === "RESULT" && (
          <>
            <img src={r} alt="Random" />
            <p className={style.text}>{n}</p>
          </>
        )}
      </div>

      <div className={style.timer} data-timer={getTimerColor()}>
        {barmsg !== "BETS CLOSED" && timer !== 0 ? (
          <div className={style.timerFill} style={{ width: getTimerWidth() }}>
            <div className={style.timerin}>
              {barmsg} {timer}
            </div>
          </div>
        ) : (
          <div className={style.timerout}>{barmsg}</div>
        )}
      </div>
    </div>
  );
}
