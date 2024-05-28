import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/Chiparr_constant";

// const istate = chipsarr[0].img;

const chipselect = createSlice({
  name: "chipselect",
  initialState: chipsarr[0].index,
  reducers: {
    setchip(state, action) {
      //   console.log(action.payload);
      return action.payload;
    },
  },
});

export default chipselect.reducer;
export const { setchip } = chipselect.actions;
