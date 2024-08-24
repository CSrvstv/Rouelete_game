import { configureStore } from "@reduxjs/toolkit";
import ChipSelect from "./slices/ChipSelect";
import Timer from "./slices/Timer";
import ChipBlock from "./slices/ChipBlock";
import TimerMsg from "./slices/TimerMsg";
import GridBet from "./slices/GridBet";
import TotalBet from "./slices/TotalBet";
import TotalBal from "./slices/TotalBal";
import BetHistroy from "./slices/BetHistroy";

const store = configureStore({
  reducer: {
    selectedChip: ChipSelect,
    Tlimit: Timer,
    chipBlock: ChipBlock,
    msg: TimerMsg,
    arraybet: GridBet,
    totalbet: TotalBet,
    totalbal: TotalBal,
    bethistory: BetHistroy
  },
});

export default store;
