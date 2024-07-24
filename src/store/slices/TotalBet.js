import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/Chiparr_constant";

const totalBet = createSlice({
  name: "totalBet",
  initialState: 0,
  reducers: {
    tot_bet(state, action) {
        const index= action.payload;
        if(index == 0)
          return 0;
        else if(index > 0)
        {
      return chipsarr.reduce((val, e) => {
        if (e.index === index) {
          return val + e.value;
        }
        return val;
      }, state);
    }
    else{
      const x = -1 * index;
      return chipsarr.reduce((val, e) => {
        if (e.index === x) {
          return val - e.value;
        }
        return val;
      }, state);
    }
    },
  },
}); 

export default totalBet.reducer;
export const { tot_bet } = totalBet.actions;
