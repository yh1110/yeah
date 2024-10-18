import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: [
    {
      href: "/",
      name: "ホーム",
      isCurrentPage: true,
    },
  ],
};

const breadcrumbSlice = createSlice({
  name: "breadcrumbItems",
  initialState,
  reducers: {
    change: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { change } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
