import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    showSearch: false,
  },
  reducers: {
    toggle(state) {
      state.showSearch = !state.showSearch;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
