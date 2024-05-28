import { configureStore } from "@reduxjs/toolkit";
import ChipSelect from "./slices/ChipSelect";
import BetArray from "./slices/BetArray";
import Timer from "./slices/Timer";
import ChipBlock from "./slices/ChipBlock";
import TimerMsg from "./slices/TimerMsg";

const store = configureStore({
  reducer: {
    selectedChip: ChipSelect,
    arrayBet: BetArray,
    Tlimit: Timer,
    chipBlock: ChipBlock,
    msg: TimerMsg,
  },
});

export default store;
