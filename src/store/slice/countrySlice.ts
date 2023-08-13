import { createSlice } from "@reduxjs/toolkit";

const initialState = { country: "", region: "" }; // initial state for store

export const countrySlice = createSlice({
  name: "country",
  initialState: initialState,
  reducers: {
    searchByCountry: (state, action) => {
      state.country = action.payload;
    },

    searchByRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { searchByCountry, searchByRegion } = countrySlice.actions;
export const countryReducer = countrySlice.reducer;
