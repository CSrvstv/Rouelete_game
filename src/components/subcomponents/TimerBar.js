import React, { useState, useEffect, useCallback } from "react";
import { Timelimit } from "../../store/slices/Timer";
import { useDispatch, useSelector } from "react-redux";
import style from "./TimerBar.module.css";
import { toggle } from "../../store/slices/ChipBlock";
import { msg } from "../../store/slices/TimerMsg";
import { reset } from "../../store/slices/GridBet";
import { tot_bet } from "../../store/slices/TotalBet";
import { tot_bal } from "../../store/slices/TotalBal";
import { get_random } from "../../store/slices/BetHistroy";
import r from "../../images/r.svg"
export default function TimerBar() {
  const timer = useSelector((state) => {
    return state.Tlimit;
  });
  const totalbet = useSelector((state) => {
    return state.totalbet;
  });
  const randomnum = useSelector((state) => {
    return state.randomnum;
  });
  const barmsg = useSelector((state) => state.msg);
  const dispatch = useDispatch();
  useEffect(() => {
    if (timer === 0) {
      dispatch(toggle(false));
      dispatch(reset());
      dispatch(msg("BETS CLOSED"));
      dispatch(tot_bal(totalbet))
      dispatch(tot_bet(0))
      setTimeout(() => {
        dispatch(msg("SPINNING"));
        setTimeout(()=>{dispatch(get_random())
        dispatch(msg("RESULT")); },3000);
        setTimeout(() => {
          dispatch(Timelimit(10));
          dispatch(msg("PLACE YOUR BETS - "));
          dispatch(toggle(true));
        }, 5000);
      }, 3000);
      return;
    } else {
      const intervalId = setInterval(() => {
        dispatch(Timelimit(timer - 1));
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [timer]);
  return (
    <div className={style.container}>
      <div className={style.random}>
        {barmsg === "RESULT" && (
          <>
            <img src={r} alt="Random" />
            <p className={style.text}>{randomnum}</p>
          </>
        )}
      </div>
      <div className={style.timer}>
        {timer == 0 ? (
          barmsg
        ) : (
          <>
            {barmsg} {timer}
          </>
        )}
      </div>
    </div>
  );
}
