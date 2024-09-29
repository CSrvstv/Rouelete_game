import React, { useState, useEffect, useCallback } from "react";
import style from "./Footer.module.css";
import { chipsarr } from "../Chiparr_constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setchip } from "../../store/slices/ChipSelect.js";

export default function Footer() {
  const dispatch = useDispatch();
  const totalbet = useSelector((state) => {
    return state.totalbet;
  });
  const totalbal = useSelector((state) => {
    return state.totalbal;
  });
  const selectedChip = useSelector((state) => {
    return state.selectedChip;
  });
  const bethistory = useSelector((state) => {
    return state.bethistory;
  });
  const timer = useSelector((state) => {
    return state.Tlimit;
  });

  const handleSelectedChip = (chipindex) => {
    dispatch(setchip(chipindex));
  };

  const renderChips = useCallback(() => {
    return chipsarr.map((chip, index) => (
      <div
        key={index}
        className={` ${style.cimg} ${
          timer === 0 ? style.chipsdown : style.chipsup
        }`}
        onClick={() => {
          handleSelectedChip(chip.index);
        }}
      >
        <div
          className={`${selectedChip === chip.index ? style.highlight : ""}`}
        >
          <img alt="" src={chip.img} />
        </div>
      </div>
    ));
  }, [chipsarr, selectedChip, timer]);

  return (
    <div className={style.footer}>
      <div className={style.sub_footer}>
        <div className={style.bet_amt}>
          <p>Balance: ${totalbal}</p>
          <p>Total Bet: ${totalbet}</p>
        </div>
        <div className={style.chips}>{renderChips()}</div>
        <div className={style.statictis}>
          <p>statictis</p>
        </div>
      </div>
      <div className={style.main_footer}>
        {bethistory.map((e, i) => {
          return (
            <div
              key={i}
              className={`${style.text} ${
                e === 0
                  ? style.betgreen
                  : ((e - 2) % 9 === 0) |
                    ((e + 3) % 2 !== 0 && (e - 1) % 9 === 0) |
                    ((e - 4) % 9 === 0) |
                    ((e - 6) % 9 === 0) |
                    ((e - 8) % 9 === 0)
                  ? style.betblack
                  : style.betred
              }`}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
}