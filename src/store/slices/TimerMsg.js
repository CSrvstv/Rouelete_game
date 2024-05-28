import { createSlice } from "@reduxjs/toolkit";

const TimerMsg = createSlice({
  name: "message",
  initialState: "PLACE YOUR BETS - ",
  reducers: {
    msg(state, action) {
      return action.payload;
    },
  },
});

export default TimerMsg.reducer;
export const { msg } = TimerMsg.actions;
