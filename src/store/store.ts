import { configureStore } from "@reduxjs/toolkit";
import { countryReducer } from "./slice/countrySlice";

export const store = configureStore({
  reducer: {
    countryStore: countryReducer,
  },
});
