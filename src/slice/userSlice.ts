import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //現在のuser情報のグローバルステート
    getCurrentUser: (state, action) => {
      state.user = action.payload;
      console.log(state.user);
    },
  },
});

export const { getCurrentUser } = userSlice.actions;
export default userSlice.reducer;
