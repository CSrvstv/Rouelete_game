import { createSlice } from "@reduxjs/toolkit";

const Timerstate = createSlice({
  name: "Timelimit",
  initialState: 10,
  reducers: {
    Timelimit(state, action) {
      return action.payload;
    },
  },
});

export default Timerstate.reducer;
export const { Timelimit } = Timerstate.actions;
