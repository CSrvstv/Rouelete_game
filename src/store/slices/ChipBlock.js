import { createSlice } from "@reduxjs/toolkit";

const BlockChip = createSlice({
  name: "chipBlock",
  initialState: true,
  reducers: {
    toggle(state, action) {
      return action.payload;
    },
  },
});

export default BlockChip.reducer;

export const { toggle } = BlockChip.actions;
