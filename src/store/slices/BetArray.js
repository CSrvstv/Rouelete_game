import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/subcomponents/Chiparr_constant2";

const initialState = [
  { num: 0, color: "green", chip: null, value: 0 },
  { num: 3, color: "red", chip: null, value: 0 },
  { num: 6, color: "black", chip: null, value: 0 },
  { num: 9, color: "red", chip: null, value: 0 },
  { num: 12, color: "red", chip: null, value: 0 },
  { num: 15, color: "black", chip: null, value: 0 },
  { num: 18, color: "red", chip: null, value: 0 },
  { num: 21, color: "red", chip: null, value: 0 },
  { num: 24, color: "black", chip: null, value: 0 },
  { num: 27, color: "red", chip: null, value: 0 },
  { num: 30, color: "red", chip: null, value: 0 },
  { num: 33, color: "black", chip: null, value: 0 },
  { num: 36, color: "red", chip: null, value: 0 },
  { num: "1:2", color: "simple", chip: null, value: 0 },
  { num: 2, color: "black", chip: null, value: 0 },
  { num: 5, color: "red", chip: null, value: 0 },
  { num: 8, color: "black", chip: null, value: 0 },
  { num: 11, color: "black", chip: null, value: 0 },
  { num: 14, color: "red", chip: null, value: 0 },
  { num: 17, color: "black", chip: null, value: 0 },
  { num: 20, color: "black", chip: null, value: 0 },
  { num: 23, color: "red", chip: null, value: 0 },
  { num: 26, color: "black", chip: null, value: 0 },
  { num: 29, color: "black", chip: null, value: 0 },
  { num: 32, color: "red", chip: null, value: 0 },
  { num: 35, color: "black", chip: null, value: 0 },
  { num: "1:2", color: "simple", chip: null, value: 0 },
  { num: 1, color: "red", chip: null, value: 0 },
  { num: 4, color: "black", chip: null, value: 0 },
  { num: 7, color: "red", chip: null, value: 0 },
  { num: 10, color: "black", chip: null, value: 0 },
  { num: 13, color: "black", chip: null, value: 0 },
  { num: 16, color: "red", chip: null, value: 0 },
  { num: 19, color: "red", chip: null, value: 0 },
  { num: 22, color: "black", chip: null, value: 0 },
  { num: 25, color: "red", chip: null, value: 0 },
  { num: 28, color: "black", chip: null, value: 0 },
  { num: 31, color: "black", chip: null, value: 0 },
  { num: 34, color: "red", chip: null, value: 0 },
  { num: "1:2", color: "simple", chip: null, value: 0 },
];
const betArr = createSlice({
  name: "betstack",
  initialState,
  reducers: {
    betPlace(state, action) {
      const { num, index } = action.payload;
      const it = state.findIndex((ele) => ele.num === num);
      chipsarr.map((c) => {
        if (it !== -1 && c.index == index) {
          state[it].chip = c.img;
          state[it].value += c.value;
        }
      });
    },
  },
});
export default betArr.reducer;
export const { betPlace } = betArr.actions;
