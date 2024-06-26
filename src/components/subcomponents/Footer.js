import React, { useState, useEffect, useCallback } from "react";
import style from "./Footer.module.css";
import { chipsarr } from "../Chiparr_constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setchip } from "../../store/slices/ChipSelect.js"
import { get_tot_bet } from "../../store/slices/GridBet.js";
export default function Footer() {
  const dispatch = useDispatch();
  const totalbet = useSelector((state) => {
    return state.totalbet;
  });
  const selectedChip = useSelector((state) => {
    return state.selectedChip;
  });
  const handleSelectedChip = (chipindex) => {
    dispatch(setchip(chipindex));
  };
  const timer = useSelector((state) => {
    return state.Tlimit;
  });
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

//   let balance;
//   let totalBet;
//   if (timer > 0) {
//     balance = <p>Balance: $5000</p>;
//     totalBet = <p>Total Bet: $0</p>;
//   } else {
//     balance = <p>Balance: $5000</p>;
//     totalBet = <p>Total Bet: ${totalbet}</p>;
//   }
let x = get_tot_bet();
console.log(x);
  return (
    <div className={style.footer}>
      <div className={style.sub_footer}>
        <div className={style.bet_amt}>
          <p>Balance: $5000</p>
          {/* <p>Total Bet: ${timer == 0 ? get_tot_bet() : "0"}</p> */}
        </div>
        <div className={style.chips}>{timer !== 0 ? renderChips() : ""}</div>
        <div></div>
      </div>
      <div className={style.main_footer}>Recent Results</div>
    </div>
  );
}
