import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import style from "./Game.module.css";
import Modal from "./Modal";
import x from "../images/x.svg";
import { chipsarr } from "./Chiparr_constant.js";
import { useDispatch, useSelector } from "react-redux";
import { setchip } from "../store/slices/ChipSelect.js";
import { betarray } from "./BetTable.js";

export default function Game() {
  const selectedChip = useSelector((state) => {
    return state.selectedChip;
  });
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
        <div className={`${selectedChip === chip.img ? style.highlight : ""}`}>
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
      {/* /* <div className={style.gridbase}>
        <div className={style.gridno1}>0</div>
        <div className={style.gridno}>1</div>
        <div className={style.gridno}>2</div>
        <div className={style.gridno}>3</div>
        <div className={style.gridno}>4</div>
        <div className={style.gridno}>5</div>
        <div className={style.gridno}>6</div>
        <div className={style.gridno}>7</div>
        <div className={style.gridno}>8</div>
        <div className={style.gridno}>9</div>
        <div className={style.gridno}>10</div>
        <div className={style.gridno}>11</div>
        <div className={style.gridno}>12</div>
        <div className={style.gridno2}>2:1</div>
        <div className={style.gridno}>13</div>
        <div className={style.gridno}>14</div>
        <div className={style.gridno}>15</div>
        <div className={style.gridno}>16</div>
        <div className={style.gridno}>17</div>
        <div className={style.gridno}>18</div>
        <div className={style.gridno}>19</div>
        <div className={style.gridno}>20</div>
        <div className={style.gridno}>21</div>
        <div className={style.gridno}>22</div>
        <div className={style.gridno}>23</div>
        <div className={style.gridno}>24</div>
        <div className={style.gridno2}>2:1</div>
        <div className={style.gridno}>25</div>
        <div className={style.gridno}>26</div>
        <div className={style.gridno}>27</div>
        <div className={style.gridno}>28</div>
        <div className={style.gridno}>29</div>
        <div className={style.gridno}>30</div>
        <div className={style.gridno}>31</div>
        <div className={style.gridno}>32</div>
        <div className={style.gridno}>33</div>
        <div className={style.gridno}>34</div>
        <div className={style.gridno}>35</div>
        <div className={style.gridno}>36</div>
        <div className={style.gridno2}>2:1</div>
      </div> */}
      <div className={style.gridbase}>
        {betarray.map((obj, index) => {
          return (
            <div
              className={`${style.gridno} ${
                obj.color === "red"
                  ? style.gridred
                  : obj.color === "green"
                  ? style.gridgreen
                  : style.gridblack
              }`}
            >
              <div className={style.container}>{obj.num}</div>
            </div>
          );
        })}
      </div>
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
