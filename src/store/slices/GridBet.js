import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/subcomponents/Chiparr_constant2";
// let prev = [];
const GridBet = createSlice({
  name: "betgrid",
  initialState: [],
  reducers: {
    betPlace(state, action) {
      const { num, chip } = action.payload;
      const chipObj = chipsarr.find((c) => c.index == chip);
      const it = state.findIndex((ele) => ele.num === num);
      if (it !== -1) {
        state[it].chip = chipObj.img;
        state[it].value += chipObj.value;
      } else {
        const betItem = { num: num, value: chipObj.value, chip: chipObj.img };
        state.push(betItem);
      }
    },
    undo(state, action) {
      // const last = prev.pop();
      // const it = state.findIndex((ele) => ele.num === last.num);
      // console.log(last, it);
      // if (it != -1) state[it].value -= last.value;
      // if (state[it].value == 0) state.splice(it, 1);
      state.pop();
    },
    reset(state, action) {
      return state = [];
    },
    get_tot_bet(state, action) {
      const index= action.payload;
      return state.reduce((val, e) => {
        if (e.index === index) return val + e.value;
        console.log(val);
        return val;
        
      }, state);
  },
}});

export const { betPlace,undo,reset ,get_tot_bet} = GridBet.actions;
export default GridBet.reducer;
