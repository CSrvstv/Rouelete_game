import { configureStore } from "@reduxjs/toolkit";
import ChipSelect from "./slices/ChipSelect";

const store = configureStore({
  reducer: {
    selectedChip: ChipSelect,
  },
});

export default store;
