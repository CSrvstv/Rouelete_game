import React, { useState, useEffect, useCallback } from "react";
import { Timelimit } from "../../store/slices/Timer";
import { useDispatch, useSelector } from "react-redux";
import style from "./TimerBar.module.css";
import { toggle } from "../../store/slices/ChipBlock";
import { msg } from "../../store/slices/TimerMsg";
import { reset } from "../../store/slices/GridBet";
import { tot_bet } from "../../store/slices/TotalBet";
import { tot_bal } from "../../store/slices/TotalBal";
import { set_bethistory, get_random } from "../../store/slices/BetHistroy";
import r from "../../images/r.svg";

export default function TimerBar() {
  const timer = useSelector((state) => {
    return state.Tlimit;
  });
  const totalbet = useSelector((state) => {
    return state.totalbet;
  });

  const barmsg = useSelector((state) => state.msg);
  const dispatch = useDispatch();
  const [n, setN] = useState(Math.floor(Math.random() * 37));

  useEffect(() => {
    if (timer === 0) {
      dispatch(toggle(false));
      dispatch(reset());
      dispatch(msg("BETS CLOSED"));
      dispatch(tot_bal(totalbet));
      dispatch(tot_bet(0));
      setTimeout(() => {
        dispatch(msg("SPINNING"));
        setTimeout(() => {
          dispatch(msg("RESULT"));
          const newNumber = Math.floor(Math.random() * 37);
          setN(newNumber);
          dispatch(set_bethistory(newNumber));
        }, 5000);

        setTimeout(() => {
          dispatch(Timelimit(10));
          dispatch(msg("PLACE YOUR BETS - "));
          dispatch(toggle(true));
        }, 7000);
      }, 3000);
      return;
    } else {
      const intervalId = setInterval(() => {
        dispatch(Timelimit(timer - 1));
      }, 1000);
      return () => clearInterval(intervalId);
    }
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
