import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/subcomponents/Chiparr_constant2";

const GridBet = createSlice({
  name: "betgrid",
  initialState: [],
  reducers: {
    betPlace(state, action) {
      const { num, chip } = action.payload;
      //   console.log(num);
      const chipObj = chipsarr.find((c) => c.index == chip);
      const it = state.findIndex((ele) => ele.num === num);
      if (it !== -1) {
        state[it].chip = chipObj.img;
        state[it].value += chipObj.value;
      } else {
        const betItem = { num: num, value: chipObj.value, chip: chipObj.img };

        state.push(betItem);
      }
      //   console.log(betItem);
    },
  },
});

export const { betPlace } = GridBet.actions;
export default GridBet.reducer;
