import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/Chiparr_constant";

const totalBal = createSlice({
  name: "totalBal",
  initialState: 5000,
  reducers: {
    tot_bal(state, action) {
        const val = action.payload;
      state -= val;
      if(state <= 0)
        return 0;
      return state;
    },
  },
});

export default totalBal.reducer;
export const { tot_bal } = totalBal.actions;
