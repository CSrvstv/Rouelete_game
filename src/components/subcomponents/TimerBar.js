import React, { useState, useEffect, useCallback } from "react";
import { Timelimit } from "../../store/slices/Timer";
import { useDispatch, useSelector } from "react-redux";
import style from "./TimerBar.module.css";
import { toggle } from "../../store/slices/ChipBlock";
import { msg } from "../../store/slices/TimerMsg";
import { reset } from "../../store/slices/GridBet";
export default function TimerBar() {
  const timer = useSelector((state) => {
    return state.Tlimit;
  });
  const barmsg = useSelector((state) => state.msg);
  const dispatch = useDispatch();
  useEffect(() => {
    if (timer === 0) {
      dispatch(toggle(false));
      dispatch(reset());
      dispatch(msg("BETS CLOSED !!"));
      setTimeout(() => {
        dispatch(msg("SPINNING"));
        //random no show krna hai
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
    <div className={style.timer}>
      {timer === 0 ? (
        <>{barmsg}</>
      ) : (
        <>
          {barmsg} {timer}
        </>
      )}
    </div>
  );
}
