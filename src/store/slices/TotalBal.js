import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/Chiparr_constant";

const totalBal = createSlice({
  name: "totalBal",
  initialState: 5000,
  reducers: {
    tot_bal(state, action) {
      
    },
  },
});

export default totalBal.reducer;
export const { tot_bal } = totalBal.actions;
