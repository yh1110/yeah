import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEmailVerified: true,
};

const isEmailVerifiedSlice = createSlice({
  name: "isEmailVerified",
  initialState,
  reducers: {
    //現在のuser情報のグローバルステート
    setIsEmailVerified: (state, action) => {
      state.isEmailVerified = action.payload;
    },
  },
});

export const { setIsEmailVerified } = isEmailVerifiedSlice.actions;
export default isEmailVerifiedSlice.reducer;
