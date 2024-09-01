import { createSlice } from "@reduxjs/toolkit";

const Bethistory = createSlice({
  name: "bethistory",
  initialState:[],
  reducers: {
      set_bethistory(state,action) {
        state.unshift(action.payload);
        console.log(state);
    },
  },
});
export default Bethistory.reducer;
export const { set_bethistory } = Bethistory.actions;
