import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/subcomponents/Chiparr_constant2";
import { useDispatch as dispatch } from "react-redux";
import { tot_bet } from "./TotalBet";

let prev = []; // For undo functionality

const GridBet = createSlice({
  name: "GridBet",
  initialState: {
    bets: [], // Current bets
    lastState: [], // Last state for the repeat functionality
  },
  reducers: {
    betPlace(state, action) {
      const { num, chip } = action.payload;
      const chipObj = chipsarr.find((c) => c.index == chip);
      const it = state.bets.findIndex((ele) => ele.num === num);
      if (it !== -1) {
        state.bets[it].chip = chipObj.img;
        state.bets[it].value += chipObj.value;
      } else {
        const betItem = { num: num, value: chipObj.value, chip: chipObj.img };
        state.bets.push(betItem);
      }
      const newbetItem = { num: num, value: chipObj.value, chip: chipObj.img };
      prev.push(newbetItem);

      // Store the current state for rebet functionality
      state.lastState = [...state.bets];
    },
    undo(state) {
      if (prev.length == 0) return;
      const last = prev.pop();
      const it = state.bets.findIndex((ele) => ele.num === last.num);
      if (it !== -1) state.bets[it].value -= last.value;
      if (state.bets[it].value === 0) state.bets.splice(it, 1);
    },
    reset(state) {
      state.lastState = [...state.bets]; // Save the current state before resetting
      state.bets = []; // Clear the current state
    },
    get_tot_bet(state, action) {
      const index = action.payload;
      return state.bets.reduce((val, e) => {
        if (e.num === index) return val + e.value;
        return val;
      }, 0); // Reduce to get total value
    },
    rebet(state) {
      state.bets = [...state.lastState]; // Restore the last state
    },
  },
});

export const { betPlace, undo, reset, get_tot_bet, rebet } = GridBet.actions;
export default GridBet.reducer;
