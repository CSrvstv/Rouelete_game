import { createSlice } from "@reduxjs/toolkit";
import { chipsarr } from "../../components/Chiparr_constant";

const Bethistory = createSlice({
  name: "bethistory",
  initialState: "",
  reducers: {
    get_random(state, action) {
      const n = Math.floor(Math.random() * 37);
      return n;
    },
  },
});

export default Bethistory.reducer;
export const { get_random } = Bethistory.actions;
