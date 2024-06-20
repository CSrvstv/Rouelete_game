import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/Chiparr_constant";

const totalBet = createSlice({
  name: "totalBet",
  initialState: 0,
  reducers: {
    tot_bet(state, action) {
        const index= action.payload;
      return chipsarr.reduce((val, e) => {
        if (e.index === index) {
          return val + e.value;
        }
        return val;
      }, state);
    },
    // tot_bet(state,action){
        
    // },
  },
}); 

export default totalBet.reducer;
export const { tot_bet } = totalBet.actions;
